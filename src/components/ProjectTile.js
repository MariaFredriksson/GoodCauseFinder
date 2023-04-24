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
              <div class="card-footer">
                <small class="text-body-secondary">Organization {id}</small>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectTile