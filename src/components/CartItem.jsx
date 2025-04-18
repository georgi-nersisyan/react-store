import React from 'react'

function CartItem({product, onDelete}) {
    const handleDelete = () => {
        onDelete(product.id);
    }

  return (
      <div className="w-full p-2 bg-gray-50 rounded-xl flex justify-between items-center gap-2">
            <img
              src={product.images[0]}
              alt=""
              className="w-36 h-36 object-contain rounded-xl"
            />

            <h4 className="text-2xl">
              {product.title.length <= 20
                ? product.title
                : product.title.slice(0, 20) + "..."}
            </h4>

            <p>0</p>

            <b className="text-lg">{product.price} $</b>
          
            <button className="w-40 bg-red-600 border-2 border-red-600 border-solid p-3 text-white rounded-xl transition-all hover:bg-transparent hover:text-red-600" onClick={handleDelete}>Remove</button>
          </div>
  )
}

export default CartItem;