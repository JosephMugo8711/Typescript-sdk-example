import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)({}).hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},e.apply(null,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var n,i=/*#__PURE__*/function(){function o(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apikey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return o.prototype.invoke=function(o,r){var n=""+this.baseUrl+o,i=e({},r,{headers:{"Content-Type":"application/json","api-key":this.apikey}});return t(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},o}(),p="posts",s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var r=e.prototype;return r.getPostById=function(t){return this.invoke("/posts/"+t)},r.getPosts=function(){return this.invoke("/"+p)},r.createPost=function(t){return this.invoke("/"+p,{method:"POST",body:JSON.stringify(t)})},e}(i),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return o(e,t),e}(i);n=c,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(n.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})});export{c as default};
