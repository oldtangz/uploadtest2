import { Link } from "react-router-dom";
import Title from "./Title";
import Quantity_Btn from "./Quantity_Btn";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function Checkout() {
  let { cartItems } = useContext(CartContext);
  let cartEmpty = cartItems.length <= 0 ? true : false;
  let grandTotal = cartItems.reduce((total, product) => {
    return (total += product.quantity * product.price);
  }, 0);

  const freeShippingPrice = 99;

  return (
    <div>
      <Title mT="你的購物車" />
      {cartEmpty && (
        <div>
          購物車現在沒有產品
          <br />
          <Link to="/">去產品頁看看吧</Link>
        </div>
      )}
      {!cartEmpty && (
        <div>
          <div id="cartSection">
            {
              /* 產品列表 */
              cartItems.map((product) => {
                return (
                  <div key={product.id}>
                    <img
                      src={
                        /* process.env.PUBLIC_URL + "/img/" + */ product.image
                      }
                      alt={product.name}
                      style={{ width: "200px", marginBottom: "10px" }}
                    />
                    {product.name}
                    {product.description}
                    {product.price}
                    購買數量{product.quantity}
                    <Quantity_Btn productInfo={product} />
                  </div>
                );
              })
            }
          </div>
          <div id="checkOutSection">
            <div>全部貨品總共</div>
            <div>{grandTotal}元</div>

            {grandTotal >= freeShippingPrice ? (
              <div>我們免費送貨</div>
            ) : (
              <div>
                滿${freeShippingPrice}免費送貨
                <br />
                還差${freeShippingPrice - grandTotal}
              </div>
            )}

            {/* 價錢總數+免費送貨 */}
          </div>
        </div>
      )}
    </div>
  );
}
