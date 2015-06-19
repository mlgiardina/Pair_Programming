var UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: "http://localhost:3000/users/"
});