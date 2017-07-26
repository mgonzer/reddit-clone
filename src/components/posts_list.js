import React, {Component} from 'react';
import PostsDetail from './posts_detail';
import _ from 'lodash';

class PostsList extends Component {
  constructor(props){
    super(props)
  }



  render(){
    let sortedBy = this.props.sort


    let sortPosts = _.sortBy(this.props.posts, sortedBy, function(n){
      return n;
    })
    sortedBy === 'title' ? sortPosts : sortPosts.reverse()


    const filterPosts = sortPosts.filter(post=>{
      return post.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1;
    })





      return (
        <ul className="list-group">
          {filterPosts.map((post,i) => {
            return <PostsDetail index={post.id} key={post.id} post={post} submitComment={this.props.submitComment}/>
          })}
        </ul>
      )
}
}

export default PostsList;
