!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="js/",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();for(var o=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hourHand=document.querySelector('[data-tz="'+t+'"] .hour.hand'),this.minuteHand=document.querySelector('[data-tz="'+t+'"] .minute.hand'),this.secondHand=document.querySelector('[data-tz="'+t+'"] .second.hand'),this.tz=t,this.timer(),setInterval((function(){return n.timer()}),1e3),this.tz}return r(e,[{key:"timer",value:function(){this.sethandRotation("hour"),this.sethandRotation("minute"),this.sethandRotation("second")}},{key:"sethandRotation",value:function(e){var t,n=void 0,r=void 0,o=void 0,i=void 0,a=void 0;switch(n=new Date((new Date).toLocaleString("en-US",{timeZone:this.tz})),e){case"hour":r=n.getHours(),o=n.getMinutes(),e=this.hourHand,a=this.numberToPercentage(r+o/60,12);break;case"minute":o=n.getMinutes(),e=this.minuteHand,a=this.numberToPercentage(o,60);break;case"second":i=n.getSeconds(),e=this.secondHand,a=this.numberToPercentage(i,60)}t=this.percentageToDegree(a),e.style.transform="rotate("+t+"deg) translate(-50%, -50%)"}},{key:"numberToPercentage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return e/t*100}},{key:"percentageToDegree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 360*e/100}}]),e}(),i=document.querySelectorAll(".clock"),a=0;a<i.length;++a)new o(i[a].dataset.tz)}]);
//# sourceMappingURL=app.js.map