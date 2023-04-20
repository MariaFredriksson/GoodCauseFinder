
/**
 *
 */
const Navbar = () => {
  return (
    // <div>
    //   <h1>Good Cause Finder</h1>
    // </div>
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary color-1">
      <div className="container container-fluid">
        <a className="navbar-brand" href="#">Good Cause Finder</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
//       <div className="container container-fluid">
//         <div className="row w-100">
//           <div className="col-6">
//             <a className="navbar-brand" href="#">Good Cause Finder</a>
//           </div>
//           <div className="col-6 text-end">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//               <div className="navbar-nav">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 <a className="nav-link" href="#">Features</a>
//                 <a className="nav-link" href="#">Pricing</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
