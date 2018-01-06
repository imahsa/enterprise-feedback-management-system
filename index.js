// Like "import" in React
const express = require('express');

// Creating an Express application
const app = express();

// Route Handler
app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

// Dynamic Port Binding for Heroku deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
