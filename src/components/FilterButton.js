import Button from "./Button"
import PropTypes from 'prop-types'

/**
 * Represents a filter button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the filter button.
 * @param {function} props.onClick - The function to call when the filter button is clicked.
 * @param {boolean} props.isActive - Determines if the filter button is active or not.
 * @returns {JSX.Element} The JSX element representing the filter button.
 */
const FilterButton = ({ text, onClick, isActive }) => {
  return (
    <div className="me-4">
      <Button onClick={onClick} text={text} isActive={isActive} />
    </div>
  )
}

FilterButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
}

export default FilterButton