const {Schema ,model} = require('../connection');
const productScehma = new Schema({
    pname: String,
    pprice:String,
    pcategory:String,
    pstock: String,
    pdescription:String
});

module.exports = model('product', productScehma);

