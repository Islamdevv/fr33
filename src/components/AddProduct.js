import React, { useState } from "react";

const AddProduct = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function hendleProduct() {
    if (!title || !price || !image) {
      alert("Запоните поле");
      return;
    }

    let newProduct = {
      title,
      price,
      image,
    };

    createProduct(newProduct);
    setTitle("");
    setPrice("");
    setImage("");
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
        <h2 style={{ textAlign: "center", color: "#fff" }}>Create</h2>

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
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "black",
              color: "#fff",
              border: "2px solid #fff",
            }}
            onClick={hendleProduct}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
