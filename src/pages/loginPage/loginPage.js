import React from 'react';
import './loginPage.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "../../components/loginComponent/loginComponent";

function LoginPage() {
  return (
    <div className="landing-page">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="login-box">
            <Login/>

        </div>
      </nav>


    </div>
  );
}

export default LoginPage;