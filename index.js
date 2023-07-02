// CommonJs Style
// const express = require('express')
import express from "express";
import morgan from "morgan";

const app = express()
const port = 3000;
const logger = morgan("tiny");

app.use(logger);

app.get('/', (req, res, next) => {
    console.log("home 2nd");
    res.send('Hello World! ppt');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
