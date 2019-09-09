// Importing Node modules and initializing Express
const express = require('express'),
      app = express(),
      router = require('./routes'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');
      path = require('path');

//always use environment variables to store this information
//and call it in a seperate file.
const databse =   'mongodb+srv://test:test@cluster0-wys22.mongodb.net/test?retryWrites=true&w=majority'

// Database Setup
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(databse, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', () => {
    console.error.bind(console, 'MongoDB connection error:')
});

db.on("connected", () => {
    console.log("Connected to database");
});

// Import routes to be served
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }

// Start the server
app.listen(5000);
console.log('Your server is running on port ' + 5000 + '.');
