
var containerEl = document.getElementById("container");
var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login",
		"profile/:user":"profile"

	},
	login: function() {
		React.render(<Login routing={myRouter}/>, containerEl);
	}, 
	profile: function(user){
		React.render(<ProfilePage user={user} />, containerEl);
	}
});

var myRouter = new App();
Backbone.history.start();   
