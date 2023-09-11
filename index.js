const express = require('express');
const app = express ();

app.get("/", (req, res, nest) => {
    res.send("Bienvenido");
});

app.get("/:name", (req, res, nest) => {
    res.status(200);
    res.send("Hola,"+req.params.name);
});

app.listen(3000, ()=> {
    console.log("Server is runing...");
});