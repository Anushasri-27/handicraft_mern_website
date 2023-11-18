const { Schema, model } = require("../connection");

const productSchema = new Schema({
  pname: String,
  pcategory: String,
  artStyle: String,
  pprice: String,
  pcolor:String,
  pdescription: String,
});

module.exports = model("product", productSchema);
