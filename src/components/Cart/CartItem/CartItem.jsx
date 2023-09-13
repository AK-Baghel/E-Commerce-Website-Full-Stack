// import React, { useContext } from "react";
// import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

import "./CartItem.scss";
const CartItem = () => {
    // const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    //     useContext(Context);

    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">Product Name</div>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span >-</span>
                        <span>5</span>
                        <span >+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>X</span>
                        <span className="highlight">&#8377;1234</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;