/*global jQuery, WebSocket */

(function($) {
    'use strict';

    var ws, wss,
        wsClose = $('#ws-close'), wsOpen = $('#ws-open'), wsInput = $('#ws-input'), wsSend = $('#ws-send'), wsLog = $('#ws-log'),
        wssClose = $('#wss-close'), wssOpen = $('#wss-open'), wssInput = $('#wss-input'), wssSend = $('#wss-send'), wssLog = $('#wss-log');

    var openWebSocket = function(wsAddr, openButton, closeButton, sendButton, inputField, logArea) {
        var webSocket = new WebSocket(wsAddr);

        webSocket.onopen = function(evt) {
            openButton.attr('disabled', true);
            closeButton.attr('disabled', false);

            closeButton.click(function(evt) {
                webSocket.close();
            });

            sendButton.click(function(evt) {
                var message = inputField.val();
                webSocket.send(message);
            });
        };

        webSocket.onclose = function(evt) {
            closeButton.attr('disabled', true);
            openButton.attr('disabled', false);
        };

        webSocket.onmessage = function(evt) {
            var current = logArea.val();
            logArea.val(current + evt.data + '\n');
        };

        webSocket.onerror = function(evt) {
            var current = logArea.val();
            logArea.val(current + evt + '\n');
        };


        return webSocket;
    };

    wsClose.attr('disabled', true);
    wssClose.attr('disabled', true);

    wsOpen.click(function(evt) {
        ws = openWebSocket('ws://' + window.location.hostname + '/echoService', wsOpen, wsClose, wsSend, wsInput, wsLog);
    });

    wssOpen.click(function(evt) {
        wss = openWebSocket('wss://' + window.location.hostname + '/echoService', wssOpen, wssClose, wssSend, wssInput, wssLog);
    });
}(jQuery));
