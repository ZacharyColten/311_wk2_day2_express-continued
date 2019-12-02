const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require('./routes/contacts.js')
const commentsRouter = require('./routes/comments.js')
const productsRouter = require('./routes/products.js')
const vehiclesRouter = require('./routes/vehicles.js')
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(contactsRouter)
app.use(commentsRouter)
app.use(productsRouter)
app.use(vehiclesRouter)
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
