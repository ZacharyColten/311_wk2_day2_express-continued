const vehicles = require('../data/vehicles.js')
var vehicleCounter = vehicles.length + 1

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)))
}

const create = (req, res) => {
  req.body.postId = "1"
  req.body._id = vehicleCounter
  vehicleCounter++
  vehicles.push(req.body)
}

module.exports = {
  list,
  show,
  create
}