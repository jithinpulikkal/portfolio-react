// Navbar.js
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        
        <div className="logo" >
        {/* <img style={{ width: '60px', height: 'auto' }} src="/src/assets/logo.svg" alt="logo" /> */}
          <a href="index.html">
            {props.firstName}
            <span>{props.lastName}</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="https://drive.google.com/file/d/1UZu5Bw2_wJMrvwv_b6eptMAFl-tkjyMf/view?usp=drive_link">Resume</a>
            
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
         
          {/* <li>
            <a href="#contact" className="navbar-btn">
              Contact Me
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
