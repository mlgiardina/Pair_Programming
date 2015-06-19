
var containerEl = document.getElementById("container");
var questions = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7",
"Question 8","Question 9","Question 10","Question 11","Question 12","Question 13","Question 14","Question 15",
"Question 16","Question 17","Question 18","Question 19","Question 20","Question 21","Question 22","Question 23",
"Question 24","Question 25"];
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
		React.render(<ProfilePage routing={myRouter} questions={questions} user={user} />, containerEl);
	}
});

var myRouter = new App();
Backbone.history.start();   
