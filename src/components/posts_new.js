import React, {Component} from 'react';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
      image_url: '',
      votes: 0,
      comments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addPost  = this.addPost.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  addPost(event){
    event.preventDefault();
    this.props.submitPost(this.state);
    this.setState({
      title: '',
      author: '',
      body: '',
      image_url: '',
      votes: 0,
      comments: []
    })
  }

render() {
  const { title, author, body, image_url } = this.state;
  return (
    <div className="container">

      <div id="form1">
        <div className="row">
          <div className="col-md-8">

            <form onSubmit={this.addPost}>
              <div>
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} value={title} id="title" className="form-control" required/>

              </div>
              <div>
                <label htmlFor="body">Body</label>
                <textarea onChange={this.handleChange} value={body}  id="body" className="form-control" required></textarea>
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input onChange={this.handleChange} value={author} id="author" className="form-control" required/>

              </div>
              <div>
                <label htmlFor="image_url">Image URL</label>
                <input onChange={this.handleChange} value={image_url}  id="image_url" className="form-control" required/>

              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary" id="create_post">
                  Create Post
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default PostsNew
