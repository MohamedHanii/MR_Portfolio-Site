var express = require("express"),
    app = express();
const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/Home",function(req,res){
    res.render("home.ejs");
});
app.get("/Instgram",function(req,res){
        res.render("instgram");
});
app.get("/Youtube",function(req,res){
        res.render("youtube");
});
app.get("/Presets",function(req,res){
        res.render("presets");
});
app.get("/Luts",function(req,res){
        res.render("luts");
});
 
app.get("/", function (req, res) {
    res.render("landing");
});

app.listen(port, function () {
        console.log("Server has started .... at port " + port + " ip: " + ip);
});