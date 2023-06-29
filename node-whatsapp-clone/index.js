const express = require("express");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("everything is okay")
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})