import React, { useContext, useReducer } from "react";
import { productsReducer } from "../ProductsReducer";
import CartContext from "../CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { products, dispatch } = useContext(CartContext);

    const handleDelete = (prodId) => {
        dispatch({type: "DELETE", payload: prodId});
    }

  return (
    <div className="w-full p-10 flex flex-col gap-11">
      <h3 className="text-3xl">Cart</h3>

      <div className="w-full flex flex-col gap-5">
        {products.map((prod) => {
          return <CartItem key={prod.id} product={prod} onDelete={handleDelete} />
        })}
      </div>
    </div>
  );
}

export default Cart;
