import React from "react";
import "./AddToCart.css"; // Style file (optional)

const AddToCart = () => {
  // Sample cart data — this would normally come from a context or state
  const cartItems = [
    {
      id: 1,
      name: "Smartphone X100",
      price: 799.99,
      quantity: 1,
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/iphonethingsyouddidntknow-2048px-2140-3x2-1.jpg?auto=webp&quality=60&crop=3:2&width=308",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 149.99,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7mP9rfW5VU8h3VRpFMN-sskWPWbHMQSXwKgTnPycTYKrJlgLBDifdi3PeL0wFyIBifg&usqp=CAU",
    },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
    <div className="cart-page">
      <h2>Your Shopping Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AddToCart;
