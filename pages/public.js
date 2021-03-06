(function () {
    'use strict';
}());
var storage = require('electron-json-storage');
var remote = require('electron').remote;
// remote.getGlobal('sharedObject').test = 'new value';
Vue.component('re-wave', {
    data: function () {
        return {
            buttonsinvue: rewave
        };
    },
    methods: {
        updatebutton: function () {
            this.buttonsinvue = rewave;
        }
    },
    template: '<div class="div_right_bottom"><span class="button-dropdown" data-buttons="dropdown"><button class="button button-rounded button-square" id="re-wave"><i class="fa fa-caret-down"></i></button><ul class="button-dropdown-list"><li><button class="button button-square" id="re-wave-setting"><i class="fa fa-cog"></i></button></li><li v-for="butt in buttonsinvue"><button class="button button-square" v-bind:id="butt.id" v-on:click="butt.fun"><i class="fa" v-bind:class="butt.icon"></i></button></li><li><button class="button button-square" id="re-wave-github"><i class="fa fa-github"></i></button></li></ul></span><button v-on:click="updatebutton" id="re-waveupdatebutton" style="display:none;"></button></div>'
});
Vue.component('re-credit', {
    template: '<div><p style="color:#565656"><i class="fa fa-code"></i> Review.md with <i class="fa fa-heart"></i> by WMXPY@<a href="http://mengw.io">mengw.io</a> 2016</p></div>'
});
var Prefsystem = {
    readPref: function () {
        storage.get('foobar', function (error, data) {
            if (error)
                throw error;
            console.log(data);
        });
    },
    writePref: function () {
        storage.set('foobar', { foo: 'bar' }, function (error) {
            if (error)
                throw error;
        });
    },
    getKeys: function () {
        storage.keys(function (error, keys) {
            if (error)
                throw error;
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                console.log('There is a key called: ' + key);
            }
        });
    },
    clearPref: function () {
        storage.clear(function (error) {
            if (error)
                throw error;
        });
    }
};
