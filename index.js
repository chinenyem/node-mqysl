const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const store = require('./store');

const app = express();
app.use(compression());
app.use(express.static('churchcourse/dist'))
app.use(bodyParser.json());
app.post('/createUser', (req,res)=>{
  store.createUser({
      username:req.body.username,
      password:req.body.password
  })
  .then(() => res.sendStatus(200))
});

app.post('/login', (req,res) =>{
  store.authenticate({
    username: req.body.username,
    password: req.body.password
  })
  .then(({success}) =>{
    if(success) res.sendStatus(200)
    else res.sendStatus(401)
  })
})

app.listen(3000, () =>{
  console.log('Serving running on https://localhost:3000')
})


