import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import ProjectTile from './components/ProjectTile';
import TileArea from './components/TileArea';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Good Cause Finder</h1> */}
      <TileArea />
      {/* <ProjectTile /> */}
      <Footer />
    </div>
  );
}

export default App;
