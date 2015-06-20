var MessageBox = React.createClass({

	render: function(){
		var received = this.props.receivedMessages;
		console.log(received);
		 var propHolding = [];
		
			for(var thing in received){
				propHolding.push(thing);
			}
			var headers = propHolding.map(function(header){
				var body = received[header].map(function(message){
					return (<div key={"message"+message.id}>{message.body}</div>);
				});
				return (<div key={"header"+header}>{header}:{body}<br/><br/></div>);
			});
			return (
				<div>
					{headers}
				</div>
			);
	}

});