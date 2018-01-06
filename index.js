// Like "import" in React
const express = require('express');

// Creating an Express application
const app = express();

// Route Handler
app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

app.listen(5000);
