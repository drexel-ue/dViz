!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t)=>Array.from(e).reduce((e,n)=>t[n]<t[e]?n:e);var o=(e,t)=>{let n={};for(let t in e)n[t]=1/0;n[t]=0;let o=new Set(Object.keys(e));const s=o.size;let u={},d=0;for(;o.size>0;){let t=r(o,n);const s=document.getElementById(t);d++,setTimeout(()=>{s.style.background="darkblue"},5*d),o.delete(t);for(let r in e[t]){if(o.has(r)){const e=document.getElementById(r);d++,setTimeout(()=>{e.style.background="yellow"},5*d)}let s=e[t][r],a=n[t]+s;n[r]>a&&(n[r]=a,u[r]=t)}}return{distance:n,previous:u,size:s}};document.addEventListener("DOMContentLoaded",e=>{const t=document.getElementsByClassName("root")[0],n=window.innerHeight;let r=!1;const s={},u=[[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];[...Array(10).keys()].forEach(e=>{const o=document.createElement("div");o.className="rowDiv",o.style.height=`${n/10}%`,[...Array(10).keys()].forEach(t=>{const d=document.createElement("div"),a=[e,t];(e=>{s[e]={},u.forEach(t=>{const n=e[0]+t[0],r=e[1]+t[1];if(n>=0&&n<=9&&r>=0&&r<=9){const t=[n,r];s[e][t]=1}})})(a),d.setAttribute("data-pos",a),d.className="node",d.id=a,d.style.width=`${n/10}%`,0===a[0]&&0===a[1]?d.style.background="black":9===a[0]&&9===a[1]&&(d.style.background="darkgreen"),o.append(d),d.addEventListener("mousedown",e=>{d.style.backgroundColor="darkorange",r=!0}),d.addEventListener("mouseover",e=>{r&&(d.style.backgroundColor="darkorange")}),d.addEventListener("mouseup",e=>{r=!1})}),t.append(o)});let{distance:d,previous:a,size:c}=o(s,[0,0]);((e,t,n)=>{let r=400,o="";for(;r>2;){r=d[`${n[0]},${n[1]}`],o=e[`${n[0]},${n[1]}`],n=e[`${n[0]},${n[1]}`].split(",");const t=document.getElementById(o);setTimeout(()=>{t.style.background="pink"},25*--c)}})(a,0,[9,9])})}]);