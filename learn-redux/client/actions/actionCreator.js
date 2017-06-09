// usually you'd create one action creator per file

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comment
export function addComment(postId, author, comment) {
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
}
// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index
  }
}
