var clicks = 0;
var loggedInUser;
var ProfilePage = React.createClass({
	componentWillMount: function(){
		$.get("http://localhost:3000/session/", function(data){
			console.log("coming from inital: ",data);
			  loggedInUser = data.username;
			  userToUpdate = {
			  				username: data.username,
			  				name: data.name,
							email: data.email,
							bio: data.bio,
							picture: data.picture};
			
		}, "json");
	},
	render: function(){
		console.log("user is still logged in ",loggedInUser);
		var questionare = this.props.questions.map(function(question){
			return (<div key={question}>{question}</div>);
		});
		var that = this;
		return (

			// profile page html-------------------------------
            
			<div className=" body-color col12">
			<header>
				<h1>Pair Programming</h1>
				  <button className="button-right" onClick={this.logOut}>Logout</button>
                <button onClick={this.showMessageComponent}>Send Message</button>
			</header>
          
            
			
        
           <div>
                <div className="col2 add delete "></div>

                <div className=" body-color profile-img col2">
                	<img src="http://fillmurray.com/200/200"/>
                	
                	<h2 className="delete-h2">Bill Murray</h2>
                	<p className="move">bio ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                	    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
                    </p>






                	
                	
                </div>

               

            <div className="col6 matches-section add ">
                <h2>Your Matches</h2>
                <div  className="matches col2 ">
                	<img src="http://fillmurray.com/150/150"/>
                	<h3>Bill Murray</h3>
                	 <p>Austin TX</p>
                    <p>Coder</p>
                </div>
                <div className=" matches  col2 ">
                    <img src="http://fillmurray.com/150/150"/>
                    <h3>Bill Murray</h3>
                    <p>Austin TX</p>
                    <p>Coder</p>

                </div>
                <div className=" matches col2 ">
                    <img src="http://fillmurray.com/150/150"/>
                    <h3>Bill Murray</h3>
                     <p>Austin TX</p>
                     <p>Coder</p>
                    

                </div>
            </div>
                <div className="col2 add delete"></div>
            </div>

            <div className="bio">
            <div className="col2"></div>
                 <div className="col3">
                 <h2 className="delete bringback">Bill Murray</h2>
                 <p className="delete text-fix bringback">five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                	    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>

                 

                </div>
                 <div className="col5">
                 <h2>Questions</h2>

                 



                 </div>
             <div className="col2"></div>
             
            </div>




             </div>


                

   


                	


                    

                	


					
			
			
		);
	},
	showLoggedInUser: function(){
		React.render(<BioForm user={userToUpdate}/>, containerEl);
	},
	logOut: function(){
		$.get("http://localhost:3000/logout/",function(data){
			console.log(data);
		});
		this.props.routing.navigate("login", {trigger: true});
	}, 
	showMessageComponent: function(){
		React.render(<SendMessage routing={this.props.routing} loggedInUser={loggedInUser} profileName={this.props.profileName} />, document.getElementById("send-message"));
	},
	displayMessageBox: function(event){
		event.preventDefault();
		
		if(clicks%2===0){
			var user = this.props.user;
			console.log(loggedInUser);
			$.get("http://localhost:3000/messages/inbox",{username: loggedInUser},function(data){
				console.log("all message: ",data);
				
				React.render(<MessageBox user={loggedInUser} receivedMessages={data} />, document.getElementById("target-messagebox"));
			},"json");
		} else {
			React.render(<div></div>, document.getElementById("target-messagebox"));
		}
		clicks++;
	}
});