import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const ProjectTile = ({ project }) => {
  return (
    <div>
      <div className="col h-100">
        <Link to={`/projects/${project.id}`} className="tile">
          <div className="card">
            <img src={project.imgURL} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title tile-header">{project.title}</h5>
                <p className="card-text">{project.text}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">{project.organization}</small>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

// This is a way to make sure that the component is receiving the right type of props
// If the wrong type of props is passed, the console will show an error
// This prop is required and must be an object
ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectTile