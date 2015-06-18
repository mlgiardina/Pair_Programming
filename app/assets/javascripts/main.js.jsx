var App = Backbone.Router.extend({
    routes: {
        '': 'profile',
        'edit': 'edit'
    },
    profile: function() {
      React.render(<Profile/>, document.getElementById('container'));
    },
    edit: function() {
      React.render(<Edit/>, document.getElementById('container'));
    }
});

var app = new App();
Backbone.history.start();   
app.navigate('edit');
