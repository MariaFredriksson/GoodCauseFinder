import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

/**
 * Represents a navigation link component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the navigation link.
 * @param {string} props.to - The link URL.
 * @returns {JSX.Element} The JSX element representing the navigation link.
 */
const NavLink = ({ text, to }) => {
  return (
    <div>
      <Link className="nav-link link-underline color-1 mx-2" aria-current="page" to={to}>{text}</Link>
    </div>
  )
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavLink