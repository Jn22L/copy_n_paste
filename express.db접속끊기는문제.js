// stack overflow 에서 찾은 해결책 - 주석제거전 백업 ( 2022.10.23 )

var db;
function handleDisconnect() {
  db = mysql.createConnection(dbconfig); // Recreate the connection, since
  // the old one cannot be reused.

  db.connect(function (err) {
    // The server is either down
    if (err) {
      // or restarting (takes a while sometimes).
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  db.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else {
      // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();
