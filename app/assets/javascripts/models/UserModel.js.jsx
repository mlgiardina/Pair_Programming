var UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		username: null, 
		password_digest: null, 
		picture: null, 
		email: null, 
		bio: null
	},
	urlRoot:
	idAttribute: "id"
});