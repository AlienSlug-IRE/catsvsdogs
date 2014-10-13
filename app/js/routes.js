/*
    
    Class:  Cats VS Dogs - Router
    Author: Joseph O Donoghue

*/

(function() {

    define([
        'backbone'
    ], function(Backbone) {

        'use strict';

        var Routes = Backbone.Router.extend({
            routes: {
                ':type': 'defaults'
            }
        });
        return Routes;

    });

})();