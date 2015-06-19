var Login = React.createClass({
	render: function () {
		return (
            <div class="header-sign-in">
                <form>
                    <label>
                        Username
                        <input type="text" name="username">
                    </label>
    
             		<label>
      			        Password
      					<input type="password" name="password">
    				</label>
   
    				<input class="btn" type="submit" name="submit" value="Sign In">
				</form>
            </div>

			<div class="sign-up">
				<form>
			        <fieldset class="sign-up-info">
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
  
                    <fieldset class="sign-up-action">
    			        <input class="btn" type="submit" name="submit" value="Sign Up">
                    </fieldset>
				</form>
            </div
      );
	}
});
