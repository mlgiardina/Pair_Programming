var UploadPhoto = React.createClass({
	render: function(){
		return (<div><input type="text"/><button onClick={this.uploadPhoto}>Upload</button>
				<img ref="anImage" src={this.props.userPic}/></div>);
	},
	uploadPhoto: function(event){
		event.preventDefault();
		var image = this.refs.anImage;
		$.get("/likes", function(data){
			console.log(image.getDOMNode().src = data.url);
			console.log(data.url);
		});
		$.ajax({
			type:"PUT",
			url:"/users",
			data:{user:
					{
					username: userToUpdate.username,
					picture:this.refs.updatePicture.getDOMNode().src, 

				}},
			success: function(){
				React.render(<ProfilePage routing={myRouter} questions={questions} profileName={userToUpdate.name} />, containerEl);
			}
		});
	}
});