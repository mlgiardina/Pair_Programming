
var BioForm = React.createClass({
	render: function(){
		var userToUpdate = this.props.user;
		return (<div>
					Name: <input ref="updateName" type="text" defaultValue={userToUpdate.name}/><br/>
					Email: <input ref="updateEmail" type="text" defaultValue={userToUpdate.email}/><br/>
					Bio: <input ref="updateBio" defaultValue={userToUpdate.bio}/><br/>
					<button onClick={this.saveProfileInfo}>Save</button>
					<input ref="userImageUpload" type="text"/><button onClick={this.uploadPhoto}>Upload</button>
				</div>
		);
	},
	saveProfileInfo: function(){
		$.ajax({
			type:"PUT",
			url:"http://localhost:3000/users",
			data:{user:
					{
					username: userToUpdate.username,
					picture: this.refs.userImageUpload.getDOMNode().value,
					bio: this.refs.updateBio.getDOMNode().value, 
					email: this.refs.updateEmail.getDOMNode().value, 
					name: this.refs.updateName.getDOMNode().value
				}},
			success: function(){
				React.render(<ProfilePage routing={myRouter} questions={questions} profileName={userToUpdate.name} />, containerEl);
			}
		});
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

