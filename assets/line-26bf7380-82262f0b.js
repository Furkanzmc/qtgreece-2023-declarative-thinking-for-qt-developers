import{a as h}from"./array-b7dcf730-9f3ba611.js";import{w as v,c as o}from"./path-39bad7e2-53f90ab3.js";import{aI as d}from"./index-83802cef.js";function w(t){return t[0]}function b(t){return t[1]}function L(t,u){var s=o(!0),f=null,l=d,r=null,m=v(e);t=typeof t=="function"?t:t===void 0?w:o(t),u=typeof u=="function"?u:u===void 0?b:o(u);function e(n){var i,g=(n=h(n)).length,a,c=!1,p;for(f==null&&(r=l(p=m())),i=0;i<=g;++i)!(i<g&&s(a=n[i],i,n))===c&&((c=!c)?r.lineStart():r.lineEnd()),c&&r.point(+t(a,i,n),+u(a,i,n));if(p)return r=null,p+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:o(+n),e):t},e.y=function(n){return arguments.length?(u=typeof n=="function"?n:o(+n),e):u},e.defined=function(n){return arguments.length?(s=typeof n=="function"?n:o(!!n),e):s},e.curve=function(n){return arguments.length?(l=n,f!=null&&(r=l(f)),e):l},e.context=function(n){return arguments.length?(n==null?f=r=null:r=l(f=n),e):f},e}export{L as l};
