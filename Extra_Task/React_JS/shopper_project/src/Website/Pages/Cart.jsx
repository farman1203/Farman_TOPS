import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

    const [data1, setData1] = useState([])

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
        setData1(cartData);
    }, []);

    const removeItem = (id) => {
        const updatedCart = data1.filter(item => item.id !== id);
        setData1(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const grandTotal = data1.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <Link to="/">Home</Link>
                            <span className="mx-2 mb-0">/</span>
                            <strong className="text-black">Cart</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">

                    {data1.length === 0 ? (
                        <div  className='text-center align-item-center'>
                        <Link to="/shop" >
                            <img className='text-center' src="images/shopping.png" height="370px" alt="" />
                        </Link>
                        <div>

                        <Link to="/shop" className='btn btn-primary mt-3'>Browse Items</Link>
                        </div>
                        </div>
                    ) : (

                        <div className="row mb-5">
                            <div className="col-md-12">
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
                                        {data1.map((value) => (
                                            <tr key={value.id}>
                                                <td>
                                                    <img src={value.image} width="60" />
                                                </td>
                                                <td>{value.name}</td>
                                                <td>₹{value.price}</td>
                                                <td>{value.qty}</td>
                                                <td>₹{value.price * value.qty}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeItem(value.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    )}

                    <div className="row">
                        <div className="col-md-6 offset-md-6 text-right">
                            <h4>Total: ₹{grandTotal}</h4>
                            <Link to="/checkout" className="btn btn-primary mt-3">
                                Proceed To Checkout
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart;
