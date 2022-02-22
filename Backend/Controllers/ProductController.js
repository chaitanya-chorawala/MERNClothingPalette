const ProductModel = require("../Models/ProductModel");

exports.Add = (req, res) => {
  var msg = "";
  try {
    const { data } = req.body;
    ProductModel.create(data, (err) => {
      if (err) {
        msg = "Error: " + err;
      } else {
        msg = "Record Saved Sucessfully";
      }
    });
  } catch (error) {
    msg = "Error: " + error;
  }
  return res.json({ data: msg });
};

exports.List = async (req, res) => {
  var msg = "";
  try {
    const productList = await ProductModel.find();
    if (productList.length !== 0) {
      msg = productList;
    } else {
      msg = "No Record Found :(";
    }
  } catch (error) {
    msg = "Error: " + error;
  }
  return res.json({ data: msg });
};

exports.Update = async (req, res) => {
  var msg = "";
  try {
    const { data } = req.body;
    const UpdatedProduct = await ProductModel.findOneAndUpdate(
      {
        _id: data._id,
      },
      {
        $set: {
          ProductName: data.ProductName,
          Price: data.Price,
          Size: data.Size,
          Color: data.Color,
        },
      },
      {
        new: true,
      }
    );

    if (UpdatedProduct.length !== 0) {
      msg = "Record changed successfully!";
    } else {
      msg = "No record found :(";
    }
  } catch (error) {
    msg = `Error: ${error}`;
  }

  return res.json({ data: msg });
};

exports.Delete = async (req, res) => {
  var msg = "";
  try {
    const id = req.params.id;
    const deletedProduct = await ProductModel.findOneAndDelete({ _id: id });

    if (deletedProduct.length !== 0) {
      msg = "Record deleted successfully!";
    } else {
      msg = "No record found :(";
    }
  } catch (err) {
    msg = `Error: ${err}`;
  }

  return res.json({ data: msg });
};

exports.Search = async (req, res) => {
  var msg = "";
  try {
    const productName = req.body.ProductName;
    const productList = await ProductModel.find({ ProductName: productName });
    if (productList.length !== 0) {
      msg = productList;
    } else {
      msg = "No Record Found :(";
    }
  } catch (err) {
    msg = `Error: ${err}`;
  }
  return res.json({ data: msg });
};
