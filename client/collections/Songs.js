// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function(params) {
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function(data) {
        for (var i = 0; i < data.results.length; i++) {
          context.add(new context.model(data.results[i]));
        }
        // console.log('context', context);
        context.trigger('songAdd');
      },
      error: function(data) {
        console.error('Failed to load songs from server');
      }
    });

    /*
    this.fetch({
      success: function(collection, response) {
        // console.log("response", response);
        for (var i = 0; i < response.results.length; i++) {
          context.add(new context.model(response.results[i]));
        }
        // collection.add(response.results);
        console.log('collection in index', collection);
        context.trigger('loaded');
      },
      error: function() {
        console.log('Error');
      }
    }, this);*/

  }

});