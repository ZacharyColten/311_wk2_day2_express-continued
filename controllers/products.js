const products = require('../data/products.js')
var productCounter = products.length + 1

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  res.json(products.find(product => product._id === parseInt(req.params.id)))
}

const create = (req, res) => {
  req.body.postId = "1"
  req.body._id = productCounter
  productCounter++
  products.push(req.body)
}

module.exports = {
  list,
  show,
  create
}