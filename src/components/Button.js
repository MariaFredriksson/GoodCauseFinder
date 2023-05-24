import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

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