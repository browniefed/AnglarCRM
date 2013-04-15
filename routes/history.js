module.exports = function(app)
{
	app.use(function(req,res)
	{
		if (req.isAuthenticated()) {
			res.render('index');
		} else
		{
			res.redirect('/login');
		}
	})
}