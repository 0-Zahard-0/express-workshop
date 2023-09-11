const express = require('express');
const app = express ();

app.get("/", (req, res, nest) => {
    res.send("Bienvenido");
});

app.listen(3000, ()=> {
    console.log("Server is runing...");
});