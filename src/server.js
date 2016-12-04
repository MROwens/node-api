// Require express and body-parser to be used
const express = require('express');
const bodyParser = require('body-parser');
// Instantiate express
const app = express();

// Config port number if not stated in .env file
const port = process.env.PORT || 3000;

// Set up body-parser to be used in API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Set up routing to the routes directory
app.use('/', require('./routes')(express));

// Listen on port stated in port variable
app.listen(port, () => {
  console.log('Server active on', port);
});
