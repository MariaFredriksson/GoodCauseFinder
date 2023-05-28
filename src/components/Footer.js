
import NavLink from "./NavLink"

const Footer = () => {
  return (
    <div className="footer color-1">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center pt-3">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 Good Cause Finder</p>

        <div className="nav justify-content-end">
          <NavLink to={"/"} text={"Hem"} />
          <NavLink to={"/organizations"} text={"Organisationer"} />
          <NavLink to={"/about"} text={"Om oss"} />
        </div>
      </footer>
    </div>
  )
}

export default Footer