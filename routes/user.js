module.exports = function(app,Schema)
{
	var Schema = Schema,
		passport = require('passport');


	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	 	res.redirect('/login')
	}
	
	app.get('/login', function(req, res){
		res.render('login')
	});

	app.post('/login',passport.authenticate('local', { successRedirect: '/',
                               failureRedirect: '/login',
                               failureFlash: false })
	);

	app.get('/logout', function(req, res) {
	  var ajax = req.headers['x-requested-with'];
	  console.log(ajax);
	  req.logout();
	  if (ajax) {
		  if (req.session) {
	        req.session.destroy(function () {
	            res.send('ok', 200)
	        });
		  }
		  else {
		        res.send('ok', 200)
		  }
		}
		else
		{
			res.redirect('/login');
		}
	});

	app.get('/user', ensureAuthenticated, function(req, res){
		res.json({user:req.user});
	})
	app.get('/users', ensureAuthenticated, function(req, res)
	{
		Schema.User.find({}, function(err, users)
		{
			if (err)
			{
				res.json(false);
			}

			res.json({users: users});
		})
	});

	app.post('/users/addUser', ensureAuthenticated,  function(req, res)
	{
		var user = new Schema.User(req.body)

		user.save(function(err)
		{
			if (err)
			{
				res.json(false);
			} else {
				res.json(true);
			}
		})
	});

	app.get('/users/viewUser/:id', ensureAuthenticated,  function(req, res)
	{
		var id = req.params.id;
		if (id)
		{
			Schema.User.findOne({'_id':id},function(err, user)
			{
				if (err)
				{
					res.json(false);
				}

				res.json({user:user});
			})
		}
		else
		{
			res.json(false);
		}
	});

	app.put('/users/editUser/:id', ensureAuthenticated,  function(req, res)
	{
		var id = req.params.id;
		if (id)
		{
			Schema.User.findOne({'_id': id}, function(err, user)
			{
				if (err){
					res.json(false);
				}
				user.username = req.body.username;
				user.password = req.body.password;
				user.name = req.body.name;
				user.email = req.body.email;
				user.save(function(err){
					if (err) {
						res.json(false);
					} else {
						res.json(true);
					}
				});
			})
		} else {
			res.json(false);
		}
	});

	app.delete('/users/deleteUser/:id', ensureAuthenticated,  function(req, res)
	{
		var id = req.params.id;
		if (id) {
			Schema.User.remove({'_id': id}, function(err) {
				if (err) {
					res.json(false);
				}
				else {
					res.json(true);
				}
			})
		} else
		{
			res.json(false);
		}
	});
}