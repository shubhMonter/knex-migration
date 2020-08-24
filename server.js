var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.port || 8080;
var app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/cities",require("./routes/cities"));
app.use("/hotels",require("./routes/hotels"));
app.use("/dishes",require("./routes/dishes"));
app.listen(port, ()=>{
    console.log("listening on Port:",port);
})