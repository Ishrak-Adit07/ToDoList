const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//importing routes
const todoRouter = require('./routes/todo.route');
app.use("/todos", todoRouter);


//Default response
app.use("/", (req, res)=>{
    res.send("Backend is running with Node js");
});

module.exports = app;