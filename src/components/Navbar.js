import React from "react"
import logo from "../assets/cropped-logo-2.jpg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="logo-links">
          <img src={logo} alt="logo" />
            </Link>
        
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
        
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>

  </nav>
}

export default Navbar
