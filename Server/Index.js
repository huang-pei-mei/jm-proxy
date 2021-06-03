const express = require('express')
const app = express();
const port = 4000;
const path = require('path');
const axios = require('axios');
const request = require('request');


app.get('/books/:id/reviews', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'http://54.153.95.228:4000'});
  //http://localhost:4001/books/${req.params.id}/reviews
  console.log('hello');
  axios.get(`http://ec2-54-183-2-218.us-west-1.compute.amazonaws.com:4001/books/${req.params.id}/reviews`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});



app.get('/api/price/:bookId', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  console.log('heads', req.headers)
  //http://localhost:3000${req.url}
  axios.get(`http://localhost:3000${req.url}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/book/:bookId', (req, res) => {
//http://localhost:2002${req.url}
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  axios.get(`http://localhost:2002${req.url}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})


app.get('/api/summary/:bookId', (req, res) => {
  //http://localhost:1220${req.url}
  axios.get(`http://localhost:1220${req.url}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})

app.get('/api/aggReview/:bookId', (req, res) => {
  //http://localhost:2880${req.url}
  axios.get(`http://localhost:2880${req.url}`, {headers: req.headers})
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
})

app.use('/books/:bookId', express.static(path.join(__dirname, '..', 'Public')));

app.use(express.json());



app.listen(port, () => {

  console.log(`Audible title service listening at ${port}`);
});