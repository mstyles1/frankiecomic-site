import { Link } from "react-router-dom";
import "../App.css";
import book1cover from "../images/book1cover.png";
import meprofile from "../images/me-profile.jpg";
function Landing() {
  return (
    <div className="page">
      <div className="landing-header">OUR STORY</div>
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
          <p>
            Andy Gordon and Matt Styles independently produced their dream comic in their home of Knoxville, TN. The southern artists are determined to tackle themes releveant to their home. FRANKIE LANGLEY is a three part graphic novel series that incorporates their passions into a focused exploration of workers' rights and reslience in the face of corruption. We hope you love it! 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
