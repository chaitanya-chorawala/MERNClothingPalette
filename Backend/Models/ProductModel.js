const mongoose = require("mongoose");
mongoose.pluralize(null);

const ProductSchema = mongoose.Schema({
    ProductName : String,
    Price : Number,
    Size : String,
    Color : String
});

const ProductModel = mongoose.model("ProductMaster", ProductSchema);

module.exports = ProductModel;