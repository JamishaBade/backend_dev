const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send("This is the default page")
})
app.get("/profile",function(req,res){
    res.send("Hello user")
})
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});