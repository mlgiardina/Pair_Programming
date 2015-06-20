var userToUpdate;
var BioForm = React.createClass({
	componentWillMount: function(){
		$.get("http://localhost:3000/session",function(data){
			userToUpdate = data;
		})
	},
	render: function(){
		return (<div>
					Name: <input ref="updateName" type="text" value={userToUpdate.name}/><br/>
					Email: <input ref="updateEmail" type="text" value={userToUpdate.email}/><br/>
					Bio: <textarea ref="updateBio" value={userToUpdate.bio}></textarea><br/>
					<button onClick={this.saveProfileInfo}>Save</button>
					<UploadPhoto userPic={userToUpdate.picture} ref="updatePicture" />
				</div>
		);
	},
	saveProfileInfo: function(){
		$.ajax(
			type:"PUT",
			url:"http://localhost:3000/users",
			data:{user:
					{
					id: userToUpdate.id,
					picture:this.refs.updatePicture.getDOMNode().src, 
					bio: this.refs.updateBio.getDOMNode().value, 
					email: this.refs.updateEmail.getDOMNode().value, 
					name: this.refs.updateName.getDOMNode().value
				}},
			success: function(){
				console.log("i work!")
			});
	}
});