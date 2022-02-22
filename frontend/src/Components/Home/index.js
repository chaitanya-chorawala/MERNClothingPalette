import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../AdminProduct/product";
import authContext from "../Auth-Context/Auth-Context";

const Home = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);

  const FetchProduct = async () => {
    const res = await axios.get(`${auth.baseURL}/Product/`);
    setProductList(res.data.data);
  };

  useEffect(() => {
    if (!auth.status) navigate("/Login");
    else {
      FetchProduct();
    }
  }, []);

  return (
    <div className="row">
      <div className="card">
        <div className="card-header">
          <h4>Search product</h4>
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
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product._id}>
                    <td>{product.ProductName}</td>
                    <td>{product.Price}</td>
                    <td>{product.Size}</td>
                    <td>{product.Color}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
