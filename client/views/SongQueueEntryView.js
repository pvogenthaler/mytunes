// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="queueArtists"><%= artist %> </span> </td> \
    <td> <span class="queueSongs"> <%= title %> </span></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  }, 

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
