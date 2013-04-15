module.exports = function(app,Schema)
{
	var Schema = Schema,
	passport = require('passport');

	function ensureAuthenticated(req, res, next) {
	  if (req.isAuthenticated()) { return next(); }
	 	res.redirect('/login')
	}

	app.get('/', ensureAuthenticated, function(req, res)
	{
		res.render('index');
	});

	app.get('/partials/:name', ensureAuthenticated, function (req, res)
	{
		var name = req.params.name;
		res.render('partials/' + name);
	});

}