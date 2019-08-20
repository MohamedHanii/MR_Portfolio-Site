var express = require("express"),
    app = express();

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

app.listen(3000,function() {
    console.log("Server Start Running");
    
});