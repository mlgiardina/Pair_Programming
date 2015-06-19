var SendMessage = React.createClass({
	render: function(){
		return (
			<div>
				<form onSubmi={this.sendMessage}>
					<input ref="messageBody" type="text"/>
					<button>Send Message</button>
				</form>
			</div>
		);
	},
	sendMessage: function(){
		console.log("im showing a message");
		$.post("http://localhost:3000",{receiver_name: 1, sender_name:this.props.user, 
										body: this.refs.messageBody.getDOMNode().value}, "json");
	}
});