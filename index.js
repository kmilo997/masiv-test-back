const serverless = require("serverless-http");
const express = require("express");
const axios = require('axios');
const cors = require('cors');
var app = express();
app.use(cors());
app.get("/", (request,response) => {
    const idComic = request.query.idComic;
    axios.get(`https://xkcd.com/${idComic}/info.0.json`)
    .then((res) => {
        response.send(res.data);
    })
    .catch(() => {
        response.status(404).send('Comic not found');
    });
})

module.exports.handler = serverless(app);