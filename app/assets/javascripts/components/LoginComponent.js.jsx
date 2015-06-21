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
                    <div className="logo">
                		<h1>Pair</h1> 
                    	<h1>Pr<span></span>gramming</h1>
                    </div>
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
		    

             	<div className="col12 body-color">
       				<div className="thirds col4">
         				<img src="http://fillmurray.com/385/180"/>
         		         <h2>Bill Murray</h2>
         		         <p>"I found my soul coder!"</p>
         			</div>

       				<div className="thirds delete add  col4">
       			    	<img src="http://fillmurray.com/385/180"/>
       			    	 <h2>Bill Murray</h2>
         		         <p>"I found my soul coder!"</p>
       			    	
       				</div>
  
       				<div className="thirds delete add col4">
       			   		<img src="http://fillmurray.com/385/180"/>
       			   		 <h2>Bill Murray</h2>
         		         <p>"I found my soul coder!"</p>
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
		 	var newRoute = this.props.routing;
		 	if(newPasword !== confirmPass){
		 		console.log("Passwords Do Not Match!")
			 } else {
			 	console.log("I work");
			 	
			 	$.post("http://localhost:3000/users/",{user: user.attributes}, function(data){
			 		
			 		userCollection.add(user);
			 		console.log("error status: ",data.message);
			 		if(data.message !== "error2"){
			 			newRoute.navigate("profile/"+user.get("username"),{trigger: true});
			 		}
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
	
		if(currentUser.isValid()){
			var routes = this.props.routing;
			console.log("user id:", currentUser.get("username"), "user password:", currentUser.get("password"));
			$.post("http://localhost:3000/login/",{username: currentUser.get("username"), 
				password: currentUser.get("password")},function(data){
				routes.navigate("profile/"+currentUser.get("username"),{trigger: true});
			},"json");
			
		} else {
			console.log(currentUser.validationError);
		}
	}
});
