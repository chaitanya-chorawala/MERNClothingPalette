import React from "react";

const Product = (props) => {
  const EditHandler = () => {
    console.log(props.productData);
    props.EditProduct(props.productData);
  };

  const DeleteHandler = () => {
    props.DeleteProduct(props.productData._id);
  };

  return (
    <tr key={props.productData._id}>
      <td>{props.productData.ProductName}</td>
      <td>{props.productData.Price}</td>
      <td>{props.productData.Size}</td>
      <td>{props.productData.Color}</td>
      <td>
        <div className="btn btn-group btn-sm">
          <button className="btn btn-outline-primary" onClick={EditHandler}>
            Edit
          </button>
          <button className="btn btn-outline-danger" onClick={DeleteHandler}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
