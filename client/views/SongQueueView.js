// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

  },

  render: function() {
    console.log('RENDER');
    this.$el.children().detach();

    return this.$el.html('<div>My Queue</div>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

});
