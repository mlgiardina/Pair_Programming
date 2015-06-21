var SendMessage = React.createClass({
	render: function(){
		return (
			<div>
				<form onSubmit={this.sendMessage}>
					<input ref="messageBody" type="text"/>
					<button type="submit">Send Message</button>
				</form>
			</div>
		);
	},
	sendMessage: function(event){
		event.preventDefault();
		console.log("this is the profile name! ",this.props.profileName);
		console.log("im showing a message");
		$.post("http://localhost:3000/messages/",{message: {receiver_name: this.props.profileName, sender_name:this.props.loggedInUser, 
										body: this.refs.messageBody.getDOMNode().value}}, function(data){
											console.log("did i work?");
											console.log(data);
										}, "json");
	}
});