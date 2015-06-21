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

			// profile page html-------------------------------

			<div className="header-color col12">
				<h1>Pair Programming</h1>
                <button className="button-right" onClick={this.logOut}>Logout</button>
                <button onClick={this.showMessageComponent}>Send Message</button>
			<div>
				<button onClick={this.logOut}>Logout</button>
				
				hi {this.props.user}!
				<a onClick={this.displayMessageBox} id="inbox-link" href="#">Message</a>
				<div id="send-message">
				</div>
				<div>
					<button onClick={this.showLoggedInUser}>Edit Profile</button>
					
            </div>

			</div>	

          
			<div className="col12 color">
            	<div className="col2 delete add"></div>

                <div className="profile-img col3">
                	<img src="http://fillmurray.com/400/400"/>
                </div>

                <div className=" border profile-bio col5">
                    
                	<h2>Bio</h2>
               		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only </p>
                </div>
            


                </div>

                <div className="col12 color">
                	<div className=" col2 add delete"></div>
                    <div className=" border matches-likes col4">
                      <h2>Matches</h2>
          




                    </div>

                <div className=" border matches-likes col4">
                	<h2>Likes</h2>
                	<div id="target-messagebox"></div>
                </div>

                </div>

				<div className=" col12 color">
					<div className=" col2 add delete"></div>
					<div className="border col8 questions-section">
                   		<h2>Questions</h2>
				   </div>
				</div>
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