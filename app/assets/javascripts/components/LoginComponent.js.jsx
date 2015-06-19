var Login = React.createClass({
	render: function () {
		return (
			<div>
				<div className="header-sign-in">
					<form>
						<label>
							Username
							<input ref="username" type="text" name="username"/>
						</label>
		
						<label>
							Password
							<input ref="password" type="password" name="password"/>
						</label>
	   
						<button className="btn" type="submit" name="submit" onClick={this.loginUser}>Sign In</button>
					</form>
				</div>

				<div className="sign-up">
					<form className="sign-up-action sign-up-info">
					  <label>
						  Email
						  <input ref="newUserEmail" type="email" name="email-address"/>
					  </label>

					  <label> Username 
						  <input ref="newUser" type="text" name="username"/>    
					 </label>

					  <label>
						  Password
						  <input ref="newUserPassword" type="password" name="password"/>
					  </label>

					  <label>
						  Confirm Password
						  <input ref="newUserConfirmPassword" type="password" name="password"/>
					  </label>        
					  <button className="btn" type="submit" onClick={this.saveNewUser}>Sign Up</button>
					</form>
				</div>
			</div>
	  );
	},
	saveNewUser: function(event){
		event.preventDefault();
		 var user = new UserModel({
			username: this.refs.newUser.getDOMNode().value,
			password_digest: this.refs.newUserPassword.getDOMNode().value, 
			picture: null, 
			email: this.refs.newUserEmail.getDOMNode().value, 
			bio: null
		 });
		 console.log(user);
		 var newPasword = this.refs.newUserPassword.getDOMNode().value;
		 var confirmPass = this.refs.newUserConfirmPassword.getDOMNode().value;

		 if(user.isValid()){
		 	if(newPasword !== confirmPass){
		 		console.log("Passwords Do Not Match!")
			 } else {
			 	console.log("I work");
			 	this.props.routing.navigate("profile/"+user.get("username"),{trigger: true});
			 	console.log("im sending this: ",{user: user.attributes});
			 	//user.save();
		 	}
		 } else {
		 	console.log(user.validationError);
		 }
		 
	}, 
	loginUser: function(event){
		event.preventDefault();
		var currentUser = new UserModel({
			username: this.refs.username.getDOMNode().value,
			password_digest: this.refs.password.getDOMNode().value, 
			picture: null, 
			email: "null", 
			bio: null
		 });
		console.log("im sending this: ",{user: currentUser});
		if(currentUser.isValid()){
			this.props.routing.navigate("profile/"+currentUser.get("username"),{trigger: true});
		} else {
			console.log(currentUser.validationError);
		}
	}
});
