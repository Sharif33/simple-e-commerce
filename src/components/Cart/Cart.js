import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuanity = 0
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuanity = totalQuanity + product.quantity;
        if (total > 500) {
            shipping = 10
        }
        else if (total > 200 && total <= 500) {
            shipping = 15
        }
        else if (total <= 200) {
            shipping = 20
        }
    }

    const tax = (total + shipping) * 0.10;
    const allTotal = total + shipping + tax;

    return (
        <div className="order">
            <h1>Order Summary</h1>
            <h3>Items Ordered: {totalQuanity}</h3>
            <br />
            <div className="total">
                <h4 >Price: </h4>
                <h3><span>$ </span>{total.toFixed(2)}</h3>
            </div>
            <div className="total">
                <h4 >Shipping Cost: </h4>
                <h3><span>$ </span>{shipping}</h3>
            </div>
            <div className="total">
                <h4 >Taxes: </h4>
                <h3><span>$ </span>{tax.toFixed(2)}</h3>
            </div>
            <div className="total">
                <h4 >Total: </h4>
                <h3><span>$ </span>{allTotal.toFixed(2)}</h3>
            </div>
            {props.children}
        </div>
    );
};

export default Cart;