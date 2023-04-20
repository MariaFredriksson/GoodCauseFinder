
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top color-1 bg-body-tertiary">
      <div className="container container-fluid">
        {/* The Link makes React handle the routing, and prevents the request to the server for a new page that would have happened otherwise */}
        <Link className="navbar-brand color-1" to="/">Good Cause Finder</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link color-1 active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link color-1" to="/filter">Filter projects</Link>
            <Link className="nav-link color-1" to="/about">About </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
