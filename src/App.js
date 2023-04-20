/* eslint-disable no-unused-vars */

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import ProjectTile from './components/ProjectTile';
import TileArea from './components/TileArea'
import 'bootstrap/dist/css/bootstrap.css'

/**
 * TODO: Add a description of the App component.
 *
 * @returns {JSX.Element} The App component.
 */
function App () {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Good Cause Finder</h1> */}
      <TileArea />
      {/* <ProjectTile /> */}
      <Footer />
    </div>
  )
}

export default App
