var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login"

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
	}
});

var app = new App();
Backbone.history.start();   
