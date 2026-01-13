import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // 🔹 LOAD CART USER-WISE
  useEffect(() => {
    const userId = sessionStorage.getItem("s_id");

    if (!userId) {
      setCartData([]);
      return;
    }

    const savedCart =
      JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];

    setCartData(savedCart);
  }, []);

  // 🔹 REMOVE ITEM
  const removeItem = (id) => {
    const userId = sessionStorage.getItem("s_id");
    if (!userId) return;

    const updatedCart = cartData.filter(item => item.id !== id);

    localStorage.setItem(
      `cart_${userId}`,
      JSON.stringify(updatedCart)
    );

    setCartData(updatedCart);
  };

  // 🔹 GRAND TOTAL
  const grandTotal = cartData.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 🔹 CHECKOUT
  const handleCheckout = () => {
    const userId = sessionStorage.getItem("s_id");

    if (!userId) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div>
      <div className="bg-light py-3">
        <div className="container">
          <Link to="/">Home</Link> / <strong>Cart</strong>
        </div>
      </div>

      <div className="site-section">
        <div className="container">

          {cartData.length === 0 ? (
            <div className="text-center">
              <Link to="/shop">
                <img src="/images/shopping.png" height="350" alt="" />
              </Link>
              <br />
              <Link to="/shop" className="btn btn-primary mt-3">
                Browse Items
              </Link>
            </div>
          ) : (
            <>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {cartData.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} width="60" />
                      </td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.qty}</td>
                      <td>₹{item.price * item.qty}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeItem(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h4>Total: ₹{grandTotal}</h4>

              <button
                onClick={handleCheckout}
                className="btn btn-primary mt-3"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
