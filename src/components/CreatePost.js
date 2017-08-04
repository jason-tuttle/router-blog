import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      blog: ''
    };
  }

  getValidationState = () => {
    const state = this.state;
    const length = Object.values(state).reduce((sum, item) => sum + item.length);
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  


  render() {
    const {createPost} = this.props;
    return (
      <div>Create Post:
        <form onSubmit={() => createPost(this.state)}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange('name')}
            />
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleChange('title')}
            />
            <FormControl
              type="text"
              value={this.state.blog}
              placeholder="Enter some post text"
              onChange={this.handleChange('blog')}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }

}

export default connect(null, dispatch => bindActionCreators({createPost}, dispatch))(CreatePost)
