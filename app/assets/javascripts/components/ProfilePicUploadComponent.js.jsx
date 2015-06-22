var UploadPhoto = React.createClass({
	render: function(){
		return (<div><input ref="userImageUpload" type="text"/><button onClick={this.uploadPhoto}>Upload</button></div>);
	},
	uploadPhoto: function(event){
		event.preventDefault();
		console.log("im running!");
		var image = this.refs.userImageUpload.getDOMNode().value;
		$.ajax({
			type:"PUT",
			url:"http://localhost:3000/users",
			data:{user:
					{
					picture: image
				}},
			success: function(){
				console.log("i ran!!");
				//React.render(<ProfilePage routing={myRouter} questions={questions} profileName={userToUpdate.name} />, containerEl);
			}
		});
	}
});