const contacts = require('../data/contacts.js')
var contactCounter = contacts.length + 1

const list = (req, res) => {
  res.json(contacts)
}

const show = (req, res) => {
  res.json(contacts.find(contact => contact._id === parseInt(req.params.id)))
}

const create = (req, res) => {
  req.body.postId = "1"
  req.body._id = contactCounter
  contactCounter++
  contacts.push(req.body)
}

module.exports = {
  list,
  show,
  create
}