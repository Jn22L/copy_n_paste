const express = require("express");
const mysql = require("mysql");
const mybatisMapper = require("mybatis-mapper");
const mySocket = require("./socket");

const rootDir = __dirname.replace("services", ""); // root 폴더위치 ( /services -> / )
const dbconfig = require(`${rootDir}/config/dbconfig.js`);

mybatisMapper.createMapper([`${rootDir}/board.xml`]);

const app = express();
const port = 8080;

app.use(express.json()); // json body 받기설정

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbconfig);
  connection.connect(function (err) {
    if (err) {
      //console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.get("/paget2l6/select-hjboard", (req, res) => {
  //const curDateTime = moment(new Date()).format("YYYYMMDDHHmm");

  // console.log(req.query);
  var param = {
    SEQ: req.query.SEQ,
  };

  var format = { language: "sql", indent: "  " };
  var query = mybatisMapper.getStatement("hjboard", "selectBoard", param, format);
  //  console.log(query);

  connection.query(query, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

/**
 * 입력/수정/삭제(N건)
 * @param
 * @return
 */
app.post("/paget2l6/save-hjboard", function (req, res) {
  console.log("param:", req.body.modifiedRows);
  /*  
    modifiedRows: {
        createdRows: [ ...  ],
        updatedRows: [ ...  ],
        deletedRows: [ ...  ]
    }
  */
  let sqlErrMsg = [];

  // 삭제
  req.body.modifiedRows.deletedRows.forEach(function (row) {
    let SEQ = row.SEQ;
    let sql = `DELETE FROM HJ_BOARD WHERE SEQ = ${SEQ}`;
    connection.query(sql, function (err, result) {
      if (err) {
        sqlErrMsg.push({ sqlMessage: err.sqlMessage, sql: err.sql });
      }
    });
  });

  // 입력
  req.body.modifiedRows.createdRows.forEach(function (row) {
    let TITLE = row.TITLE;
    let CONTENT = row.CONTENT;
    let USER_ID = row.USER_ID;
    let sql = `INSERT INTO HJ_BOARD(TITLE, CONTENT, USER_ID, CREATE_DT) VALUES('${TITLE}', '${CONTENT}', '${USER_ID}', ${"NOW()"})`;
    connection.query(sql, function (err, result) {
      if (err) {
        sqlErrMsg.push({ sqlMessage: err.sqlMessage, sql: err.sql });
      }
    });
  });

  // 수정
  req.body.modifiedRows.updatedRows.forEach(function (row) {
    let SEQ = row.SEQ;
    let TITLE = row.TITLE;
    let CONTENT = row.CONTENT;
    let USER_ID = row.USER_ID;
    let sql = `UPDATE HJ_BOARD SET TITLE = '${TITLE}', CONTENT = '${CONTENT}', USER_ID = '${USER_ID}' WHERE SEQ = ${SEQ}`;
    connection.query(sql, function (err, result) {
      if (err) {
        sqlErrMsg.push({ sqlMessage: err.sqlMessage, sql: err.sql });
      }
    });
  });

  // 모든 DML 처리후, 결과리턴을 위한 dummy select ... 더 좋은 방법은 ?
  connection.query(`SELECT 1`, (error, rows) => {
    res.json(JSON.stringify({ resMsg: sqlErrMsg.length === 0 ? "저장성공" : "에러발생", sqlErrMsg }));
  });
});

app.use(express.static(__dirname + "/public")); // 라우터 밑에 위치해야 좀더 빠르다곤 하는데 ? 모르겠음.

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mySocket(server); // 서버를 넘겨줌
