var ProfilePage = React.createClass({
	render: function(){
		var questionare = this.props.questions.map(function(question){
			return (<div key={question}>{question}</div>);
		});
		return (
			<div>
				<button onClick={this.logOut}>Logout</button>
				hi {this.props.user}!

				<div>
					<h1>Questionare</h1>
					{questionare}
				</div>
			</div>
			//TODO build out nice look profile page
		);
	}, 
	logOut: function(){
		$.get("http://localhost:3000/logout");
		this.props.routing.navigate("login", {trigger: true});
	}
});