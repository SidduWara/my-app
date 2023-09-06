import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Darkmode has been enabled', 'success');
      document.title = 'TextUtils - Darkmode';
      // setInterval(() => {
      //   document.title = 'Siddu';
      // }, 500);
      // setInterval(() => {
      //   document.title = 'Wara';
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Darkmode has been disabled', 'success');
      document.title = 'TextUtils - Lightmode';

    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path='/'> */}
            <TextForm showAlert={showAlert} mode={mode} heading='Enter Your Text Here' />
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
