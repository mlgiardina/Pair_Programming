
var BioForm = React.createClass({
	render: function(){
		var userToUpdate = this.props.user;
		return (<div>
					Name: <input ref="updateName" type="text" defaultValue={userToUpdate.name}/><br/>
					Email: <input ref="updateEmail" type="text" defaultValue={userToUpdate.email}/><br/>
					Bio: <input ref="updateBio" defaultValue={userToUpdate.bio}/><br/>
					Picture Url:<input ref="userImageUpload" type="text" defaultValue={userToUpdate.picture}/>
					<button onClick={this.saveProfileInfo}>Save</button>
				</div>
		);
	},
	saveProfileInfo: function(){
		var photoToShow = this.refs.userImageUpload.getDOMNode().value
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
				console.log("image uploaded")
				React.render(<ProfilePage routing={myRouter} questions={questions} photoToShow={photoToShow} profileName={userToUpdate.name} />, containerEl);
			}
		});
	}
});

