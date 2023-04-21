import { Link } from "react-router-dom"

const NavLink = ({ text, to }) => {
  return (
    <div>
      <Link className="nav-link color-1 mx-2" aria-current="page" to={to}>{text}</Link>
    </div>
  )
}

export default NavLink