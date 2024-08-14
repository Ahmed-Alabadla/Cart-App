import { Route, Routes } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container ">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
