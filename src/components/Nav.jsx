import logo from "../img/1.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary ">
      <div className="container-fluid " >
        <Link href="/" className="navbar-brand " >
          <img src={logo} alt="" height="100px" width="200px"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/people" className="nav-link text-light" aria-current="page">
                People
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/path" className="nav-link text-light" aria-current="page">
                Paths
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link  text-light" aria-current="page">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
