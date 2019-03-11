import React from 'react'

const Navbar = (props) => {
  return(
    <nav>
        <div className="nav-wrapper">
          <a href="/" className="right hide-on-med-and-down"></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Todos</a></li>
              <li><a href="/">Completed Tasks</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar