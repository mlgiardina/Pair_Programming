var UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		username: null, 
		password_digest: null, 
		picture: null, 
		email: null, 
		bio: null
	},
	validate: function(attr){
		if(!attr.username || !attr.password_digest || !attr.email){
			return "*Must not leave fields blank!";
		} else {
			return false;
		}
	},
	urlRoot: "http://pair-programming-1.herokuapp.com/users",
	idAttribute: "id"
});