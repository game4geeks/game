define([
    'jquery',
    'services/chat',
    'text!templates/chat-msg.html',
    'slimscroll'
], function ($, chat, chatTpl) {
    var $chatBlock = $('.chat'),
        $textarea = $('.chat textarea'),
        $listMessage = $chatBlock.find('ul'),
        width = $chatBlock.width();

    function sendMessage(e) {
        e.preventDefault();
        var text = $textarea.val().trim();
        if (text) {
            chat.send(text);
            $textarea.val('');
            $chatBlock.find('.error').fadeOut();
        } else {
            $chatBlock.find('.error').fadeIn();
        }
    }

    var chatCtrl = {
        visible: false,
        show: function () {
            $chatBlock.css({'right': '0px'});
            this.visible = true;
        },
        hide: function () {
            $chatBlock.css({'right': -width + 'px'});
            this.visible = false;
        }
    };

    chat.onreceive = function (msg) {
        var $item = $(chatTpl),
            time = new Date().toTimeString().replace(/\s.*$/, '');
        $item.find('.user').text(msg.user);
        if (msg.user === 'me') {
            $item.find('.user').addClass('me');
        }
        $item.find('.state').text(msg.state);
        $item.find('.date').text(time);
        $item.find('p').text(msg.message);
        $listMessage.append($item);
        // scroll to the new message
        $listMessage.scrollTop($listMessage.prop('scrollHeight'));
    };

    // send message on SEND or Enter button
    $chatBlock.find('input[type=submit]').on('click', sendMessage);
    $textarea.on('keydown', function (e) {
        if (e.which == 13 && !e.shiftKey) {
            sendMessage(e);
            return false;
        }
    });

    // Close button
    $chatBlock.find('.close').on('click', function () {
        chatCtrl.hide();
    });

    // scrollbar
    $('.chat ul').slimScroll({
        alwaysVisible: false,
        railVisible: true
    });

    return chatCtrl;
});
