const express=require('express');

const app=express();
const port=3000;

app.use(express.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{res.send('express-validator server')})


app.listen(port,()=>{console.log(`listening at ${port}`)})