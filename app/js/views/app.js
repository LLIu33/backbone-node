define([
        'text!templates/app.html'
    ],

    function(template) {
        var AppView = Backbone.View.extend({
            id: 'main',
            tagName: 'div',
            className: 'container-fluid',
            el: 'body',
            template: _.template(template),

            events: {
            },

            initialize: function(app) {
                this.app = app;
            },

            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });

        return AppView;
    });