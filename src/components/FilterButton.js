import Button from "./Button"
import PropTypes from 'prop-types'

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