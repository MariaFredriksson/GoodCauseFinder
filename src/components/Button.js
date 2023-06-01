import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

/**
 * Represents a button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.link - The link URL.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} props.isActive - Determines if the button is active or not.
 * @returns {JSX.Element} The JSX element representing the button.
 */
const Button = ({ text, link, onClick, isActive }) => {
  return (
    <div>
      <Link to={link}>
        <button 
          type="button" 
          // If the button is active, change the color of the button
          className={`btn btn-lg color-1 my-4 px-4 ${isActive ? 'color-2' : ''}`} 
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

export default Button