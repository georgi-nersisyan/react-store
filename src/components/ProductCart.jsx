import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCart({product, maxLengthDes, maxLengthTit, productAdd}) {
  const addProduct = () => {
    productAdd(product);
  }

  return (
      <div className="w-64 p-2 bg-gray-50 rounded-xl flex flex-col justify-between gap-2">
        <img src={product.images[0]} alt="" className="w-full h-52 object-contain rounded-xl" />

        <h4 className="text-2xl">
          {product.title.length <= maxLengthTit
            ? product.title
            : product.title.slice(0, maxLengthTit) + "..."}
        </h4>

        <span className="opacity-70">
          {product.description.length <= maxLengthDes
            ? product.description
            : product.description.slice(0, maxLengthDes) + "..."}
        </span>

        <b className="text-lg">{product.price} $</b>

        <div className="flex gap-2 text-yellow-400">
          {[...Array(5)].map((e, i) => {
            const rate = product.rating;

            if (rate >= i + 1) {
              return <FaStar />;
            } else if (rate >= i + 0.5 && rate > 0) {
              return <FaStarHalfAlt />;
            } else {
              return <CiStar />;
            }
          })}
        </div>

        <button className="w-full p-2 bg-green-600 border-2 border-green-600 border-solid text-white transition-all rounded-2xl hover:bg-transparent hover:text-green-600" onClick={addProduct}>
          Buy
        </button>

        <Link to={`/products/${product.id}`}>
        <button className="w-full p-2 bg-orange-500 border-2 border-orange-500 border-solid text-white transition-all rounded-2xl hover:bg-transparent hover:text-orange-500">
          Read more
        </button>
        </Link>
      </div>
  );
}

export default ProductCart;