var clicks = 0;
var loggedInUser;
var answers = [["OS X", "Windows", "Linux"],["Agree","Neutral","Disagree"],
["Dark","Neutral","Light"],["Workin' in the Front","Both","Workin' in the Back"],
["Yes","No","Eh?"],["Agree","Neutral","Disagree"],["Mouse","Trackpad","VIM"],
["Brackets!","Literal!","Objects?"],["Spaces","Tabs","I like to watch the world burn.. both"],
["Firefox","Chrome","IE8"],["StartUps are my jam!","Give me a suit and tie!","I like working from home!"]];

var ProfilePage = React.createClass({
	componentWillMount: function(){
		$.get("http://localhost:3000/session/", function(data){
			console.log("coming from inital: ",data);
			  loggedInUser = data.username;
			  userToUpdate = {
			  				id: data.id,
			  				username: data.username,
			  				name: data.name,
							email: data.email,
							bio: data.bio,
							picture: data.picture};
			
		}, "json");
	},
	render: function(){
		console.log("user is still logged in ",loggedInUser);
		var questionare = this.props.questions.map(function(question){
			var answer = answers[questions.indexOf(question)].map(function(answerForQuestion){
				var index = questions.indexOf(question);
				var questionWeight = index%3;
				return (<div key={answerForQuestion}>
						<input data-id={questionWeight} className = "answers-for-match" value={answerForQuestion} ref={"answer"+index} key={index} name={"question-"+index} type="radio"/>
						{answerForQuestion}</div>);
			});
			return (<div key={"answerQuestion-"+questions.indexOf(question)}>{question}{answer}</div>);
		});

		var that = this;
		return (
			<div>
				<button onClick={this.logOut}>Logout</button>
				<button onClick={this.showMessageComponent}>Send Message</button>
				hi {this.props.user}!
				<a onClick={this.displayMessageBox} id="inbox-link" href="#">Message</a>
				<div id="send-message">
				</div>
				<div>
					<button onClick={this.showLoggedInUser}>Edit Profile</button>
					<div id="target-messagebox"></div>
					<br/>
					<Match user={this.props.user}/>
				</div>
				{questionare}
				<button onClick={this.submitQuestions}>Save</button>
			</div>	
		);
	},
	submitQuestions: function(){
		var ans = [];
		for(var i = 0; i < answers.length; i++){
			console.log($("input[name=question-"+i+"]:checked"));
			ans.push($("input[name=question-"+i+"]:checked").val());
		}
		$.post("http://localhost:3000/answers/",{answer: 
												{id: userToUpdate.id,
												body:ans}},function(){
													console.log("answers posted!");
												} ,"json");
	},
	showLoggedInUser: function(){
		React.render(<BioForm user={userToUpdate}/>, containerEl);
	},
	logOut: function(){
		$.get("http://localhost:3000/logout/",function(data){
			console.log(data);
		});
		this.props.routing.navigate("login", {trigger: true});
	}, 
	showMessageComponent: function(){
		React.render(<SendMessage routing={this.props.routing} loggedInUser={loggedInUser} profileName={this.props.profileName} />, document.getElementById("send-message"));
	},
	displayMessageBox: function(event){
		event.preventDefault();
		
		if(clicks%2===0){
			var user = this.props.user;
			console.log(loggedInUser);
			$.get("http://localhost:3000/messages/inbox",{username: loggedInUser},function(data){
				console.log("all message: ",data);
				
				React.render(<MessageBox user={loggedInUser} receivedMessages={data} />, document.getElementById("target-messagebox"));
			},"json");
		} else {
			React.render(<div></div>, document.getElementById("target-messagebox"));
		}
		clicks++;
	}
});