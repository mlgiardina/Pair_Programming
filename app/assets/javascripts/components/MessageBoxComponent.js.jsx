var MessageBox = React.createClass({

	render: function(){
		var received = this.props.receivedMessages;
		console.log(received);
		var myObj = {};
		var propHolding = [];
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
				propHolding.push(thing);
			}
			var headers = propHolding.map(function(header){
				var body = myObj[header].map(function(message){

					return (<div><div>{message}</div></div>);
				});
				
				return (<div>{header}:{body}</div>);
			});
		return (
			<div>
				{headers}
			</div>
		);
	}

});