// be

app.get("/select", (req, res) => {
  //const curDateTime = moment(new Date()).format("YYYYMMDDHHmm");

  console.log(req.query);
  var param = {
    SEQ: req.query.SEQ,
  };

  var format = { language: "sql", indent: "  " };
  var query = mybatisMapper.getStatement("hjboard", "selectBoard", param, format);

  connection.query(query, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});


// xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="hjboard">  

<!-- 투표건수 -->
<select id="selectBoard">
  SELECT SEQ, TITLE, CONTENT, USER_ID, DATE_FORMAT(CREATE_DT,'%Y-%m-%d %H:%i') AS CREATE_DT
    FROM HJ_BOARD 
   WHERE 1=1   
   ORDER BY SEQ DESC
</select>

</mapper>
