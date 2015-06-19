var ProfilePage = React.createClass({
	render: function(){
		var questionare = this.props.questions.map(function(question){
			console.log(question);
			return (<div key={question}>{question}</div>);
		});
		return (
			<div>
				hi {this.props.user}!

				<div>
					<h1>Questionare</h1>
					{questionare}
				</div>
			</div>
			//TODO build out nice look profile page
		);
	}
});