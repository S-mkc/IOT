const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/arduino-data', (req, res) => {
  const data = req.body;
  console.log(data);
  // save the data to the database, file, or in-memory storage
  res.status(200).send('Data received');
});

app.listen(3000, () => console.log('Server started on port 3000'));
