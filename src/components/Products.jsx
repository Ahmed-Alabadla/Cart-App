import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productsSlice";
import { addToCart } from "../redux/reducers/cartSlice";
import { Card, Rating } from "flowbite-react";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="my-3 flex items-center justify-center flex-wrap gap-4">
      {/* <div className="my-3 grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
      {products.map((product) => (
        <Card
          className="w-[319px]"
          imgAlt={product.title}
          imgSrc={product.image}
          key={product.id}
        >
          <p>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {product.title}
            </h5>
          </p>
          <div className="mb-5 mt-2.5 flex items-center">
            <Rating>
              <Rating.Star />
              <p className="ml-2  font-bold text-gray-900 ">
                {product.rating.rate}
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 " />
              <span className=" font-medium text-gray-900 underline hover:no-underline cursor-pointer">
                {product.rating.count} reviews
              </span>
            </Rating>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">
              ${product.price}
            </span>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Products;
