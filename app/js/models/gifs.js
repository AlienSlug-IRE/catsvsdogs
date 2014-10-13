/*
    
    Class:  Cats VS Dogs - GIFs Model/Collection
    Author: Joseph O Donoghue

*/

(function() {

    define([
        'backbone',
    ], function(Backbone) {

        var Model = Backbone.Model.extend({
            defaults: {
                type: null,
                id: null,
                params: {}
            }
        });

        var Collection = Backbone.Collection.extend({
            model: Model,
            parse: function(res) {
                return this.add(res.data);
            }
        });
        return {
            Model: Model,
            Collection: Collection
        };

    });

})();