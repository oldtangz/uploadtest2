import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Router>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <div className="nav">
            <Link to="/" className="buttonTop">
              首頁
            </Link>
            <span
              style={{ display: "flex", justifyContent: "center", flex: 1 }}
            >
              <h1>老鄧購物城</h1>
            </span>

            <Link to="/checkout" className="buttonTop">
              購物車
            </Link>
          </div>

          {/* <a href="/checkout">購物車</a> */}
          {/*    <Link to="/">首頁</Link>
        <Link to="/checkout">購物車</Link>
        <Link to="/product_detail">產品資料</Link> */}

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/" /* element={<ProductDetail />} */>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<p>找不到頁面</p>} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>
    /*  <ProductList /> */
  );
}

export default App;
