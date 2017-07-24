import React, {Component} from 'react';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this)
    this.voteDown = this.voteDown.bind(this)

    this.state = {
      votes: props.post.votes
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

  render() {
    return (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4">
                  <img src={this.props.post.image_url} className="post-image"/>
                </div>
                <div className ="col-md-8">
                  <h3>{this.props.post.title} </h3>
                    <a onClick={this.voteUp}><i className="fa fa-arrow-up"></i></a>
                    {this.state.votes}
                    <a onClick={this.voteDown}><i className="fa fa-arrow-down"></i></a>
                  <h5>Author: {this.props.post.author}</h5>
                  <p>{this.props.post.body}</p>

                </div>
              </div>
            </li>
    );
  }
}

export default PostDetail;
