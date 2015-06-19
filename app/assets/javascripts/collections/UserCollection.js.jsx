var UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: "http://pair-programming-1.herokuapp.com/users"
});