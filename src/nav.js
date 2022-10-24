import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Labs</Link> |&nbsp;
      <Link to="/">Assignment 6</Link> |&nbsp;
      <Link to="/a7">Assignment 7</Link> |&nbsp;
      <Link to="/tuiter/home">Tuiter</Link>
    </div>
  );
}
export default Nav;
