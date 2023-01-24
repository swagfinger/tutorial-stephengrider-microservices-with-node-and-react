const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json()); //when someone sends json in requests, it gets parsed and shows up properly in req handler

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

//body with :title
app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex'); //random hex used for id
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  //status - created a resource
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
