import express from "express";

// const jwt = require('jwt-simple');
import jwt from "jwt-simple";
// const uuid = require('uuid');
import { v4 as uuidv4 } from 'uuid';

// Access your shared key via an environment variable
// const shared_key = process.env.SHARED_KEY;

// function generateJwt(name, email) {
//   const payload = {
//     iat: Math.floor(new Date().getTime() / 1000),
//     jti: uuidv4(),
//     name: name,
//     email: email
//   };
//   console.log('paylod ===', payload);
//   // encode
//   return jwt.encode(payload, shared_key);
// }

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
  // generateJwt('carl','carlgoldberg1236@gmail.com')

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});