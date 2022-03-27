import React from "react"
import "../styles/navbar.scss"
//import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Leonardo Plaza.
          </div>
          <div className="links-wrapper">
            <a href={"#work"}>Work</a>
            <a href={"#about"}>About</a>
            <a href={"#contact"}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
