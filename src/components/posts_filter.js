import React, { Component } from 'react';

class PostsFilter extends Component{
  constructor(props){
    super(props)

    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

      updateSearch(value){
        this.setState({
          search: value
        })
        this.props.filterPosts(value)
      }

  render(){
    return (
      <div className="form-group">
        <input type="text"
          name='filter'
          className="form-control"
          id='filter-post'
          placeholder="Filter"
          value={this.state.search}
          onChange={(event)=>this.updateSearch(event.target.value)}
          />
      </div>
    )
  }
}

export default PostsFilter
