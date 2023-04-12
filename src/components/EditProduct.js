import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditProduct = ({ oneProduct, getOneProduct, editProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleSaveChange() {
    let editedProduct = {
      title,
      price,
      image,
    };
    editProduct(id, editedProduct);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#181818",
          flexDirection: "column",
          textAlign: "center",
          margin: "20px",
          padding: "15px",
          width: "250px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff" }}>Edit</h2>

        <div style={{ margin: "10px" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Link to="/list">
            <button
              onClick={handleSaveChange}
              style={{
                width: "100px",
                height: "30px",
                backgroundColor: "black",
                color: "#fff",
                border: "2px solid #fff",
              }}
            >
              save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
