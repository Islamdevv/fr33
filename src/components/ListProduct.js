import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ListProduct = ({ readProduct, deleteProduct, product }) => {
  const { id } = useParams();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {product.map((el, index) => {
          return (
            <div
              style={{
                backgroundColor: "#383838",
                textAlign: "center",
                padding: "15px",
                borderRadius: "15px",
                margin: "7px",
              }}
            >
              <div key={index}>
                <img
                  style={{
                    border: "3px solid #fff",
                    borderRadius: "15px",
                    objectFit: "cover",
                  }}
                  src={el.image}
                  width="180px"
                  height="200px"
                  alt=""
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    maxHeight: "60px",
                  }}
                >
                  <h3>{el.title}</h3>
                  <h3>{el.price}</h3>
                </div>
              </div>
              <button
                style={{
                  width: "80px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "#fff",
                  border: "2px solid #fff",
                }}
                onClick={(e) => {
                  deleteProduct(el.id);
                }}
              >
                delete
              </button>
              <Link to={`/edit/${el.id}`}>
                <button
                  style={{
                    marginLeft: "10px",
                    width: "80px",
                    height: "30px",
                    backgroundColor: "black",
                    color: "#fff",
                    border: "2px solid #fff",
                  }}
                >
                  edit
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
