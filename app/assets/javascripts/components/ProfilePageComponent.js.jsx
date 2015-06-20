var clicks = 0;
var loggedInUser;
var ProfilePage = React.createClass({
	componentWillMount: function(){
		$.get("http://localhost:3000/session/", function(data){
			console.log("coming from inital: ",data);
			  loggedInUser = data.username;
			  userToUpdate = {
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
			return (<div key={question}>{question}</div>);
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
			</div>
			
		);
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