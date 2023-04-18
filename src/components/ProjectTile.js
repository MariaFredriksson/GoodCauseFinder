
const ProjectTile = () => {
  return (
    <div>
      {/* <h2>Project Title</h2>
      <img src="./give-love.png" alt="Give love icon" />
      <p>Project Description</p> */}
      <div className="col">
        <div className="card">
          <img src="./give-love.png" className="card-img-top" alt="Give love icon" />
            <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Project Description - This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTile