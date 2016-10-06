// =============================================================================

// YO PAUL!!!
// so if you are reading this you have properly cloned this repository!!!!
// I don't know what kind of stuff you'd like to learn.
// I'm gonna add just some basic libraries to this repo.
// you can find all the extra libraries with in the node_modlues folder.

// =============================================================================


// THIS IS AN NODE.JS(https://nodejs.org/en/) SERVER POWERED BY THE EXPRESS.JS(https://expressjs.com) LIBRARY

'use strict';

// Paul this is requiring the express module from node_modlues
var express = require('express');
// then we assign the express() function to our app variable.
var app = express();

// Routing(https://expressjs.com/en/starter/basic-routing.html)
// we are building out the basic routing here.
// when someone goes to localhost:3000
// this is going to grab the following function and res(respond) and send the string 'Hello Paul'
// there is much more to this, but this is the basic beginning of our server.
app.get('/', function (req, res) {
  res.send('Hello Paul!');
});

// as you can see here we use the .listen() function and pass it a port of 3000 as well as give it a function
// that simply spits out a string to the console.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// PUAL if you go to the location of the pualhelper directory on your machine
// and have node.js installed. You can type ( npm install ) into your terminal
// and it will go out and find all the required modules/packages that are
// required to run this server. Then you can run ( npm start ) as I've built
// a "start" script that will fire up your very own localhost server on port:3000

// again let me know if you need any help or anything explained.
