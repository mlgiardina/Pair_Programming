var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login",
		"profile": "profile"

	},
	login: function() {
	 var user = new UserModel({
		username: "thisGuy", 
		password_digest: "secretPassword", 
		picture: null, 
		email: null, 
		bio: null
	 });
	 user.save();
	},
	edit: function() {
	  React.render(<Edit/>, document.getElementById('container'));
	}
});

var app = new App();
Backbone.history.start();   
app.navigate('edit');