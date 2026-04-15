const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
