import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {

    return (
      <div className="header-wrapper">
      	<h1>Youtube Application - eCommera</h1>
        <div>
          <button> Login </button>
          <button> Signup </button>
        </div>
        <div>
          <Link to='/barcelona'>Barcelona</Link>
          <Link to='/'>Home</Link>
        </div>
      </div>
    );
  }
}

export default Header;
