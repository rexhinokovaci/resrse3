import React from "react";
import logo from "./logo.svg";
import test from "./test.png";
import { Button } from 'react-bootstrap'
import makeschool from "./makeschool.png"
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <h1>This is how the lead generation would work</h1>
      <img src={logo} className="testing" alt="Logo" />
      <br></br>
      <hr></hr>
      <h2>Someone who is winning money photo</h2>
      <img src={makeschool} alt="TEST image" />
      <hr></hr>
      <h2>Test Bootstrap Buttons</h2>
      <Button bsStyle="primary">First name</Button>{' '}
      <Button type="button" class="btn btn-primary">Last name</Button>{' '}
      <Button variant="success">Send Data</Button>{' '}
      <Button variant="warning">Send Data</Button>{' '}

      <button type="button" class="btn btn-primary">Primary BootStrap</button>
<button type="button" class="btn btn-secondary">Secondary Bootstap</button>

    </div>

  )
};

export default App;
