!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}({12:function(t,e){importScripts("/webdnn/sw-toolbox.js"),toolbox.precache(["/","https://mil-tokyo.github.io/webdnn-data/models/resnet50/weight_webassembly.bin","https://mil-tokyo.github.io/webdnn-data/models/neural_style_transfer/weight_webassembly.bin"]),toolbox.router.get("/(.*).bin",toolbox.cacheFirst)}});