import React from "react";
import { Link } from "react-router-dom";
import './Home.css';  // Assuming the styles are in a separate CSS file

const Home = () => {
  return (
    <div className="home">
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">EcommSite</Link>
            <ul className="navbar-links">
              <li><Link to="/" className="navbar-link">Home</Link></li>
              <li><Link to="/products" className="navbar-link">Products</Link></li>
              <li><Link to="/about" className="navbar-link">About Us</Link></li>
              <li><Link to="/contact" className="navbar-link">Contact</Link></li>
              <li><Link to="/cart" className="navbar-link">🛒</Link></li>

            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="home-heading">Welcome to EcommSite 🛍️</h1>
          <p className="home-description">Please login or sign up to view amazing products.</p>
          <div className="home-buttons">
            <Link to="/login">
              <button className="home-btn login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="home-btn signup-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products2">
        <h2 className="section-heading">Featured Products</h2>
        <div className="product-cards1">
          {/* Product 1 */}
          <div className="product-card2">
            <img src="https://cdn.thewirecutter.com/wp-content/media/2024/05/iphonethingsyouddidntknow-2048px-2140-3x2-1.jpg?auto=webp&quality=60&crop=3:2&width=308" alt="Product 1" />
            <h3>Smartphone X100</h3>
            <p>Experience the power of the latest Smartphone X100 with a stunning 6.7-inch OLED display and a 108MP camera. Ideal for gaming, photography, and everyday use.</p>
            <strong>$799.99</strong>
            <Link to="/products" className="btn-view">View More</Link>
          </div>
          
          {/* Product 2 */}
          <div className="product-card2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7mP9rfW5VU8h3VRpFMN-sskWPWbHMQSXwKgTnPycTYKrJlgLBDifdi3PeL0wFyIBifg&usqp=CAU" alt="Product 2" />
            <h3>Wireless Headphones</h3>
            <p>Enjoy high-quality sound with our Wireless Headphones, featuring noise-cancellation, long-lasting battery life, and a sleek design for on-the-go music lovers.</p>
            <strong>$149.99</strong>
            <Link to="/products" className="btn-view">View More</Link>
          </div>
          
          {/* Product 3 */}
          <div className="product-card2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQ4tFOU_odZaossQ0evDmIpRs7dRl4GxNtQLqwmyHIMbnvMUZ5RoVtJKJe1Xtf8_aIr8&usqp=CAU" alt="Product 3" />
            <h3>Smart Watch Pro</h3>
            <p>Stay connected and track your health with the Smart Watch Pro. Featuring a heart rate monitor, step counter, and a beautiful touchscreen display.</p>
            <strong>$249.99</strong>
            <Link to="/products" className="btn-view">View More</Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <h2 className="section-heading">About Us</h2>
        <p> We are a company dedicated to providing high-quality products to our customers. Our mission is to improve your daily life with top-notch tools and services. 
    At EcommSite, we believe in the power of innovation and customer satisfaction. We carefully curate our products to meet the latest trends and highest standards.
    Our team works tirelessly to ensure a seamless shopping experience, from browsing to checkout. 
    Whether you're looking for the latest gadgets, stylish accessories, or practical everyday items, we’ve got something for everyone.
    Join us on our journey to deliver excellence, one product at a time.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 BrandName. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
          <div className="footer-social">
          
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="social-icon-img" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon-img" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon-img" />
  </a>

</div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;
