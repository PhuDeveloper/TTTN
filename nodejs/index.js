const express = require("express");
const cors = require("cors");
const app = express();

var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const rout=require("./routes/router")
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

app.use("/app",rout)

app.listen(8080,()=>{
    console.log("Server running on port 8080");
})