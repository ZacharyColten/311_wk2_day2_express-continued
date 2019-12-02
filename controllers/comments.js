const comments = require('../data/comments.js')
var commentCounter = comments.length + 1

const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  res.json(comments.find(comments => comments._id === parseInt(req.params.id)))
}

const create = (req, res) => {
  req.body.postId = "1"
  req.body._id = commentCounter
  commentCounter++
  comments.push(req.body)
}

module.exports = {
  list,
  show,
  create
}