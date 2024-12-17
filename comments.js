// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a comments array
const comments = [
  { username: 'Tammy', comment: 'lol that is so funny!'},
  { username: 'FishBoi', comment: 'Pls delete this.'},
  { username: 'HapppyFeet', comment: 'omg like totally!'}
];