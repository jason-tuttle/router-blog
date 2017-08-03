import React, { Component } from 'react';

class ShowPost extends Component {

  render() {
    const {id} = this.props.match.params;
    const {posts} = this.props;
    return (
      <div>Show A Post
        This post has id={id}.
      </div>
    );
  }

}

export default ShowPost;
