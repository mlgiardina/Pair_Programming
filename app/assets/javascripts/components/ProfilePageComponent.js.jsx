var ProfilePage = React.createClass({
	render: function(){
		var questionare = this.props.questions.map(function(question){
			return (<div key={question}>{question}</div>);
		});
		return (

			// profile page html--------------------------------
			<div>

			<div className="header-color col12">
			   <h1>Pair Programming</h1>


			   
				<button className="button-right" onClick={this.logOut}>Logout</button>
			
				
				

			
				
				<div>
					<div id="target-messagebox"></div>
				</div>
			</div>	

          
			<div className="col12 color">
                <div className="col2 delete add"></div>

                <div className="profile-img col3">
                        <img src="http://fillmurray.com/400/400"/>
                </div>

                <div className=" border profile-bio col5">
                    
               		<h2>Bio</h2>
               		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only </p>
               		</div>
            


              </div>

              <div className="col12 color">
                  <div className=" col2 add delete"></div>
                  <div className=" border matches-likes col4">
                      <h2>Matches</h2>

                  </div>
                  <div className=" border matches-likes col4">
                      <h2>Likes</h2>
                  </div>

             </div>

             <div className=" col12 color">

             <div className=" col2 add delete"></div>

               <div className="border col8 questions-section">
                   <h2>Questions</h2>


               </div>
                <div className="col2 add delete"></div>
                </div>

      
         


			




		
	
		

 



































			
			</div>
			//TODO build out nice look profile page
		);
	}, 
	logOut: function(){
		$.get("http://localhost:3000/logout/",function(data){
			console.log(data);
		});
		this.props.routing.navigate("login", {trigger: true});
	}, 
	showMessageComponent: function(){
		React.render(<SendMessage routing={this.props.routing} user={this.props.user} />, document.getElementById("send-message"));
	},
	displayMessageBox: function(event){
		event.preventDefault();
		var user = this.props.user;
		$.get("http://localhost:3000/messages/"+user,{username: user},function(data){
			console.log("all message: ",data);
			React.render(<MessageBox user={user} receivedMessages={data} />, document.getElementById("target-messagebox"));

		},"json");
	}
});