import express from "express";

const app = express();

app.get("/api/demo",(req,res)=>{
    res.send("Hello World");
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})