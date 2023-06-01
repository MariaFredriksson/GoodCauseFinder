import OrganizationTile from "./OrganizationTile"

/**
 * Represents the organization area component.
 *
 * @returns {JSX.Element} The JSX element representing the organization area component.
 */
const OrganizationArea = () => {
  return (
    <div className="container">
      <h2>Organizations</h2>
      <OrganizationTile id={1} />
      <OrganizationTile id={2} />
      <OrganizationTile id={3} />
    </div>
  )
}

export default OrganizationArea