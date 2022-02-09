// Our overall **AppView** is the top-level piece of UI.
var AppView = Backbone.View.extend({

  // Instead of generating a new element, bind the existing skeleton of the
  // App already present in the HTML.
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter'
  },

  // At initialization we bind to the relevant events on the 'Todos' collection, when items are added.
  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = $('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {

      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });

      this.$input.val('');
    }
  },

  addOne: function (todoModel) {
    var newView = new TodoView({model: todoModel});

    this.$list.append(newView.render().el);
  }
})