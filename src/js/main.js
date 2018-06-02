import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('../sass/style.scss');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap');

var app = new Vue ({
   el: '#app',
   data: {
       findColor: '',
       colors:  [
           '#ffb3b3',
           '#ffbf00',
           '#00ffbf',
           '#0080ff',
           '#ff0080',
           '#ff80bf',
           '#b3e6ff',
       ],
   },
    methods:{
        colorGenerator: function() {
            const newColors = [];

            for(let i=0; i < this.colors.length; i++){
                newColors.push('#'+Math.floor(Math.random()*16777215).toString(16));
            }

            this.colors = newColors;
        }
    },
    computed: {
        search: function () {
            let inputText = new RegExp(this.findColor, "i");
            const matchedColors = this.colors.filter(el => el.match(inputText));

            console.log(matchedColors);

            if(matchedColors.length === 0) {
                matchedColors.push(this.findColor);
            }

            return matchedColors;
        }
    },
    watch: {
        findColor: function (value) {
            console.log("Changed: " + value);
        }
    }
});