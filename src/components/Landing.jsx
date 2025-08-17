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
          <h2>
            The <i>FRANKIE LANGLEY</i> Series
          </h2>
          <div className="image-container">
            <img
              src={frankiestandardcover}
              alt="Cover - Frankie Langley Book 1 - Landing"
              className="cover-image"
            />
            <Link to="/shop" className="overlay-button">
              Book One
              <br />
              Available Now!
            </Link>
          </div>
          <div className="landing-text">
            A world wearied courier trains a bright-eyed recruit to earn
            her retirement from perilous postal work. Across their intergalactic
            adventures, the bond they form may be the only means to survive a
            space frontier that profits from their exploitation. Read {""}
            <Link to="/shop" className="landing-link">
              {" "}
              Book One{" "}
            </Link>{" "}
            {""}
            in the <i>Frankie Langley</i>
            {""} trilogy today!
          </div>
        </div>

        {/* Right Section */}
        <div className="landing-box">
          <h2>Meet Matt and Andy</h2>
          <img src={andyandme} alt="Me Profile" className="about-image" />
          <div className="landing-text">
            Artist, Andy Gordon and writer, Matt Styles independently produced
            their dream comic out of their home of Knoxville, TN. The
            southeastern artists tackle themes central to the history of
            workers' rights and labor movements. <i>FRANKIE LANGLEY</i> is a three-part
            graphic novel series that focuses their passions into an
            action-packed, sci-fi adventure about compassionate resilience and
            the ever-growing self.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
