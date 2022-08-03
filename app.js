var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("home");
});

app.get("/test",function(req,res){
    res.send("bu bir test denemesidir.");
});

app.get("/test/:bisey",function(req,res){
     bisey=req.params.bisey;
    res.render("test");
});
app.get("*",function(res,res){
    res.send("sayfa bulunamadı!!")
})
var server=app.listen(3000,function(){
    console.log("Sunucu şu anda port numarasında : %d",
    server.address().port);
});