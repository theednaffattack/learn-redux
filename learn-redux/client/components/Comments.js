import React from 'react';
import Comment from './Comment.js';

class Comments extends React.Component {
  constructor(props) {
    super(props); // 'this' is bound somewhere below, probably on a click or submit
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log('submitting the form');
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(postId, author, comment);
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
  render() {
    return(
      <div className="comments">
      { this.props.postComments.map((comment, i) => <Comment {...this.props} comment={comment} key={i} i={i} />) }

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;