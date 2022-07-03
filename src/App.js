import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title="TextU" about="About TextU"/> */}
    <Navbar title="TextU"/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
