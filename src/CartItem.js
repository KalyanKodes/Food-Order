import React from "react";
import "./App.css"
export default function CartItem({
  name,
  quantity,
  singleItemPrice,
  totalPrice,
  stateChanger,
}) {
  return (
    <>
      <div className="cart-item-wrapper">
        <div className="cart-item-details">
          <p id="cart-item-name">{name}</p>
          <div className="cart-item-stats">
            <p id="cart-item-quantity">{quantity}x</p>
            <p id="cart-item-single-price">@{singleItemPrice.toFixed(2)}</p>
            <p id="cart-item-total-price">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="remove-cart-item" onClick={() => stateChanger(name)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </div>
      </div>
      <hr />
    </>
  );
}
