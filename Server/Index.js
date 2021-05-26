const express = require('express')
const app = express();
const port = 4001;
const path = require('path');
const axios = require('axios');


app.get('/reviews/:bookId', (req, res) => {
  console.log(req.headers);
  res.set({'Access-Control-Allow-Origin' : '*'});
  // res.set({'Access-Control-Allow-Origin': 'http://localhost:4000'})

  axios.get(`http://52.53.198.130:4000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/price/:bookId(\\d+)', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  // res.set({'Access-Control-Allow-Origin': 'http://localhost:4000'})
  axios.get(`http://localhost:3000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/price/:bookId(\\d+)', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  // res.set({'Access-Control-Allow-Origin': 'http://localhost:4000'})
  axios.get(`http://localhost:3000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/book/:id', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3-us-west-1.amazonaws.com'});
  // res.set({'Access-Control-Allow-Origin': 'http://localhost:4000'})
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

app.use(express.static(path.join(__dirname, '../Public')));

// app.all('*', (req, res, next) => {
//   console.log('hi')
//   let origin = req.get('origin');
//   res.header('Access-Control-Allow-Origin', origin);
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use(express.json());




app.listen(port, () => {
  console.log(`Audible title service listening at ${port}`);
});