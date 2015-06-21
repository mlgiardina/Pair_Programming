
var containerEl = document.getElementById("container");
var questions = [
	"1.) Which OS do you prefer?",
	"2.) I love TDD. Agree or disagree?",
	"3.) What is your preferred text editor color scheme?",
	"4.) Do you prefer the front-end or back-end?",
	"5.) Do you know Fortran?",
	"6.) People who choose regular expressions to solve a problem inevitably end up with more problems. Agree or disagree?",
	"7.) Mouse, trackpad, or VIM?",
	"8.) Bracket notation or literal notation?",
	"9.) Spaces or tabs?",
	"10.) Which is your preferred browser?",
	"11.) Startup, enterprise, or freelance?"
];

var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login",
		"profile/:user":"profile",
		"profileForm/:user":"profileForm"

	},
	login: function() {
		React.render(<Login routing={myRouter}/>, containerEl);
	},
	profile: function(user){
		React.render(<ProfilePage routing={myRouter} questions={questions} profileName={user} />, containerEl);
	},
	profileForm: function(user){
		
	}
});

var myRouter = new App();
Backbone.history.start();
