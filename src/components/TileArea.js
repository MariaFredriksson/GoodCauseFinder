import ProjectTile from "./ProjectTile"

const TileArea = () => {
  return (
    <div className="container">
      <h2>Tile Area</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
        <ProjectTile id={1} />
        <ProjectTile id={2} />
        <ProjectTile id={3} />
        <ProjectTile id={4} />
        <ProjectTile id={5} />
      </div>
    </div>
  )
}

export default TileArea