var TodoView = Backbone.View.extend({
  tagname: 'li',

  // save the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})