import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing">
      <h1>FRANKIE LANGLEY</h1>
      <p>An aging mail courier enrolls in a mentor program to afford her retirement...Read the action packed sci-fi adventure<Link to="/shop">today!</Link></p>
    </div>
  );
}

export default Landing;
