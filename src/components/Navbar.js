import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {
    return(
       <nav className="nav-wrapper red darken-3">
          <div className="container">
            <a className="brande-logo">punkie</a>
            <ul className="right">
                <li><Link to="/" href="/">Home</Link></li>
                <li><NavLink to="/about" href="/about">About</NavLink></li>
                <li><NavLink to="/contact" href="/contact">Contact</NavLink></li>
            </ul>
          </div>
       </nav>
    )
}

export default withRouter(Navbar)