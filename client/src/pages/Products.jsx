import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const API = "https://ecomm-site-server.onrender.com";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API}/api/products`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setProducts(res.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
    alert(`Added ${product.name} to cart!`);
  };

return (
  <div className="product-page">
    <h1 className="product-heading">Our Products</h1>
    <div className="product-container">
      {products.map(p => (
        <div key={p._id} className="product-card">
          <img className="product-img" src={p.imageUrl} alt={p.name} />
          <div className="product-details">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>${p.price}</strong>
            <button onClick={() => handleAddToCart(p)} className="add-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

