import React, {Component} from 'react';
import Moment from 'react-moment'

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this)
    this.voteDown = this.voteDown.bind(this)
    this.toggleComments = this.toggleComments.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addComment = this.addComment.bind(this)
    this.submitComment = this.submitComment.bind(this)

    this.state = {
      votes: this.props.post.votes,
      showComments: false,
      newComment: '',
      comments: this.props.post.comments
    }
  }

  voteUp() {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  voteDown() {
    if(this.state.votes > 0) {
      this.setState({
        votes: this.state.votes - 1
      })
    }

  }

  toggleComments() {
    this.setState({
      showComments: this.state.showComments ? false : true
    })
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  addComment(event){
    event.preventDefault()
    this.submitComment(this.state.newComment)
    this.setState({
      newComment: ''
    })
  }

  submitComment(newComment){
    this.setState({
      comments : this.state.comments.concat(newComment)
    })
  }


  render() {
    const { newComment } = this.state;
    const commentList = this.state.comments.map((comment, i) => {
      return <li key={i} >{comment}</li>
    })
    return (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4">
                  <img src={this.props.post.image_url} className="post-image" alt={this.props.title}/>
                </div>
                <div className ="col-md-8">
                  <h3>{this.props.post.title} </h3>
                    <a onClick={this.voteUp}><i className="fa fa-arrow-up fa-lg"></i></a>
                    {this.state.votes}
                    <a onClick={this.voteDown}><i className="fa fa-arrow-down fa-lg"></i></a>
                  <h5>Author: {this.props.post.author}</h5>
                  <p>{this.props.post.body}</p>
                  <Moment format="MM-DD-YYYY">{this.props.post.created}</Moment> |
                    <a id='comment-section' onClick={this.toggleComments}><i className="fa fa-comments"></i> Comments: {this.props.post.comments.length} </a>
                  { this.state.showComments &&
                    <div>
                      <ul>
                        {commentList}
                      </ul>
                      <form onSubmit={this.addComment}>
                        <input id="newComment" className="form-control" onChange={this.handleChange} value={newComment}/>
                        <button type="submit" className="btn btn-primary" id="comment_button" onClick={this.addComment}>Comment</button>
                      </form>
                    </div>
                  }
                </div>
              </div>
            </li>
    );
  }
}

export default PostDetail;
