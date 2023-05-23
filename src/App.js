import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const handleUpClick = (e) => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase", "success")
  }
  const handleLowClick = (e) => {
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success");
  }
  const handleSpaceClick = () => {
    setText(text.trim().split(/ +/).join(' '));
    showAlert("All extra spaces has been removed", "success");
  }
  const handleClearTextClick = () => {
    setText('');
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Text Utils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert
          alert={alert}
        />

        <Routes>
          <Route exact path='/' element={
            <TextForm
              heading="Enter the text to analyze below."
              text={text}
              mode={mode}
              setText={setText}
              handleUpClick={handleUpClick}
              handleLowClick={handleLowClick}
              handleSpaceClick={handleSpaceClick}
              handleClearTextClick={handleClearTextClick}
            />
          }>

          </Route>
          <Route exact path="/about" element={
            <About
              mode={mode}
            />
          } />
        </Routes>
      </Router>


    </>
  );
}

export default App;
