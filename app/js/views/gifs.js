/*
    
    Class:  Cats VS Dogs - All Selected GIFs View
    Author: Joseph O Donoghue

    Instructions: 
    -----------------------------------------------------------
    This is the composite view of the selected GIF type. The important factors pulled
    from this is the init:git which once a single GIF is selected passes the chosen
    GIF model to the APP.JS to allow for another view to be populated 
    without the need to reload the data.

*/

(function() {

    define([
        'jquery',
        'underscore',
        'backbone',
        'tpl!templates/gifs.tpl',
        'tpl!templates/loading.tpl',
        'models/gifs',
        'Config'
    ], function($, _, Backbone, GifsTemplate, GifsLoadingTemplate, Data, Config) {

        var GifsView = Backbone.View.extend({
            events: {
                'click [name=more]': 'initMore',
                'click [name=gif]': 'initGif'
            },
            initGif: function(evt) {
                var id = $(evt.currentTarget).data('id');
                var gif = this.collection.get(id);
                this.trigger('init:gif', gif);
            },
            initMore: function(evt) {
                var params = this.model.get('params');
                params.offset = params.offset += params.limit;
                return this.loadCollection();
            },
            initialize: function() {
                this.collection = new Data.Collection();
                this.model = new Data.Model();
                this.model.set('params', _.clone(Config.params));
                this.isEmptyCollection();
                this.collection.on('collection:fetched', function() {
                    this.isEmptyCollection();
                }, this);

            },
            isEmptyCollection: function() {
                if (this.collection.length === 0) {
                    this.template = GifsLoadingTemplate;
                    this.$el.html(this.template());
                } else {
                    this.template = GifsTemplate;
                    this.$el.html(this.template({
                        gifs: this.collection.toJSON()
                    }));
                };
                this.trigger('ready');
            },
            close: function() {
                this.unbind();
                this.remove();
                return;
            },
            loadCollection: function() {
                this.collection.fetch({
                    data: this.model.get('params'),
                    remove: false,
                    success: function(collection, res, opts) {
                        return collection.trigger('collection:fetched');
                    }
                });
            },
            render: function() {
                this.loadCollection();
                return this;
            }
        });

        return GifsView;

    });

})();