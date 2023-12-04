const express = require('express');
const app = express();
const port = 5000;

const productRouter = require('./routers/ProductRouter');
const user=require('./routers/UserRouter');

app.use(express.json());

app.use('/product', productRouter)
app.use('/user',user);


app.listen(port , ()=>{
    console.log("server is running att port 5000")
})