

import React, {Component} from 'react';
import data from '../data/index.js';
import PostsList from './posts_list';
import PostsFilter from './posts_filter';
import PostsNew from './posts_new';

class PostIndex extends Component {
  constructor(props){
      super(props)
      this.state = {
        showForm : false,
        data: data

      }
      this.toggleForm = this.toggleForm.bind(this)
      this.submitPost = this.submitPost.bind(this)
    }

   toggleForm() {
      this.setState({
        showForm :   this.state.showForm? false : true
      })
    }

    submitPost(newPost){
      this.setState({
        data: this.state.data.concat(newPost)
      })

    }

  render() {

    return (
      <div>
        <div id='filter-div'>
          <PostsFilter/>
          <button onClick={this.toggleForm} className="btn btn-primary col-1" id="new-post">New Post</button>
          { this.state.showForm &&  <PostsNew  submitPost={this.submitPost} />}
        </div>

        <div>
          <PostsList posts={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default PostIndex;
