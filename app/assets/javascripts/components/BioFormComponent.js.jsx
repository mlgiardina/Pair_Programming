var userToUpdate;
var BioForm = React.createClass({
	componentWillMount: function(){
		$.get("http://localhost:3000/session",function(data){
			userToUpdate = data;
		})
	},
	render: function(){
		return (<div>
					Name: <input ref="updateName" type="text" /><br/>
					Email: <input ref="updateEmail" type="text" /><br/>
					Bio: <textarea ref="updateBio"></textarea><br/>
					<button onClick={this.saveProfileInfo}>Save</button>
					<UploadPhoto ref="updatePicture" />
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
					picture:this.refs.updatePicture.getDOMNode().value, 
					bio: this.refs.updateBio.getDOMNode().value, 
					email: this.refs.updateEmail.getDOMNode().value, 
					name: this.refs.updateName.getDOMNode().value
				}},
			success: function(){
				console.log("i work!")
			});
	}
});