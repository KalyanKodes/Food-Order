import React from "react";

export default function OrderItem({ data }) {
  return (
    <div className="order-items">
      <div className="order-items-wrapper">
        <img
          src={data.image}
          alt="order-image-thumbnail"
        />
        <div className="order-item-details">
          <p id="cart-item-name">{data.name}</p>
          <p id="cart-item-quantity">
            {data.quantity}x
            <span
              id="cart-item-single-price"
              style={{
                fontWeight: "300",
                display: "inline-block",
                marginLeft: "10px",
              }}
            >
              @ ${data.singleItemPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
      <b>${data.totalPrice.toFixed(2)}</b>
    </div>
  );
}
