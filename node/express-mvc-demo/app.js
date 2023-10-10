const express=require('express');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/userRoutes');
const app=express();
const port=3000;

app.set('view engine','ejs');

app.use(express.urlencoded({
    extended:false
}))

app.use('/user',userRoutes);

app.get('/',(req,res)=>{res.send('')})

app.listen(port,()=>{console.log(`listening at ${port}`)})