import { Navbar } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NavbarApp() {
  const countProducts = useSelector((state) => state.cart);
  console.log(countProducts);
  return (
    <Navbar fluid rounded className="bg-gray-200">
      <NavLink to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-indigo-600">
          Cart App
        </span>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">Products</Link>
        <Link to="cart">Cart - {countProducts.length}</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
