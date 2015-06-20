var UploadPhoto = React.createClass({
	render: function(){
		return (<div><input type="text"/><button onClick={this.uploadPhoto}>Upload</button>
				<img ref="anImage" src="#"/></div>);
	},
	uploadPhoto: function(event){
		event.preventDefault();
		var image = this.refs.anImage;
		$.get("http://localhost:3000/likes", function(data){
			console.log(image.getDOMNode().src = data.url);
			console.log(data.url);
		})
	}
});