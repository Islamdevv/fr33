import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import { useState } from "react";
import axios from "axios";

function App() {
  const API = "http://localhost:8000/products";
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API);
    setProduct(data);
  }
  async function deleteProduct(id) {
    axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProduct();
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/add"
          element={<AddProduct createProduct={createProduct} />}
        />
        <Route
          path="/list"
          element={
            <ListProduct
              deleteProduct={deleteProduct}
              readProduct={readProduct}
              product={product}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              getOneProduct={getOneProduct}
              oneProduct={oneProduct}
              editProduct={editProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
