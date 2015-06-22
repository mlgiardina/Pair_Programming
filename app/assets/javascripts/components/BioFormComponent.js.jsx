
var BioForm = React.createClass({
	render: function(){
		var userToUpdate = this.props.user;
		return (<div>
					
					
					
					
				

					<div className="header-color col12">

				

            <header>
				<h1>Pair Pr💓gramming</h1>
				 <button className="button-right btn" onClick={this.logOut}>Logout</button>
            </header>









				</div>

                <div className="body-color col12">
                    <div className="logo">
                		<h1>Update Profile</h1> 
                    
                    </div>
                    <form className="form-signup">
                        <fieldset className="sign-up-info">

					        <label>
						        Name 
						        <input ref="updateName" type="text" defaultValue={userToUpdate.name}/><br/>
					        </label>

					        <label> 
					          Email
					          <input ref="updateEmail" type="text" defaultValue={userToUpdate.email}/><br/> 
				            </label>

					        <label>
						        Bio
						         <input ref="updateBio" defaultValue={userToUpdate.bio}/><br/>
					        </label>
                        </fieldset>
                         
                        <fieldset className="signup-bottom">
					       <button className="btn" onClick={this.saveProfileInfo}>Save</button>
					    </fieldset>
					</form>
			    </div>
		    

             	<div className="col12 body-color">
       				<div className=" body-color col4">
         			
         			</div>

       				<div className="  body-color col4">
       			    	
       			    	
       				</div>
  
       				<div className=" body-color col4">
       			   		
                	</div>
   				</div>


























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
					picture:this.refs.updatePicture.getDOMNode().src, 
					bio: this.refs.updateBio.getDOMNode().value, 
					email: this.refs.updateEmail.getDOMNode().value, 
					name: this.refs.updateName.getDOMNode().value
				}},
			success: function(){
				React.render(<ProfilePage routing={myRouter} questions={questions} profileName={userToUpdate.name} />, containerEl);
			}
		});
	}
});

