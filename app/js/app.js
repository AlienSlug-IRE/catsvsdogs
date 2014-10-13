/*
    
    Class:  Cats VS Dogs - App
    Author: Joseph O Donoghue

    Instructions: 
    -----------------------------------------------------------
   	This is the APP Controller.

	The Router is built using the Config.routeArr allowing for instance support
	of different/more q= pararmeters.

	This is used to dynamically generate the router listener and nav.on 


*/


(function() {

    define([
        'backbone',
        'jquery',
        'underscore',
        'config',
        'routes',
        'views/nav',
        'views/gifs',
        'views/gif'
    ], function(Backbone, $, _, Config, Routes, NavView, GifsView, GifView) {

        'use strict';

        var App = function() {

            /*
                Router Controller
                -------------------------------------------------
            */

            var router = new Routes(),
                gifType,
                regions = {
                    nav: $('nav'),
                    main: $('#gifs'),
                    open: $('#gif')
                },
                views = {
                    nav: null,
                    main: null,
                    open: null
                }

            router.on('route:defaults', function(route) {
                if (_.isNull(route)) return;
                regions.nav.removeClass('reveal');
                gifType = route.toLowerCase();
                _.each(Config.routeArr, function(index) {
                    if (gifType === index.link) {
                        return initGifsView();
                    }
                });

            });

            /*
                All GIFs View Controllers
                -------------------------------------------------
            */

            var initGifsView = function() {

                resetGifsView();
                views.main = new GifsView();
                views.main.on('init:gif', function(model) {
                    return initGifView(model);
                });
                views.main.on('ready', function() {
                    regions.nav.addClass('reveal');
                    return;
                });
                views.main.collection.url = Config.url + 'q=' + gifType + '&api_key=' + Config.apiKey;
                console
                regions.main.html(views.main.render().el);
            };

            var resetGifsView = function() {
                /*
                    Incase the views haven't been 
                    opened in the first place the 
                    closes are wrapped in the try catch
                */
                $('nav ul li').removeClass('active');
                $('[name="' + gifType + '"]').addClass('active');
                try {
                    views.main.close();
                } catch (err) {};
                try {
                    resetGifView();
                } catch (err) {};

            };

            /*
                Individual GIF View Controllers
                -------------------------------------------------
            */

            var initGifView = function(model) {
                $('.active-gif').addClass('reveal');
                views.open = new GifView();
                views.open.model = model;
                views.open.on('init:back', function() {
                    return resetGifView();
                });
                regions.open.html(views.open.render().el);
            };

            var resetGifView = function() {
                $('.active-gif').removeClass('reveal');
                setTimeout(function() {
                    try {
                        views.open.close();
                    } catch (err) {};
                }, 300);
                return;
            };

            /*
                NAV View Controllers
                -------------------------------------------------
            */

            views.nav = new NavView();
            _.each(Config.routeArr, function(route) {
                views.nav.on('init:' + route.link, function() {
                    router.navigate(route.link, {
                        trigger: true
                    });
                });
            });
            regions.nav.html(views.nav.render().el);
            regions.nav.addClass('reveal');
            Backbone.history.start();

            this.router = router;
            this.view = gifType;

        };

        return App;
    });

})();