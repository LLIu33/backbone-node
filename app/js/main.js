'use strict';

requirejs.config({
    baseUrl: 'js',

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'app': {
            deps: [
                'underscore',
                'backbone'
            ]
        }
    }
});

require([
        'app'
    ],

    function(App) {
        window.bTask = new App();
    });