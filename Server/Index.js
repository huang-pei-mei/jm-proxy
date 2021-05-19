const express = require('express')
const app = express();
const port = 4400;
const path = require('path');

console.log(path.join(__dirname, '../Public/'));

app.use(express.static(path.join(__dirname, '../Public')));


app.get('/', (req, res) => {
  res.send(200);
})



app.use(express.json());




app.listen(port, () => {
  console.log(`Audible title service listening at http://localhost:${port}`);
});