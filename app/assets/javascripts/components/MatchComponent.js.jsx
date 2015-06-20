var Match = React.createClass({
	render: function(){
		return (
			<div>Im a match!
			{this.matchAlgorithm()}
			</div>
		);
	},
	matchAlgorithm: function(){
		$.get("http://localhost:3000/users", function(data){
			console.log(data);
		},"json");
	}
});