const express = require('express');

const PORT = process.env.PORT || 3030;

const app = express();

//serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//import routes from the controller folder  and give the server to access to them
const routes = require('./controllers/burgersController.js')
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
