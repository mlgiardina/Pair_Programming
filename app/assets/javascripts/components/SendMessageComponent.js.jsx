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
		var goTo = this.props.routing;
		var user = this.props.user;
		console.log("im showing a message");
		$.post("http://localhost:3000/messages/",{message: {receiver_name: "allen", sender_name:this.props.user, 
										body: this.refs.messageBody.getDOMNode().value}}, function(data){
											console.log("did i work?")
											console.log(data);
											goTo.navigate("profile/"+user, {trigger: true});
										}, "json");
	}
});