import { Link } from "react-router-dom";
import "../App.css";
import frankiestandardcover from "../images/frankie-standard-cover.jpg";
import andyandme from "../images/andy-and-me.jpg";

function Landing() {
  return (
    <div className="page">
      <div className="landing-header">OUR STORY</div>

      <div className="landing-wrapper">
        {/* Left Section */}
        <div className="landing-box">
          <h2>The <i>FRANKIE LANGLEY</i> Series</h2>
          <div className="image-container">
            <img
              src={frankiestandardcover}
              alt="Cover - Frankie Langley Book 1 - Landing"
              className="cover-image"
            />
            <Link to="/shop" className="overlay-button">
              Book 1 in the Frankie Langley series available now!
            </Link>
          </div>
          <div className="landing-text">
            An aging mail courier enrolls in a mentor program to earn her long
            deserved freedom from the devastating drenches of intergalactic
            postal work... Read the action-packed sci-fi adventure
            <Link to="/shop"> today!</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="landing-box">
          <h2>Meet Matt and Andy</h2>
          <img src={andyandme} alt="Me Profile" className="about-image" />
          <div className="landing-text">
            Andy Gordon and Matt Styles independently produced their dream comic
            in their home of Knoxville, TN. The southeastern artists are
            determined to tackle themes relevant to their home. FRANKIE LANGLEY
            is a three-part graphic novel series that incorporates their
            passions into a focused exploration of workers' rights and
            resilience in the face of corruption. Hope y'all love it!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
