import { Link } from "react-router-dom";
import "../App.css";
function Landing() {
  return (
    <div className="page">
      <div className="landing">
        <h1>FRANKIE LANGLEY</h1>
        <p>
          An aging mail courier enrolls in a mentor program to afford her
          retirement...Read the action-packed sci fi adventure
          <Link to="/shop"> today!</Link>
        </p>
      </div>
    </div>
  );
}

export default Landing;
