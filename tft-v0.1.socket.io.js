const SocketIO = require("socket.io");
module.exports = (server) => {
  const io = SocketIO(server);
  const userList = [];

  io.on("connection", (socket) => {
    socket.on("join user", (nickname) => {
      socket.nickname = nickname;
      userList.push({ nickname }); // 접속 해제시 삭제가 안되어 불편 -> 더 좋은 방법 찾을것.
      const userCount = io.of("/").sockets.size;
      io.emit("join user", { nickname, userList, userCount });
    });

    socket.on("choice", (msg) => {
      io.emit("choice", msg);
    });

    socket.on("next round", (round) => {
      io.emit("next round", round);
    });

    socket.on("game over", (round) => {
      io.emit("game over", round);
    });

    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("chat message", "disconnect");
    });
  });
};
