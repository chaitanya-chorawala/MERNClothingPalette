import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../Auth-Context/Auth-Context";
import axios from "axios";

const ProductFormEdit = (props) => {
  const auth = useContext(authContext);

  const [UserInput, setUserInput] = useState({
    _id: props.OldData._id,
    ProductName: props.OldData.ProductName,
    Price: props.OldData.Price,
    Size: props.OldData.Size,
    Color: props.OldData.Color,
  });

  const ProductNameHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        ProductName: e.target.value,
      };
    });
  };

  const PriceHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        Price: e.target.value,
      };
    });
  };

  const SizeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        Size: e.target.value,
      };
    });
  };

  const ColorHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        Color: e.target.value,
      };
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.ChangeProduct(UserInput);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="row" style={{ padding: "20px" }}>
        <h4>Change product</h4>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Product Name</lable>
            <input
              type="text"
              name="txtProductName"
              className="form-control"
              placeholder="*ProductName"
              value={UserInput.ProductName}
              onChange={ProductNameHandler}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Price</lable>
            <input
              type="text"
              name="txtPrice"
              className="form-control"
              placeholder="*Price"
              value={UserInput.Price}
              onChange={PriceHandler}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Size</lable>
            <input
              type="text"
              name="txtSize"
              className="form-control"
              placeholder="*Size"
              value={UserInput.Size}
              onChange={SizeHandler}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Color</lable>
            <input
              type="text"
              className="form-control"
              name="txtColor"
              placeholder="*Color"
              value={UserInput.Color}
              onChange={ColorHandler}
            />
          </div>
        </div>
        <div className="col-md-5" style={{ padding: "10px" }}>
          <div className="form-group">
            <input
              type="submit"
              name="btnChange"
              className="btn btn-outline-primary"
              value="Change"
            />

            <input
              type="button"
              name="btnBack"
              className="btn btn-outline-dark"
              value="Cancel"
              onClick={props.OnCancel}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductFormEdit;
