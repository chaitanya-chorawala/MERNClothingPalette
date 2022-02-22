import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../Auth-Context/Auth-Context";
import Product from "./product";
import ProductFormEdit from "./ProductFormEdit";

const AdminProduct = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [oldEditData, setOldEditData] = useState({});

  const FetchProduct = async () => {
    const res = await axios.get(`${auth.baseURL}/Product/`);
    setProductList(res.data.data);
  };

  const EditProductHandler = (data) => {
    console.log(data);
    setIsEdit(true);
    setOldEditData(data);
  };

  const ProductChangeHandler = (ChangedData) => {
    console.log(ChangedData);
    const res = axios
      .put(`${auth.baseURL}/Product/Update`, {
        data: ChangedData,
      })
      .then((success) => {
        setIsEdit(false);
        FetchProduct();
      });
  };

  const DeleteProductHandler = (id) => {
    console.log(id);
    const res = axios
      .delete(`${auth.baseURL}/Product/Delete/${id}`)
      .then(() => {
        FetchProduct();
      });
  };

  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div className="row">
      <div className="card">
        <div className="card-header">
          <h4>Product</h4>
          {isEdit ? (
            <ProductFormEdit
              OldData={oldEditData}
              ChangeProduct={ProductChangeHandler}
              OnCancel={() => setIsEdit(false)}
            ></ProductFormEdit>
          ) : (
            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/Admin/Product/Add")}
            >
              Add
            </button>
          )}
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <Product
                    productData={product}
                    EditProduct={EditProductHandler}
                    DeleteProduct={DeleteProductHandler}
                  ></Product>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
