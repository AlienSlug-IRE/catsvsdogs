/*
    
    Class:  Cats VS Dogs - Selected GIF View
    Author: Joseph O Donoghue

    Instructions: 
    -----------------------------------------------------------
    Simple single purpose itemView, just displays the GIF using the 
    model data obtained in the View/Gifs interaction.

*/

(function() {

    define([
        'jquery',
        'underscore',
        'backbone',
        'tpl!templates/gif.tpl',
        'models/gifs',
        'Config'
    ], function($, _, Backbone, GifTemplate, Data, Config) {

        var GifView = Backbone.View.extend({
            template: GifTemplate,
            events: {
                'click [name=back]': 'initBack'
            },
            initBack: function(evt) {
                return this.trigger('init:back');
            },
            initialize: function() {
                this.model = new Data.Model();
            },
            close: function() {
                this.unbind();
                this.remove();
                return;
            },
            render: function() {
                this.$el.html(this.template({
                    model: this.model.toJSON()
                }));
                return this;
            }
        });
        return GifView;

    });

})();