import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

var logo = require('./assets/logo.png');
var discord = require('./assets/discord.png');

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} className="site-title" />
      </Link>
      <ul>
      <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/jobs">Jobs</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/goals">Goals</CustomLink>
      <Link to="https://www.discord.gg">
        <img src={discord} className="discord" />
      </Link>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}