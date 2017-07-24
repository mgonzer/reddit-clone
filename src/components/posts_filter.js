import React, { Component } from 'react';

function PostsFilter(props){
  return (
    <div className="form-group col-2">
      <input type="text" name='filter' className="form-control" id='filter-post' placeholder="Filter"/>
    </div>
  )
}

export default PostsFilter
