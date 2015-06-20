var BioForm = React.createClass({
	render: function(){
		return (<div>
					Name: <input type="text" />
					Email: <input type="text" />
					Bio: <textarea></textarea>
					<UploadPhoto/>
				</div>
		);
	}
});