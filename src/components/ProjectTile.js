import { Link } from "react-router-dom"

const ProjectTile = () => {
  return (
    <div>
      <div className="col">
        <Link to={"/project"} className="tile">
          <div className="card">
            <img src="./give-love.png" className="card-img-top" alt="Give love icon" />
              <div className="card-body">
                <h5 className="card-title tile-header">Project Title</h5>
                <p className="card-text">Project Description - This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Organization</small>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectTile