import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="nav">
      {' '}
      <ul>
        <CustomLink to="/Home">Home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const path = useResolvedPath(to)
  const isActive = useMatch({ path: path.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
