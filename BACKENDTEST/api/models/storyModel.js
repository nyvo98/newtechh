var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    matruyen : String ,
    tentruyen: String,
    loai : Array,
    tacgia :String,
    noidung : String,
    data : String

  }); 
  
  module.exports = mongoose.model('storys', storySchema);