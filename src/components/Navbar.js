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
            //onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Leonardo Plaza.
          </div>
          <div className="links-wrapper">
            <button >Work</button>
            <button >About</button>
            <button >Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
