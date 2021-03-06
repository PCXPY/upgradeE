(function () {
    'use strict';
}());
var ipcRenderer = require('electron').ipcRenderer;
var cdisplay = {
    cn: {
        input: '输入召唤师名称',
        submit: '提交'
    }
};
var main = new Vue({
    el: '#main',
    data: {
        test: '',
        display: cdisplay.cn
    },
    methods: {
        sendSummorid: function () {
            ipcRenderer.once('ana-near', function (event, arg) {
                console.log(arg);
            });
            ipcRenderer.send('make-summnor', this.test);
        },
        getGame: function () {
            ipcRenderer.once('ana-near', function (event, arg) {
                console.log(arg);
            });
            ipcRenderer.send('get-game');
        }
    }
});
ipcRenderer.on('send-error', function (event, arg) {
    console.log(arg);
});
