var Login = React.createClass({
	render: function () {
		return (
			<div>
	            <div className="header-sign-in">
	                <form>
	                    <label>
	                        Username
	                        <input type="text" name="username"/>
	                    </label>
	    
	             		<label>
	      			        Password
	      					<input type="password" name="password"/>
	    				</label>
	   
	    				<input className="btn" type="submit" name="submit" value="Sign In"/>
					</form>
	            </div>

				<div className="sign-up">
					<form>
				        <fieldset className="sign-up-info">
							  <label>
							      Email
							      <input type="email" name="email-address"/>
	                          </label>

	                          <label>
	                              Username
	                              <input type="text" name="username"/>    
	                          </label>

	                          <label>
	                              Password
								  <input type="password" name="password"/>
							  </label>

							  <label>
	      					      Confirm Password
	      						  <input type="password" name="password"/>
	    					  </label>
	  					</fieldset>
	  
	                    <fieldset className="sign-up-action">
	    			        <input className="btn" type="submit" name="submit" value="Sign Up"/>
	                    </fieldset>
					</form>
	            </div>
            </div>
      );
	}
});
