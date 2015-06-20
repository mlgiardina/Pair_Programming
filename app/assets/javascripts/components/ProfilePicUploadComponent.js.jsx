var UploadPhoto = React.createClass({
	render: function(){
		return (<div><input type="text"/><button onCLick={this.uploadPhoto}>Upload</button></div>);
	},
	uploadPhoto: function(){
		$.get("http://localhost:3000/likes", function(data){
			console.log(data.url);
		})
	}
});