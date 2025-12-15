import "./main.css";
import Accordian from "./accordion/Accordion.jsx";
import RandomColor from "./randomColor/RandomColor.jsx";
import StarRating from "./starRating/StarRating.jsx";

export default function Layout() {
  return (
    <>
      <h1 id="page-heading">6 React Projects</h1>
      <hr id="separator" />
      <div className="projects">
        {/* <Accordian />
        <RandomColor /> */}
        <StarRating />
      </div>
    </>
  );
}
