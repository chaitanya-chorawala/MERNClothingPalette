import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../Auth-Context/Auth-Context";
import axios from "axios";

const ProductForm = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const navigateProduct = () => navigate("/Admin/Product/");
  const [UserInput, setUserInput] = useState({
    ProductName: "",
    Price: "",
    Size: "",
    Color: "",
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
    console.log(auth.baseURL);
    console.log(UserInput);

    axios
      .post(`${auth.baseURL}/Product/Add`, {
        data: UserInput,
      })
      .then((success) => {
        // console.log(success);
        navigateProduct();
      });
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Product Name</lable>
            <input
              type="text"
              name="txtProductName"
              className="form-control"
              placeholder="*ProductName"
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
              onChange={ColorHandler}
            />
          </div>
        </div>
        <div className="col-md-5" style={{ padding: "10px" }}>
          <div className="form-group">
            <input
              type="submit"
              name="btnSave"
              className="btn btn-outline-success"
              value="Save"
            />

            <input
              type="button"
              name="btnBack"
              className="btn btn-outline-dark"
              value="Back"
              onClick={navigateProduct}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
