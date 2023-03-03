"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[182],{5182:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r=t(2791),u=t(9434),i=t(965),o=t(6673),a="ContactForm_form__dhl+T",c=t(184);var l=function(n){var e=n.onSubmit,t=(0,r.useRef)(),l=(0,r.useRef)(),s=(0,u.v9)(i.mW);return(0,c.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r={name:t.current.value,number:l.current.value};e(r),n.target.reset()},className:a,children:[(0,c.jsx)("h2",{className:"form-title",children:"Add contact"}),(0,c.jsxs)("label",{className:"input-group",children:[(0,c.jsx)("span",{children:"Name: "}),(0,c.jsx)("input",{type:"text",name:"name",placeholder:"Tetiana",ref:t,required:!0})]}),(0,c.jsxs)("label",{className:"input-group",children:[(0,c.jsx)("span",{children:"Number: "}),(0,c.jsx)("input",{type:"text",name:"phone",placeholder:"+12-345-67-89",ref:l,required:!0})]}),(0,c.jsx)("button",{className:"form-btn",disabled:"pending"===s,type:"submit",children:"Add contact"}),"pending"===s&&(0,c.jsx)(o.a,{})]})},s=t(8683),f=t(7689);var p=function(n,e){return function(t){return(0,u.v9)(i.Qb)?(0,c.jsx)(n,(0,s.Z)({},t)):(0,c.jsx)(f.Fg,{to:e})}},v=t(1538),d="NOT_FOUND";var m=function(n,e){return n===e};function h(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?m:r,i=t.maxSize,o=void 0===i?1:i,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),l=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:d},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return d}return{get:r,put:function(e,u){r(e)===d&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function s(){var e=l.get(arguments);if(e===d){if(e=n.apply(null,arguments),a){var t=l.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function y(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,o=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,s=l.memoizeOptions,f=void 0===s?t:s,p=Array.isArray(f)?f:[f],v=x(r),d=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=v.length,t=0;t<e;t++)n.push(v[t].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:d,dependencies:v,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return u}var j=y(h),b=function(n){return n.contacts.contacts},g=function(n){return n.contacts.status},_=function(n){return n.contacts.error},N=function(n){return n.contacts.filter},k=j([b,N],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),C={text:"Contacts_text__kop-x",btn:"Contacts_btn__RQTAr",list:"Contacts_list__OonZI"},w="Filter_input__N7T3z",A="Filter_text__uqQRu";function F(){var n=(0,u.v9)(N),e=(0,u.I0)();return(0,c.jsxs)("div",{style:{margin:"20px auto",width:"500px"},children:[(0,c.jsx)("p",{className:A,children:"Find contacts by name"}),(0,c.jsx)("input",{className:w,type:"text",name:"name",value:n,onChange:function(n){var t=n.target.value;e((0,v.Tv)(t))},autoComplete:"off"})]})}var E=p((function(){var n=(0,u.I0)(),e=(0,u.v9)(i.Qb),t=(0,u.v9)(b),a=(0,u.v9)(g),s=(0,u.v9)(_),f=(0,u.v9)(k);return(0,r.useEffect)((function(){e&&n((0,v.Y2)())}),[e,n]),(0,c.jsxs)("div",{children:[(0,c.jsx)(l,{onSubmit:function(e){n((0,v.md)(e))}}),"pending"===a&&(0,c.jsx)(o.a,{}),null!==s&&(0,c.jsxs)("p",{className:C.text,children:["Sorry, an error occurred... ",s]}),(null===t||void 0===t?void 0:t.length)>1&&(0,c.jsx)(F,{}),(null===f||void 0===f?void 0:f.length)>0&&(0,c.jsx)("ul",{className:C.list,children:null===f||void 0===f?void 0:f.map((function(e){return(0,c.jsxs)("li",{className:C.contact,children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Name: "}),e.name]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Number: "}),e.number]}),(0,c.jsx)("button",{onClick:function(){return t=e.id,void n((0,v.us)(t));var t},className:C.btn,children:"Delete"})]},e.id)}))})]})}),"/sign-in")}}]);
//# sourceMappingURL=182.d9b63316.chunk.js.map