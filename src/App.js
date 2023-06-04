import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectArea from './components/ProjectArea'
import 'bootstrap/dist/css/bootstrap.css'
import HomeArea from './components/HomeArea'
import NotFound from './components/NotFound'
import Project from './components/Project'
import OrganizationArea from './components/OrganizationArea'
import Organization from './components/Organization'
import About from './components/About'

/**
 * The main component that represents the entire application.
 *
 * @returns {JSX.Element} The JSX element representing the application.
 */
function App() {
  return (
    // The BrowserRouter component is used to wrap the entire app, so that the routes can be used in all components
    <BrowserRouter basename='/good-cause-finder'>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* This route needs to have an exact path, because react matches it to the other routes that just start with a / otherwise */}
            <Route exact path="/" element={<HomeArea />} />

            <Route path="/projects" element={<ProjectArea />} />

            <Route path="/projects/:id" element={<Project />} />

            <Route path="/organizations" element={<OrganizationArea />} />

            <Route path="/organizations/:id" element={<Organization />} />

            <Route path="/about" element={<About />} />
              
            {/* If the route is not found, we can redirect the user to the not found page */}
            {/* This matches any other route that is note one of the before ones - a catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
