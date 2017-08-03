import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Blog Poster</h1>
          <nav>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <NavLink to="/show" className="nav-link">All Posts</NavLink>
            <NavLink to="/create" className="nav-link">New Post</NavLink>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default BaseLayout;
