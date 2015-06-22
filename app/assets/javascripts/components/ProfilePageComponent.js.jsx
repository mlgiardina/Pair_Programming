var clicks = 0;
var loggedInUser;
var answers = [["OS X", "Windows", "Linux"],["Agree","Neutral","Disagree"],
["Dark","Neutral","Light"],["Workin' in the Front","Both","Workin' in the Back"],
["Yes","No","Eh?"],["Agree","Neutral","Disagree"],["Mouse","Trackpad","VIM"],
["Brackets!","Literal!","Objects?"],["Spaces","Tabs","I like to watch the world burn.. both"],
["Firefox","Chrome","IE8"],["StartUps are my jam!","Give me a suit and tie!","I like working from home!"]];
$.get("http://localhost:3000/answers/", function(data){
var loggedIn = data;
});
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
	var weight = 0;
	console.log("user is still logged in ",loggedInUser);
	var questionare = this.props.questions.map(function(question){
	var answer = answers[questions.indexOf(question)].map(function(answerForQuestion){
	var index = questions.indexOf(question);
	if(weight === 3){
	weight = 0;
	}
	var questionWeight = weight;
	console.log(questionWeight)
	weight++;
	return (<div className="input" key={answerForQuestion}>
		<input  data-id={questionWeight}  value={answerForQuestion} ref={"answer"+index} key={index} name={"question-"+index} type="radio"/>
	{answerForQuestion}</div>);
	});
	return (<div className="input-styles" key={"answerQuestion-"+questions.indexOf(question)}>{question}{answer}</div>);
	});
	var that = this;
	return (
	// profile page html-------------------------------

	<div className=" body-color col12">
		<header>
			<h1>Pair Pr💓gramming</h1>
			<button className="button-right btn" onClick={this.logOut}>Logout</button>
			
			<button className="btn" onClick={this.showLoggedInUser}>Edit Profile</button>
		</header>
		
		
		
		
		<div>
			<div className="col2 add delete "></div>
			<div className=" body-color profile-img col2">
				<img src="http://fillmurray.com/200/200"/>
				
				<h2 className="delete-h2 left-align">Bill Murray</h2>
				<p className="move">bio ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
				</p>
			</div>
			
			<div className="col6 matches-section add ">
				<h2>Your Matches</h2>
				<div  className="matches col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					<h4>Austin TX</h4>
					<p>Coder</p>
				</div>
				<div className=" matches  col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					<h4>Austin TX</h4>
					<p>Coder</p>
				</div>
				<div className=" matches col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					<h4>Austin TX</h4>
					<p>Coder</p>
				</div>
			</div>
			<div className="col2 add delete"></div>
		</div>
		<div className="bio">
			<div className="col2"></div>
			<div className="col3">
				<h2 className="delete bringback left-align">Bill Murray</h2>
				<p className="delete text-fix bringback">bio ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
				<div className="col2 messages">
					<button className="btn" onClick={this.showMessageComponent}>Send Message</button>
					<div id="send-message"></div>
				</div>
				<div id="target-messagebox"></div>
			</div>
			<div className="questions-section col5">
				<h2>Questions</h2>
				<div>
					{questionare}
					<button className="btn"onClick={this.submitQuestions}>Save</button>
				</div>
			</div>
			<div className="col2"></div>
		</div>
	</div>




	);
},
submitQuestions: function(){
	var ans = [];
	for(var i = 0; i < answers.length; i++){
	var weightID = $("input[name=question-"+i+"]:checked").attr("data-id");
	var answerToSend = $("input[name=question-"+i+"]:checked").val();
	ans.push(answerToSend+weightID);
	}

	$.post("http://localhost:3000/answers/",{answer:
	{
	user_id: userToUpdate.id,
	body: ans
	}
	},function(){
	$.get("http://localhost:3000/answers/", function(data){
	var loggedIn = data;
	$.get("http://localhost:3000/answers/all",function(users){
	startMatching(loggedIn, users);
	});

	});
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
function startMatching(loggedInUser, everyoneElse){
	console.log("logged in Users data",loggedInUser);
	console.log("everyone elses data",everyoneElse);
}