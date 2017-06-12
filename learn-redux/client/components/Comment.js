import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props); // 'this' is bound somewhere below, probably on a click or submit
  }
  handleClick() {
    console.log(this);
  }
  render() {
    const { comment, i } = this.props;
    return(
      <div className="comment" key={i}>
        <strong>
        {comment.user}
        </strong>
        {comment.text}
        <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
      </div>
    );
  }
}

export default Comment;
