!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=p();if(j(e))return x(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function x(e){return f=void 0,m&&r?b(e):(r=o=void 0,u)}function T(){var e=p(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:x(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var O,j="feedback-form-state",h=JSON.parse(localStorage.getItem(j))||{},x={feetbackForm:document.querySelector(".feedback-form"),textArea:document.querySelector("textarea"),emailArea:document.querySelector("input")};x.feetbackForm.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(h))}),500)),x.feetbackForm.addEventListener("submit",(function(e){if(""===x.textArea.value||""===x.emailArea.value)return alert("Please fill in all the fields!");e.preventDefault(),console.log(JSON.parse(localStorage.getItem(j))),e.currentTarget.reset(),localStorage.removeItem(j),h={}})),(O=JSON.parse(localStorage.getItem(j)))&&(O.message&&(x.textArea.value=O.message),O.email&&(x.emailArea.value=O.email))}();
//# sourceMappingURL=03-feedback.2e284194.js.map