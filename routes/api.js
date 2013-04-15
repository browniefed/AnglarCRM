module.exports = function(app, Schema) {
  
  var Schema = Schema;

    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/login')
    }
  //GET ALL POSTS
  app.get('/api/posts', ensureAuthenticated,function (req, res)
  {
    Schema.Post.find({}, function(err, posts){
      var data = [];
      posts.forEach(function(post, i)
      {
        data.push({
          id:post._id,
          title: post.title,
          text: post.text
        });
      })
      res.json({posts: data});
    });
  });

  //GET SINGLE POST
  app.get('/api/post/:id', ensureAuthenticated, function (req, res)
  {

    Schema.Post.findOne({'_id': Schema.db.BSON.ObjectID.fromString(req.params.id)}, function (err, post)
    {
      if (err) {
        res.json(false);
      }
      res.json({post:post});
    });
  });

  app.post('/api/post', ensureAuthenticated, function(req, res)
  {
    var post = new Schema.Post({title: req.body.title, text: req.body.text});
    post.save();
    res.json(req.body);
  })

  //EDIT THE POST
  app.put('/api/post/:id', ensureAuthenticated, function(req, res)
  {
    var id = req.params.id;
    Schema.Post.findOne({'_id': Schema.db.BSON.ObjectID.fromString(id)}, function( err, post)
    {
      if (err)
      {
        res.json(false);
      }
      post.modified = new Date();
      post.title = req.body.title;
      post.text = req.body.text;
      post.save(function(err)
      {
        if (err)
        {
          res.json(false);
        }
        else
        {
          res.json(true);
        }
      });
    });
  });
  //DELETE THE POST
  app.delete('/api/post/:id', ensureAuthenticated, function(req, res){
    var id = req.params.id;
    if (id)
    {
      Schema.Post.remove({'_id': Schema.db.BSON.ObjectID.fromString(id)}, function(err)
      {
        if (err)
        {
          res.json(false);
        }
        else
        {
          res.json(true);
        }
      });
    }
  });
  

}