var Match = React.createClass({
	render: function(){
		return (
			<div>Im a match!
			{this.matchAlgorithm()}
			</div>
		);
	},
	matchAlgorithm: function(){
		var user = this.props.user;
		$.get("http://localhost:3000/users/single",{username: user},function(data){
				console.log(data);
		},"json");

		// {answer: {username:"person", answers:array}}
	}
});