const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 // name
// description
// location
// progress
// status
// budget
const Project = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: { 
    type: String,
    required: true 
  },
  progress: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true,
    default: 1
  },
  image_url: {
    type: String,
    required: true
  },
  image_type: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Projects', Project)