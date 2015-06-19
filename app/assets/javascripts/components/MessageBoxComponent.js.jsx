var MessageBox = React.createClass({

	render: function(){
		var userMessages = this.props.receivedMessages.map(function(obj){

			return (<div key={obj.id}>{obj.sender_name}: {obj.body}</div>);
		});
		return (
			<div>
				{this.props.user}
					<div>
						{userMessages}
					</div>
			</div>
		);
	}

});