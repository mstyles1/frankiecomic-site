import { Link } from "react-router-dom";
import "../App.css";
import book1cover from "../images/book1cover.png";
import meprofile from "../images/me-profile.jpg";
function Landing() {
  return (
    <div className="page">
      <div className="landing-header" >FRANKIE LANGLEY.com</div>
      <div className="landing-wrapper">
        <div className="landing-left">
          <img
            src={book1cover}
            alt="Cover - Frankie Langley Book 1 - Landing"
            className="cover-image"
          />
          <p>
            An aging mail courier enrolls in a mentor program to earn her long
            deserved freedom from the devestating drenches of intergalactic
            postal work... Read the action-packed sci fi adventure
            <Link to="/shop"> today!</Link>
          </p>
        </div>
        <div className="landing-right">
          <h2>Meet Matt and Andy</h2>
          <img src={meprofile} alt="Me Profile" className="about-image" />
          <div className="about-text">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
