import OrganizationTile from "./OrganizationTile"

const OrganizationArea = () => {
  return (
    <div className="container">
      <h2>Organizations</h2>
      <OrganizationTile />
      <OrganizationTile />
      <OrganizationTile />
      {/* // TODO: Make tiles/cards for each organization.  */}
    </div>
  )
}

export default OrganizationArea