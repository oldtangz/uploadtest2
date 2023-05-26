import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export default function Quantity_Btn({ productInfo }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  //購物車有冇個樣產品
  let productIndexInCart = cartItems.findIndex((element) => {
    return element.id === productInfo.id;
  });

  //findIndex
  //如果搵到個個產品=>返回索引位置 0,1,2,3...
  //搵唔到的話=>返回-1

  let [numInCart, setNumInCart] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );

  const handleAdd = () => {
    if (productIndexInCart === -1) {
      //購物車本身沒有,在cartItems array 中加個新element(object)
      setCartItems([
        {
          id: productInfo.id,
          name: productInfo.name,
          image: productInfo.image,
          price: productInfo.price,
          description: productInfo.description,
          quantity: 1,
        },
        ...cartItems,
      ]);
    } else {
      //購物車有該產品,只加個quantity
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity++;
      setCartItems(newCartArray);
    }

    setNumInCart(numInCart + 1);
  };

  const handleSubtract = () => {
    if (cartItems[productIndexInCart].quantity === 1) {
      //remove object
      let newCartArray = [...cartItems];
      newCartArray.splice(productIndexInCart, 1);
      setCartItems(newCartArray);
    } else {
      // 大於2, -1就可以

      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity--;
      setCartItems(newCartArray);
    }

    setNumInCart(numInCart - 1);
  };
  return (
    <div>
      {numInCart === 0 ? (
        <div onClick={handleAdd}>加入{/* {productInfo.name} */}購物車</div>
      ) : (
        <div>
          <span onClick={handleSubtract}>-</span>
          {numInCart}件<span onClick={handleAdd}>+</span>
        </div>
      )}
    </div>
  );
}
