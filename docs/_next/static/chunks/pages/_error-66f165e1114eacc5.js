(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{14977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(49830)}])},49830:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=p(n(39976)),s=p(n(25821));function p(e){return e&&e.__esModule?e:{default:e}}var d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,e);var t,n,i,l=c(u);function u(){return r(this,u),l.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return f.default.createElement("div",{style:g.error},f.default.createElement(s.default,null,f.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),f.default.createElement("div",null,f.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?f.default.createElement("h1",{style:g.h1},e):null,f.default.createElement("div",{style:g.desc},f.default.createElement("h2",{style:g.h2},this.props.title||e?t:f.default.createElement(f.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}])&&o(t.prototype,n),i&&o(t,i),u}(f.default.Component);y.displayName="ErrorPage",y.getInitialProps=h,y.origGetInitialProps=h,t.default=y;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}}},function(e){e.O(0,[774,888,179],(function(){return t=14977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);