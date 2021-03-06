const express = require('express')
const app = express();
const port = 8080;
const path = require('path');
const axios = require('axios');
const request = require('request');
const AmpOptimizerMiddleware = require('@ampproject/toolbox-optimizer-express');
var compression = require('compression')

app.use('/books/:bookId', compression());

app.use('/books/:bookId', AmpOptimizerMiddleware.create());

app.use('/books/:bookId', express.static(path.join(__dirname, '..', 'Public')));

app.use(express.json());


app.get('/books/:id/reviews', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  axios.get(`http://ec2-54-183-2-218.us-west-1.compute.amazonaws.com:4001/books/${req.params.id}/reviews`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});



app.get('/books/:id/api/price/', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  axios.get(`http://ec2-34-221-235-141.us-west-2.compute.amazonaws.com:3000/api/price/${req.params.id}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/books/:id/api/book', (req, res) => {
  res.set({"Cache-Control": "max-age=25000", 'Access-Control-Allow-Origin' :'*'});
  axios.get(`http://13.57.14.144:2002/api/book/${req.params.id}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})


app.get('/books/:id/api/summary', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  axios.get(`http://ec2-18-188-135-5.us-east-2.compute.amazonaws.com:1220/api/summary/${req.params.id}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/books/:id/api/aggReview', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : '*'})
  axios.get(`http://ec2-18-220-21-137.us-east-2.compute.amazonaws.com:2880/api/aggReview/${req.params.id}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})



app.listen(port, () => {

  console.log(`Audible title service listening at ${port}`);
});