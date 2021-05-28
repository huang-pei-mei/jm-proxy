const express = require('express')
const app = express();
const port = 4000;
const path = require('path');
const axios = require('axios');


app.get('/reviews/:bookId', (req, res) => {
  console.log(req.headers);
  res.set({'Access-Control-Allow-Origin' : 'http://54.153.95.228:4000'});
  axios.get(`http://54.67.73.166:4001/reviews/${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});



app.get('/api/price/:bookId(\\d+)', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});

  axios.get(`http://localhost:3000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/title/:bookId', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  axios.get(`http://localhost:2002${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})


app.get('/api/summary/:bookId', (req, res) => {
  axios.get(`http://localhost:1220${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})



app.use(express.static(path.join(__dirname, '..', 'Public')));


app.use(express.json());



app.listen(port, () => {

  console.log(`Audible title service listening at ${port}`);
});