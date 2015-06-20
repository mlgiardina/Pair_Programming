var ProfilePage = React.createClass({
	render: function(){
		var questionare = this.props.questions.map(function(question){
			return (<div key={question}>{question}</div>);
		});
		return (
			<div>
				<button onClick={this.logOut}>Logout</button>
				<button onClick={this.showMessageComponent}>Send Message</button>
				hi {this.props.user}!
				<a onClick={this.displayMessageBox} href="#">Message</a>
				<div id="send-message">
				</div>
				<div>
					<div id="target-messagebox"></div>
					<br/>
					<Match />
				</div>
			</div>
			//TODO build out nice look profile page
		);
	}, 
	logOut: function(){
		$.get("http://localhost:3000/logout/",function(data){
			console.log(data);
		});
		this.props.routing.navigate("login", {trigger: true});
	}, 
	showMessageComponent: function(){
		React.render(<SendMessage routing={this.props.routing} user={this.props.user} />, document.getElementById("send-message"));
	},
	displayMessageBox: function(event){
		event.preventDefault();
		var user = this.props.user;
		$.get("http://localhost:3000/messages/inbox",{username: user},function(data){
			console.log("all message: ",data);
			React.render(<MessageBox user={user} receivedMessages={data} />, document.getElementById("target-messagebox"));

		},"json");
	}
});