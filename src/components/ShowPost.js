import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowPost extends Component {

  render() {
    const {id} = this.props.match.params;
    const {posts} = this.props;
    const post = posts.find(item => item._id === id);
    return (
      <div>Show A Post
        <p className="post-title">{post.title}</p>
        <p className="post-author">Posted By: {post.name}</p>
        <p className="post-body">{post.blog}</p>
      </div>
    );
  }

}

export default connect(({posts}) => ({posts}))(ShowPost);
