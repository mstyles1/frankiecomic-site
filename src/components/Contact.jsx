import '../App.css';

function Contact() {
  return (
    <div className="page">
      <div className="landing-header">CONTACT US</div>

      <div className="contact-wrapper">

        {/* Instagram Section */}
        <div className="contact-instagram-grid">

          <a
            href="https://www.instagram.com/frankielangleycomic"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
          >
            <h2>FRANKIE LANGLEY COMIC</h2>
            <div className="contact-box-content">
              <h3>COMIC INSTAGRAM</h3>
              <p>Follow our heroes on their next big adventure!</p>
              <span>VISIT INSTAGRAM →</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/andygordonart/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
          >
            <h2>ARTIST ANDY GORDON</h2>
            <div className="contact-box-content">
              <h3>ARTIST INSTAGRAM</h3>
              <p>Check out more of Andy's art!</p>
              <span>VISIT INSTAGRAM →</span>
            </div>
          </a>

        </div>

        {/* Kickstarter */}
        <a
          href="https://www.kickstarter.com/projects/andygordonart/frankie-langley-and-the-intergalactic-post-office"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-box contact-feature"
        >
          <h2>FRANKIE LANGLEY: BOOK TWO</h2>
          <div className="contact-box-content">
            <h3>OUR KICKSTARTER</h3>
            <p>Book 2 Kickstarter coming soon!</p>
            <span>SUPPORT THE PROJECT THIS SPRING!→</span>
          </div>
        </a>

      </div>
    </div>
  );
}

export default Contact;