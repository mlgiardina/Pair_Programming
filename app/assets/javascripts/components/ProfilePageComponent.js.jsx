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
					<div id="target-messagebox">
					<h1>Questionare</h1>
					{questionare}
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
	displayMessageBox: function(){
		var messages;
		$.get("http://localhost:3000/messages/username",{username: this.props.user},function(data){
			messages = data;
		},"json");
		React.render(<MessageBox user={this.props.user} receivedMessages={messages} />, document.getElementById("target-messagebox"));
	}
});