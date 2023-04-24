import OrganizationTile from "./OrganizationTile"

const OrganizationArea = () => {
  return (
    <div className="container">
      <h2>Organizations</h2>
      <OrganizationTile id={"1"} />
      <OrganizationTile id={"2"} />
      <OrganizationTile id={"3"} />
    </div>
  )
}

export default OrganizationArea