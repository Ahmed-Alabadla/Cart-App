import { Table } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCart,
  decreaseQuantity,
  deleteToCart,
  increaseQuantity,
} from "../redux/reducers/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart?.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-8">
        <p className="text-3xl font-bold text-gray-900">
          <span className="text-2xl text-gray-700">Total price: </span> $
          {totalPrice.toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(cleanCart())}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Clean
        </button>
      </div>
      <div className="overflow-x-auto my-4 border rounded-lg">
        <Table>
          <Table.Head className="border-b">
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart.map((product) => (
              <Table.Row
                key={product.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.title}
                </Table.Cell>
                <Table.Cell>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-12 h-12"
                  />
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    {product.quantity}
                    <button
                      onClick={() => dispatch(increaseQuantity(product))}
                      className="text-2xl bg-sky-500 flex items-center justify-center text-white w-7 h-7 rounded-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(decreaseQuantity(product))}
                      className="text-2xl bg-red-500 flex items-center justify-center text-white w-7 h-7 rounded-lg"
                    >
                      -
                    </button>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => dispatch(deleteToCart(product))}
                    className="font-medium text-red-600 hover:underline "
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Cart;
