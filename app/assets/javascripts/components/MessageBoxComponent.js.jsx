var MessageBox = React.createClass({

	render: function(){
		var userMessages = this.props.receivedMessages.map(function(obj){

			return (<div key={obj.id}><a href="#" onCLick={this.displaySpecifcMessages}>{obj.sender_name}</a></div>);
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