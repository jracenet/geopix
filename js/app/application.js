$(function(){
  var GeoPix = Backbone.View.extend({
    el: "#map",

    render: function() {
      L.map(this.$el);
    }
  });

  new GeoPix();
});
