/*
    
    Class:  Cats VS Dogs - Nav Model/Collection
    Author: Joseph O Donoghue

*/

(function() {

    define([
        'backbone'
    ], function(Backbone) {

        var Model = Backbone.Model.extend({
            defaults: {
                author: null,
                email: null
            }
        });
        var Collection = Backbone.Collection.extend({
            model: Model
        });
        return {
            Model: Model,
            Collection: Collection
        };

    });

})();