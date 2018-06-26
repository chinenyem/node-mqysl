const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const jwt = require('jsonwebtoken');
const configD = require('./config');

const store = require('./store');

const app = express();
app.use(compression());
app.use(express.static('churchcourse/dist'))
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/createUser', (req,res)=>{
  store.createUser({
      username:req.body.username,
      password:req.body.password
  })
  .then((data) =>{
        const token = jwt.sign({ id: data.id }, configD.secret, {
           expiresIn: 86400 // expires in 24 hours
        });
        
        res.res.status(200).send({ message: "logged In", data, token:token })  
  })
});

app.post('/login', (req,res) =>{
  store.authenticate({
    username: req.body.username,
    password: req.body.password
  })
  .then((data) =>{
    if(data.success) {
       const token = jwt.sign({ id: data.id }, configD.secret, {
           expiresIn: 86400 // expires in 24 hours
        });
      
        res.status(200).send({ message: "logged In", data, token:token })
    
    }
    else res.sendStatus(401)
  })
})

app.listen(3000, () =>{
  console.log('Serving running on https://localhost:3000')
})

//middleman for authentication
// router.get('/me', function(req, res) {
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
//     res.status(200).send(decoded);
//   });
// });


