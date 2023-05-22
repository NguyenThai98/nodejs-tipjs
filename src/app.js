const express = require('express');
const app = express();

const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression())


app.get("/", (req, res, next) =>{
    return res.json({
        message: "data"
    })
})
// init db

// init router

// handling error

module.exports = app;