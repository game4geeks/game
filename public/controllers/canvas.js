define([
    'kinetic',
    'controllers/map.js',
    'controllers/player.js'
], function (Kinetic, map, player) {
    var container = document.querySelector('#game-area');
    var stage = new Kinetic.Stage({
        container: 'game-area',
        width: container.clientWidth,
        height: container.clientHeight,
        draggable: true
    });

    stage.add(map);
    stage.add(player);

    window.addEventListener('resize', function () {
        stage.setWidth(container.clientWidth);
        stage.setHeight(container.clientHeight);
        stage.draw();
    });
});