const mongoose = require('mongoose');
const url="mongodb+srv://anushasrivastava1999:lovejoshi1995@cluster0.eyfhd23.mongodb.net/handicraft?retryWrites=true&w=majority";
console.log("in connection file")
mongoose.connect(url).then((result)=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;