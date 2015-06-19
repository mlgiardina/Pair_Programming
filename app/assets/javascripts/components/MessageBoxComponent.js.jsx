var MessageBox = React.createClass({

	render: function(){
		var received = this.props.receivedMessages;
		console.log(received);
		var myObj = {};
		    for(var i = 0; i < received.length; i++){
		        for(var prop in received[i]){
		        	if(prop === "sender_name"){
		        		if(myObj.hasOwnProperty(prop)){
		        			continue;
		        		} else {
		        			myObj[received[i][prop]] = [];
		        		}
		        	}
		        }
		    }
		    for(var prop in myObj){
		        for(var i = 0; i < received.length; i++){
		            if(received[i]["sender_name"] === prop){
		                myObj[prop].push(received[i]["body"])
		            }
		        }
		    }

		    console.log(myObj);
		    for(var thing in myObj){
				var userMessages = myObj[thing].map(function(obj){
					console.log(obj);
					return (<div>{thing}:{obj}</div>);
				});
			}
		return (
			<div>
				{userMessages}
			</div>
		);
	}

});