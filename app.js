var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res){
  var animalSounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'Meeeeoooow',
    bird: 'Chirp Chirp'
  }
  var animal = req.params.animal.toLowerCase();
  var sound = animalSounds[animal] || 'hello, world';
  res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:word/:num', function(req, res){
  var word = req.params.word;
  var num = req.params.num;
  var phrase = "";
  for (var i = 0; i < num; i++){
    phrase += `${word} `;
  }
  res.send(phrase);
});

app.get('*', function(req, res){
  res.send('Sorry, page not found...What are you doing with your life?');
});

app.listen(3000, function(){
  console.log('Server has started');
});