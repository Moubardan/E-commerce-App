import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Card from "./pages/Card";
import { Route, Routes, Navigate } from "react-router-dom";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/card" element={<Card />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
