

import React, {Component} from 'react';
import data from '../data/index.js';
import PostsList from './posts_list';
import PostsFilter from './posts_filter';
import PostsNew from './posts_new';
import PostsSort from './posts_sort'



class PostIndex extends Component {
  constructor(props){
      super(props)
      this.state = {
        showForm : false,
        data: data,
        filter: '',
        sortedBy: 'votes'
      }

      this.toggleForm = this.toggleForm.bind(this)
      this.submitPost = this.submitPost.bind(this)
      this.filterPosts = this.filterPosts.bind(this)
      this.changeSortedBy = this.changeSortedBy.bind(this)

    }


    changeSortedBy(sort){
      this.setState({
        sortedBy: sort
      })
    }

    toggleForm() {
      this.setState({
        showForm : this.state.showForm ? false : true
      })
    }

    submitPost(newPost){
      this.setState({
        data: this.state.data.concat(newPost)
      })
      this.toggleForm()
    }

    filterPosts(filterWord){
        this.setState({
          filter: filterWord
        })
    }


  render() {
    return (
      <div>
        <div id='filter-div'>
          <PostsFilter filterPosts={this.filterPosts}/>
          <PostsSort changeSortedBy={this.changeSortedBy}/>

        </div>
        <button onClick={this.toggleForm} className="btn btn-primary" id="new-post">New Post</button>
        { this.state.showForm &&  <PostsNew  submitPost={this.submitPost} />}
        <div>
          <PostsList sort={this.state.sortedBy} filter={this.state.filter} posts={this.state.data} submitComment={this.submitComment}/>
        </div>
      </div>
    );
  }
}

export default PostIndex;
