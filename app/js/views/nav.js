/*
    
    Class:  Cats VS Dogs - Navigation View
    Author: Joseph O Donoghue

    Instructions: 
    -----------------------------------------------------------
    In order to make the navigation dynamic, e.g. add another 
    GIF view added to the menu you only need add the parameter into the routeArr
    specified in the Config object.

*/

(function() {

    define([
        'jquery',
        'underscore',
        'backbone',
        'tpl!templates/nav.tpl',
        'models/nav',
        'config'
    ], function($, _, Backbone, template, Data, Config) {

        var NavView = Backbone.View.extend({
            template: template,
            events: {
                'click [name]': 'init'
            },
            init: function(evt) {
                /*
                    The attribute on the clicked nav is created via the App.js 
                    loop so that the name is attached when rendered, this is used
                    to be extracted and then the dynamic trigger initiated.
                */
                var ele = $(evt.currentTarget);
                var link = ele.attr('name');
                return this.trigger('init:' + link);
            },
            initialize: function() {
                this.collection = new Data.Collection();
                this.model = new Data.Model();
                this.model.set('name', Config.author.name);
                this.model.set('email', Config.author.email);
                /*
                    Using the Config.routeArr the composite view 
                    is generated allowing for easier updates of the navigation without 
                    redevelopment.
                */
                this.collection.add(Config.routeArr);
            },
            close: function() {
                this.unbind();
                this.remove();
                return;
            },
            render: function() {
                this.$el.html(this.template({
                    routes: this.collection.toJSON(),
                    author: this.model.toJSON()
                }));
                return this;
            }
        });

        return NavView;

    });

})();