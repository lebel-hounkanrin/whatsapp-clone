const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors")
const port = 5000;
const app = express();
const server = http.createServer(app);
const io  = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:4200"
    }
});

app.get("/", (req, res) => {
    res.send("everything is okay")
});

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("sendMessage", (msg) => console.log(msg));
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
})