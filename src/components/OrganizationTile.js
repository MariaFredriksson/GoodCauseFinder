import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const OrganizationTile = ({ id }) => {
  return (
    <div className="organization-tile">
      <div className="card mb-3 organization-card p-3">
        <Link to={`/organizations/${id}`} className="tile">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./give-love.png" className="card-img-top" alt="Give love icon" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title tile-header">Organization {id}</h5>
                <p className="card-text">Organization description {id} - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Something else {id}</small></p>
              </div>
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
OrganizationTile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OrganizationTile