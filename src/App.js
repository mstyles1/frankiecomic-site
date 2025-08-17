import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import instagramIcon from "./images/instagram-icon.png"; // adjust relative path

function App() {
  return (
    <Router basename="/">
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">LANDING</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/shop">SHOP</Link>
        </div>
        <div className="nav-social">
          <a
            href="https://www.instagram.com/frankielangleycomic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <footer className="site-footer">
        <p>© 2025 Frankie Langley | All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
