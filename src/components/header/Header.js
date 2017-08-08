import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/header.css'

class Header extends Component {

  render() {

    return (
      <div className="header-wrapper">
      	<h1>Youtube Application - eCommera</h1>
        <div className="buttons-wrapper">
          <button> Login </button>
          <button> Signup </button>
        </div>
        <div className="nav">
          <Link to='/'>Home</Link>
          <Link to='/barcelona'>Barcelona</Link>
          <Link to='/friends'>Friends</Link>
        </div>
      </div>
    );
  }
}

export default Header;
