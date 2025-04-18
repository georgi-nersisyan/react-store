import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  if (!product) {
    return <h2>Not Found</h2>;
  }

  return (
    <div className="w-full p-14 flex flex-col justify-between gap-2">
      <div className="flex gap-9">
      {
        product.images.map(image => {
         return <img
          src={image}
          alt=""
          className="w-64 h-64 object-contain rounded-xl"
        />
        })  
      }
      </div>

      <h4 className="text-2xl">
        {product.title}
      </h4>

      <span className="opacity-70">
        {product.description}
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

      <p>Brand: <b>{product.brand}</b>.</p>
      <p>Stock <b>{product.stock}</b>.</p>
    </div>
  );
}

export default SinglePage;