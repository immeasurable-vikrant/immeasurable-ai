import { Link } from "react-router-dom";
import "./homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Link to="/dashboard">dashboard</Link> */}
      <div className="left">
        <h1>Immeasurable AI</h1>
        <h2>Introducing ChatGPT</h2>
        <h3>
          We’ve trained a model called ChatGPT which interacts in a
          conversational way. The dialogue format makes it possible for ChatGPT
          to answer followup questions, admit its mistakes, challenge incorrect
          premises, and reject inappropriate requests.
        </h3>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Homepage;
