module.exports = function(app){
    var story = require('../controllers/storyController');

    //story route
    app.route('/storys')
        .get(story.list_all_storys)
        .post(story.create_a_story)
    app.route('/storys/:storyid')
        .get(story.read_a_story)
        .put(story.update_a_story)
        .delete(story.delete_a_story)
    
};