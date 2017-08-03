import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  render() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
      .then(response => response.json())
      .then(list => this.setState({posts: list}));
    return (
      <div>Post List:
        <ul style={{listStyle: 'none'}}>
          {this.state.posts.map((post, i) =>
          <li key={i} style={{border: '1px solid black'}}>
            <p className="post-title">{post.title}</p>
            <p className="post-author">Posted By: {post.name}</p>
            <p className="post-body">{post.blog}</p>
          </li>)}
        </ul>
      </div>
    );
  }

}

export default PostList;
