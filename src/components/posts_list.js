import React, { Component } from 'react';
import PostsDetail from './posts_detail';

function PostsList(props) {
  const posts = props.posts.map(post => {
    return <PostsDetail key={post.id} post={post}/>
  })
  return (
    <ul className="list-group">
      {posts}
    </ul>
  )
}

export default PostsList;
