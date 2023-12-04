const mongoose = require('mongoose');
const url="mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/mern-handicraft?retryWrites=true&w=majority";
console.log("in connection file")
mongoose.connect(url).then((result)=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;