import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const Button = ({ text, link }) => {
  return (
    <div>
      <Link to={link}>
        <button type="button" className="btn btn-lg color-1 my-4 px-4">{text}</button>
      </Link>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button