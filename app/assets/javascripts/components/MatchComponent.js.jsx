var Match = React.createClass({
	render: function(){
		return (
			<div>
				<div>
					<div  className="matches col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					<p>Austin TX</p>
					<p>Coder</p>
				</div>
				<div className=" matches  col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					<p>Austin TX</p>
					<p>Coder</p>

				</div>
				<div className=" matches col2 ">
					<img src="http://fillmurray.com/150/150"/>
					<h3>Bill Murray</h3>
					 <p>Austin TX</p>
					 <p>Coder</p>
				</div>
			</div>
			{this.matchAlgorithm()}
			</div>
		);
	},
	matchAlgorithm: function(){
		var matchData;
		$.get("/match/top/",function(data){
				console.log(data);
				matchData = data;
		},"json");

		
	}
});