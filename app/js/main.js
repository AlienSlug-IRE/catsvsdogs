requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'libs/jquery',
        json2: 'libs/json2',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        fastclick: 'libs/fastclick',
        tpl: "libs/tpl"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                'jquery',
                'underscore'
            ],
            exports: 'Backbone'
        }
    },
    waitSeconds: 0
});

require([
    'app',
    'fastclick'
], function(App, FastClick) {
    window.CatsVsDogs = new App();
    FastClick.attach(document.body);
});