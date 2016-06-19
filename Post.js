var mongoose = require('mongoose');

mongoose.connect("mongodb://bbiereyes:password@ds019254.mlab.com:19254/tweets");


var postSchema = mongoose.Schema({
  content:  { type: String, required: true, trim: true }
},
{
  timestamps: true
});

var Post = mongoose.model('Post',postSchema);

module.exports = Post;