import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getPosts} from '../actions/actions';
import logo from "../images/logo.svg"

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPosts());
  }

  render() {
    const {posts, waiting} = this.props;
    return (
      <div>Post List:
        <ul style={{listStyle: 'none'}}>
          {waiting ?
            <div style={{textAlign: 'center'}}>
              Waiting for posts to download...
              <img src={logo} className="waiting-spinner" alt="logo" />
            </div> :
            posts.map((post, i) =>
            <li key={i} style={{border: '1px solid black'}}>
              <p className="post-title"><Link to={`/show/${post._id}`}>{post.title}</Link></p>
              <p className="post-author">Posted By: {post.name}</p>
              <p className="post-body">{post.blog}</p>
            </li>)
          }
        </ul>
      </div>
    );
  }

}

export default connect(({posts, waiting}) => ({posts, waiting}))(PostList);
