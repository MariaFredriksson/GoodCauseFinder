
import { Link } from 'react-router-dom'
import NavLink from './NavLink'

/**
 * Represents the navbar component.
 *
 * @returns {JSX.Element} The JSX element representing the navbar component.
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top color-1 bg-body-tertiary">
      <div className="container container-fluid">
        {/* The Link makes React handle the routing, and prevents the request to the server for a new page that would have happened otherwise */}
        <Link className="navbar-brand color-1" to="/">Good Cause Finder</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* // TODO: Gör något liknande detta för när hamburger menyn inte är collapsed
         // If the button is active, change the color of the button
        className={`btn btn-lg color-1 my-4 px-4 ${isActive ? 'color-2' : ''}`}  */}

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to={"/"} text={"Hem"} />
            <NavLink to={"/projects"} text={"Projekt"} />
            <NavLink to={"/about"} text={"Om oss"} />
            {/* <Link className="nav-link color-1 active" aria-current="page" to="/">Home</Link> */}
            {/* <Link className="nav-link color-1" to="/filter">Filter projects</Link> */}
            {/* <Link className="nav-link color-1" to="/about">About </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
