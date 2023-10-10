const express=require('express');
const helmet=require('helmet');
const https=require('https');
const path=require('path');
const fs=require('fs');

const app=express();
const port=3000

app.use(helmet());

app.use(express.urlencoded({
    extended:true
}))

app.get('/',(req,res)=>{res.send('hello world')})

const sslServer=https.createServer({
    key:fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem'))

},app)

sslServer.listen(port,()=>{console.log(`listening at ${port}`)})