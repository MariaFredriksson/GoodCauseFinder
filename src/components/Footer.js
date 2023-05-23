
import NavLink from "./NavLink"

const Footer = () => {
  return (
    <div className="footer color-1">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center pt-3">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

        {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
        </a> */}

        <div className="nav justify-content-end">
          <NavLink to={"/"} text={"Home"} />
          <NavLink to={"/organizations"} text={"Organizations"} />
          <NavLink to={"/about"} text={"About"} />
        </div>
      </footer>
    </div>
  )
}

export default Footer