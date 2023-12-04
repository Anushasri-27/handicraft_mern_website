const {Schema ,model} = require('../connection');
const productScehma = new Schema({
    pname: String,
    pprice:String,
    pcategory:String,
    pdescription:String,
    pimage: String
});

module.exports = model('product', productScehma);

