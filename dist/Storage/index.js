"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function t(e,o){for(var s=0;s<o.length;s++){var t=o[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,o,s){return o&&t(e.prototype,o),s&&t(e,s),e}}();function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var CodeStorage=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"getSession",value:function(e){var t=this,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e||this.BASE_KEYNAME;return new Promise(function(e,o){var s=r?localStorage.getItem(n):sessionStorage.getItem(n);s?e(s):(t.errorMsg.msg="数据不存在",o(t.errorMsg))})}},{key:"setSession",value:function(e,o){var t=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=o,c=e||this.BASE_KEYNAME;return"object"===(void 0===o?"undefined":_typeof(o))&&(n=JSON.stringify(n)),new Promise(function(o,s){r?localStorage.setItem(c,n):sessionStorage.setItem(c,n),t.getSession(c,r).then(function(e){o(e)}).catch(function(e){t.errorMsg.msg="设置session失败",s(t.errorMsg)})})}},{key:"delSession",value:function(e){var s=this,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=e||this.BASE_KEYNAME;return new Promise(function(e,o){(t?localStorage.removeItem(r):sessionStorage.removeItem(r))?(s.successMsg.msg="删除成功",e(s.successMsg)):(s.errorMsg.msg="删除失败",o(s.errorMsg))})}},{key:"cleanSession",value:function(){var o=this,s=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return new Promise(function(e){(s?localStorage.clear():sessionStorage.clear())&&(o.successMsg.msg="清空完毕",e(o.successMsg))})}}]),e}();CodeStorage.BASE_KEYNAME="code_storage",CodeStorage.errorMsg={status:"error",msg:"no msg"},CodeStorage.successMsg={status:"success",msg:"success msg"},exports.default=CodeStorage;