var UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
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
	urlRoot: "/users/",
	idAttribute: "id"
});