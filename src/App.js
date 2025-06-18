import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Shop from './components/Shop';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">LANDING</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/shop">SHOP</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;