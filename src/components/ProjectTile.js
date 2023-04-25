import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const ProjectTile = ({ id }) => {
  return (
    <div>
      <div className="col">
        <Link to={`/project/${id}`} className="tile">
          <div className="card">
            <img src="./give-love.png" className="card-img-top" alt="Give love icon" />
              <div className="card-body">
                <h5 className="card-title tile-header">Project Title {id}</h5>
                <p className="card-text">Project Description {id} - This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Organization {id}</small>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

// This is a way to make sure that the component is receiving the right type of props
// If the wrong type of props is passed, the console will show an error
// This prop is required and must be a number
ProjectTile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ProjectTile