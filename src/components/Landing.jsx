import { Link } from "react-router-dom";
import "../App.css";
import book1cover from "../images/book1cover.png";
import meprofile from "../images/me-profile.jpg";
function Landing() {
  return (
    <div className="page">
      <div className="landing-wrapper">
        <div className="landing-left">
          <h1>FRANKIE LANGLEY</h1>
          <img
            src={book1cover}
            alt="Cover - Frankie Langley Book 1 - Landing"
            className="cover-image"
          />
          <p>
            An aging mail courier enrolls in a mentor program to afford her
            retirement... Read the action-packed sci fi adventure
            <Link to="/shop"> today!</Link>
          </p>
        </div>
        <div className="landing-right">
          <img
        src={meprofile}
        alt="Me Profile"
        className="about-image"
      />
      <div className="about-text">
        <h2>About the Comic</h2>
        <p>
          Frankie Langley is a gritty sci-fi tale exploring retirement,
          mentorship, and revolution in a broken world. Follow her journey
          through danger and discovery.
        </p>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
