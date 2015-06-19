var userCollection = new UserCollection();
var Login = React.createClass({
	render: function () {
		return (
		
			<div>
				<div className="header-color col12">
					<form className="form-login">
						<label>
							Username:
							<input ref="username" type="text" name="username"/>
						</label>
		
						<label>
							Password:
							<input ref="password" type="password" name="password"/>
						</label>
	   
						<button className="btn" type="submit" name="submit" onClick={this.loginUser}>Sign In</button>
					</form>
				</div>

                <div className="body-color col12">
                    <form className="form-signup">
                        <fieldset className="sign-up-info">

					        <label>
						        Email
						        <input ref="newUserEmail" type="email" name="email-address"/>
					        </label>

					        <label> 
					            Username 
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

					    </fieldset>
                         
                        <fieldset className="signup-bottom">
					        <button className="btn" type="submit" onClick={this.saveNewUser}>Sign Up</button>
					    </fieldset>
					</form>
			    </div>
		    

             	<div>
       				<div className="thirds col4">
         				<img src="http://fillmurray.com/200/200"/>
         			     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         			</div>

       				<div className="thirds delete add off  col4">
       			    	<img src="http://fillmurray.com/200/200"/>
       			    	<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       				</div>
  
       				<div className="thirds delete add col4">
       			   		<img src="http://fillmurray.com/200/200"/>
       			   		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                	</div>
   				</div>
   		    </div>
	  ); 
	},
	saveNewUser: function(event){
		event.preventDefault();
		 var user = new UserModel({
			username: this.refs.newUser.getDOMNode().value,
			password_confirmation: this.refs.newUserPassword.getDOMNode().value,
			password: this.refs.newUserPassword.getDOMNode().value,
			picture: null, 
			email: this.refs.newUserEmail.getDOMNode().value, 
			bio: null
		 });

		 var newPasword = this.refs.newUserPassword.getDOMNode().value;
		 var confirmPass = this.refs.newUserConfirmPassword.getDOMNode().value;

		 if(user.isValid()){
		 	if(newPasword !== confirmPass){
		 		console.log("Passwords Do Not Match!")
			 } else {
			 	console.log("I work");
			 	this.props.routing.navigate("profile/"+user.get("username"),{trigger: true});
			 	$.post("http://localhost:3000/users/",{user: user.attributes}, function(data){
			 		userCollection.add(user);
			 	}, "json");
		 	}
		 } else {
		 	console.log(user.validationError);
		 }
		 
	}, 
	loginUser: function(event){
		event.preventDefault();
		var currentUser = new UserModel({
			username: this.refs.username.getDOMNode().value,
			password_confirmation: this.refs.password.getDOMNode().value, 
			password: this.refs.password.getDOMNode().value, 
			picture: null, 
			email: "null", 
			bio: null
		 });
		
		//var user = userCollection.findWhere({username: currentUser.get("username")});
		//console.log(user);
		if(currentUser.isValid()){
			var routes = this.props.routing;
			console.log("user id:", currentUser.get("username"), "user password:", currentUser.get("password"));
			$.post("http://localhost:3000/login/",{username: currentUser.get("username"), 
				password: currentUser.get("password")},function(data){
				console.log("Im logging and am getting back", data);
				routes.navigate("profile/"+currentUser.get("username"),{trigger: true});
			},"json");
			
		} else {
			console.log(currentUser.validationError);
		}
	}
});
