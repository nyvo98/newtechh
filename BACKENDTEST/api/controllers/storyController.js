var mongoose = require('mongoose');
story = mongoose.model('stories');
var fs = require('fs');



exports.list_all_storys = function(req, res) {
  story.find({}, function(err, story) {
    if (err)
      res.send(err);
    res.json(story);
  });
};


 

exports.create_a_story = function(req, res) {
  var new_story = new story(req.body);
  new_story.save(function(err, story) {
    if (err)
      res.send(err);
    res.json(story);
  });
};


exports.read_a_story = function(req, res) {
  story.find({'matruyen':req.params.storyid}, function(err, user) {
    
    if (err)
      res.send(err);
      fs.readFile(`./dataTruyen/${user[0].noidung}.txt`,function(err,data){
        if(data!=undefined){
          user[0].data = data.toString();
        }
        res.send(user);
      })
  });
};


exports.update_a_story = function(req, res) {
  story.updateOne({id: req.params.storyid},{$set : req.body}, function(err, user) { 
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_story = function(req,res){
  story.findOneAndRemove({'matruyen':req.params.storyid},function(err,story){
    if(err) res.send(err);
    res.json(story);
  })
}