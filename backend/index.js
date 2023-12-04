const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const productRouter = require('./routers/ProductRouter');
const user=require('./routers/UserRouter');
const UtilRouter = require('./routers/Utils');

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());

app.use('/product', productRouter)
app.use('/user',user);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));


app.listen(port , ()=>{
    console.log("server is running at port 5000")
})