const express = require('express')
const app = express();
const port = 4400;
const path = require('path');

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
  console.log(`Audible title service listening at http://localhost:${port}`);
});