import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <div className="links">
      <Link to="/">Home | </Link>
      <Link to="/quote">Quote of the Day | </Link>
      <Link to="/calculator">Calculator </Link>
    </div>
  </div>
);

export default Navbar;
