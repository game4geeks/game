require.config({
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'socket.io': 'vendor/socket.io',
        'kinetic': 'vendor/kinetic',
        'text': 'vendor/requirejs-text/text',
        'json': 'vendor/requirejs-plugins/src/json',
        'slimscroll': 'vendor/jquery.slimscroll',
        'EventEmitter': 'vendor/eventEmitter/EventEmitter'
    },
    shim: {
        'slimscroll': ["jquery"]
    }
});
require([
    'controllers/ui',
    'controllers/login',
    'controllers/chat',
    'controllers/online',
    'controllers/stage'
]);
