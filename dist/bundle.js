!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t)=>Array.from(e).reduce((e,n)=>t[n]<t[e]?n:e);var r=(e,t)=>{let n={};for(let t in e)n[t]=1/0;n[t]=0;let r=new Set(Object.keys(e));const s=r.size;let a={},i=0;for(;r.size>0;){let s=o(r,n);if(i++,s!==t.join(",")&&s!==stop.join(",")){const e=document.getElementById(s);setTimeout(()=>{e.style.background="darkblue"},5*i)}r.delete(s);for(let t in e[s]){if(r.has(t)&&t!==stop.join(",")){const e=document.getElementById(t);i++,setTimeout(()=>{e.style.background="yellow"},5*i)}let o=e[s][t],l=n[s]+o;n[t]>l&&(n[t]=l,a[t]=s)}}return{distance:n,previous:a,size:s}},s=()=>{const e=document.getElementsByClassName("root")[0],t=window.innerHeight;let n=!1;const o=[[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1]];for(;e.firstChild;)e.removeChild(e.firstChild);[...Array(square).keys()].forEach(r=>{const s=document.createElement("div");s.className="rowDiv",s.style.height=`${t/square}%`,[...Array(square).keys()].forEach(e=>{const a=document.createElement("div"),i=[r,e];(e=>{graph[e]={},o.forEach(t=>{const n=e[0]+t[0],o=e[1]+t[1];if(n>=0&&n<=square-1&&o>=0&&o<=square-1){const t=[n,o];graph[e][t]=1}})})(i),a.setAttribute("data-pos",i),a.className="node",a.id=i,a.style.width=`${t/square}%`,s.append(a),a.addEventListener("click",e=>{if("start"===selection){if(source){document.getElementById(source.join(",")).style.background="transparent"}a.style.background="black",source=i}if("stop"===selection){if(stop){document.getElementById(stop.join(",")).style.background="transparent"}a.style.background="green",stop=i}}),a.addEventListener("mousedown",e=>{n=!0,"wall"===selection&&(a.style.backgroundColor="darkorange")}),a.addEventListener("mouseover",e=>{n&&"wall"===selection&&(a.style.backgroundColor="darkorange")}),a.addEventListener("mouseup",e=>{n=!1})}),e.append(s)})};document.addEventListener("DOMContentLoaded",()=>{const e=window.innerHeight,t=window.innerWidth;document.getElementById("right_menu").setAttribute("style",`width:${(t-e)/2-10}px; padding: 0 10px`);const n=document.getElementsByClassName("checkbox"),o=document.getElementsByClassName("commence")[0],a=n[0],i=n[1];a.addEventListener("click",()=>{a.style.background="black",a.style.color="white",i.style.color="black",i.style.background="transparent",selection="start"}),i.addEventListener("click",()=>{i.style.background="darkgreen",i.style.color="white",a.style.color="black",a.style.background="transparent",selection="stop"});o.addEventListener("click",()=>{if(source&&stop){let{distance:e,previous:t,size:n}=r(graph,source);((e,t,n,o)=>{let r=1/0,s="";for(;r>2;){r=e[`${o[0]},${o[1]}`],s=n[`${o[0]},${o[1]}`],o=n[`${o[0]},${o[1]}`].split(","),t--;const a=document.getElementById(s);setTimeout(()=>{a.style.background="pink"},25*t)}})(e,n,t,stop)}});const l=document.getElementsByClassName("dimension_input")[0],d=document.getElementsByClassName("dimension_suffix")[0],c=document.getElementsByClassName("dimension_tooltip")[0];l.addEventListener("mouseenter",()=>{c.classList.remove("hide")}),l.addEventListener("mouseleave",()=>{c.classList.add("hide")}),l.addEventListener("input",e=>{square=Number.parseInt(e.currentTarget.value),d.innerHTML="x"+e.currentTarget.value,s()})}),document.addEventListener("DOMContentLoaded",e=>{s()})}]);