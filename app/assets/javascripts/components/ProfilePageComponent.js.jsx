var clicks = 0;
var loggedInUser;
var photoToShow;
var answers = [["OS X", "Windows", "Linux"],["Agree","Neutral","Disagree"],
["Dark","Neutral","Light"],["Workin' in the Front","Both","Workin' in the Back"],
["Yes","No","Eh?"],["Agree","Neutral","Disagree"],["Mouse","Trackpad","VIM"],
["Brackets!","Literal!","Objects?"],["Spaces","Tabs","I like to watch the world burn.. both"],
["Firefox","Chrome","IE8"],["StartUps are my jam!","Give me a suit and tie!","I like working from home!"]];

var ProfilePage = React.createClass({
	componentWillMount: function(){
		$.get("/session/", function(data){
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
	getInitialState: function(){
		return {
			bio: this.props.bio
			name: this.props.name
		};
	},
	render: function(){
		var weight = 0;
		var questionare = this.props.questions.map(function(question){
			var answer = answers[questions.indexOf(question)].map(function(answerForQuestion){
				var index = questions.indexOf(question);
				if(weight === 3){
					weight = 0;
				}
				var questionWeight = weight;
				weight++;
	return (<div className="input" key={answerForQuestion}>
		<input data-id={questionWeight} value={answerForQuestion} ref={"answer"+index} key={index} name={"question-"+index} type="radio"/>
	{answerForQuestion}</div>);
	});
	return (<div className="input-styles" key={"answerQuestion-"+questions.indexOf(question)}>{question}{answer}</div>);
	});
	var that = this;
	return (
	// profile page html-------------------------------

	<div className=" body-color body-padding col12">
		<header>
			<h1>Pair Pr💓gramming</h1>
			<button className="button-right btn" onClick={this.logOut}>Logout</button>

			<button className="btn" onClick={this.showLoggedInUser}>Edit Profile</button>
		</header>




		<div>
			<div className="col2 add delete "></div>
			<div className=" body-color profile-img col2">
				<img src={this.props.photoToShow}/>

				<h2 className="delete-h2 left-align">{this.props.name}</h2>
				<p className="move">{this.props.bio}
				</p>
			</div>

			<div className="col6 matches-section add ">
				<h2>Your Matches</h2>
				<Match />
			</div>
			<div className="col2 add delete"></div>
		</div>
		<div className="bio">
			<div className="col2"></div>
			<div className="col3">
				<h2 className="delete bringback left-align">{this.props.name}</h2>
				<p className="delete text-fix bringback">{this.props.bio}</p>
				<div className="col2 messages">
					<button className="btn" onClick={this.showMessageComponent}>Send Message</button>
					<a onClick={this.displayMessageBox} href="#">Message</a>
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

	$.post("/answers/",{answer:
	{
	user_id: userToUpdate.id,
	body: ans
	}
	},function(){
	$.get("/answers/", function(data){
	var loggedIn = data;
	$.get("/answers/all",function(users){
	startMatching(loggedIn, users);
	});

	});
	} ,"json");
},
showLoggedInUser: function(){
	React.render(<BioForm user={userToUpdate}/>, containerEl);

	},
	logOut: function(){
	$.get("/logout/",function(data){
	console.log(data);
	});
	this.props.routing.navigate("login", {trigger: true});
},
showMessageComponent: function(){
	React.render(<SendMessage routing={this.props.routing} loggedInUser={loggedInUser} profileName={this.props.profileName} />,
		document.getElementById("send-message"));
	},
displayMessageBox: function(event){
	event.preventDefault();

	if(clicks%2===0){
	var user = this.props.user;
	console.log(loggedInUser);
	$.get("/messages/inbox",{username: loggedInUser},function(data){
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
	var score = 0;
	var scores = [];
	console.log("logged in Users data",loggedInUser);
	console.log("everyone elses data",everyoneElse);
	console.log("logged in user",loggedInUser.body);
	console.log(loggedInUser)
	//console.log("everyone else:", everyoneElse[0].body.split("~"));
	if(everyoneElse.length !== 0){
		for(var i = 0; i < everyoneElse.length; i++){
			var newArray = everyoneElse[i].body.split("~").slice(0);
			console.log(newArray);
			for(var j = 0; j < loggedInUser.body.length; j++){
				score += Math.abs(parseInt(loggedInUser.body[j].slice(-1)) - parseInt(newArray[j].slice(-1)));
			}
			console.log(score);
			scores.push({match: {user_id: loggedInUser.user_id, body: everyoneElse[i].user_id+"~"+Math.round((1-(score/22))*100)}});
			score = 0;
		}

		scores.map(function(element){
			$.post("/match/", element, function(){
				console.log("i work, bitches!");
			});

		});

	}



}
