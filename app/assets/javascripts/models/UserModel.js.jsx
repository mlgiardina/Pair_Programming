var UserModel = Backbone.Model.extend({
	defaults: {
		username: null, 
		password_confirmation: null, 
		password: null,
		picture: null, 
		email: null, 
		bio: null
	},
	validate: function(attr){
		if(!attr.username || !attr.password || !attr.email){
			return "*Must not leave fields blank!";
		} else {
			return false;
		} 
	},
	urlRoot: "http://localhost:3000/users/",
	idAttribute: "_id"
});