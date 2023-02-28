import{g as G,d as K,h as Q,c as U,b,a as w,w as S,n as P,u as T,i as Z,j as L,o as V,f as q,T as ee,k as ne,l as te,p as ae,e as oe,_ as re}from"./index-efaec6c9.js";var I={},ie={get exports(){return I},set exports(n){I=n}},O={},se={get exports(){return O},set exports(n){O=n}},_={},p={},W={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=1,a=function(){return"".concat(t++)};n.default=a})(W);var k={},F={},j={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:60,s=null;return function(){for(var h=this,v=arguments.length,l=new Array(v),r=0;r<v;r++)l[r]=arguments[r];clearTimeout(s),s=setTimeout(function(){i.apply(h,l)},u)}};n.default=t})(j);var f={};Object.defineProperty(f,"__esModule",{value:!0});f.SensorTabIndex=f.SensorClassName=f.SensorStyle=f.SizeSensorId=void 0;var ue="size-sensor-id";f.SizeSensorId=ue;var le="display:block;position:absolute;top:0;left:0;height:100%;width:auto;overflow:hidden;pointer-events:none;z-index:-1;opacity:0";f.SensorStyle=le;var de="size-sensor-object";f.SensorClassName=de;var ce="-1";f.SensorTabIndex=ce;Object.defineProperty(F,"__esModule",{value:!0});F.createSensor=void 0;var ve=fe(j),R=f;function fe(n){return n&&n.__esModule?n:{default:n}}var me=function(t){var a=void 0,i=[],u=function(){getComputedStyle(t).position==="static"&&(t.style.position="relative");var e=document.createElement("object");return e.onload=function(){e.contentDocument.defaultView.addEventListener("resize",s),s()},e.setAttribute("style",R.SensorStyle),e.setAttribute("class",R.SensorClassName),e.setAttribute("tabindex",R.SensorTabIndex),e.type="text/html",t.appendChild(e),e.data="about:blank",e},s=(0,ve.default)(function(){i.forEach(function(r){r(t)})}),h=function(e){a||(a=u()),i.indexOf(e)===-1&&i.push(e)},v=function(){a&&a.parentNode&&(a.contentDocument&&a.contentDocument.defaultView.removeEventListener("resize",s),a.parentNode.removeChild(a),a=void 0,i=[])},l=function(e){var o=i.indexOf(e);o!==-1&&i.splice(o,1),i.length===0&&a&&v()};return{element:t,bind:h,destroy:v,unbind:l}};F.createSensor=me;var M={};Object.defineProperty(M,"__esModule",{value:!0});M.createSensor=void 0;var he=_e(j);function _e(n){return n&&n.__esModule?n:{default:n}}var pe=function(t){var a=void 0,i=[],u=(0,he.default)(function(){i.forEach(function(r){r(t)})}),s=function(){var e=new ResizeObserver(u);return e.observe(t),u(),e},h=function(e){a||(a=s()),i.indexOf(e)===-1&&i.push(e)},v=function(){a.disconnect(),i=[],a=void 0},l=function(e){var o=i.indexOf(e);o!==-1&&i.splice(o,1),i.length===0&&a&&v()};return{element:t,bind:h,destroy:v,unbind:l}};M.createSensor=pe;Object.defineProperty(k,"__esModule",{value:!0});k.createSensor=void 0;var ye=F,we=M,Se=typeof ResizeObserver<"u"?we.createSensor:ye.createSensor;k.createSensor=Se;Object.defineProperty(p,"__esModule",{value:!0});p.removeSensor=p.getSensor=void 0;var be=ge(W),xe=k,E=f;function ge(n){return n&&n.__esModule?n:{default:n}}var x={},Ce=function(t){var a=t.getAttribute(E.SizeSensorId);if(a&&x[a])return x[a];var i=(0,be.default)();t.setAttribute(E.SizeSensorId,i);var u=(0,xe.createSensor)(t);return x[i]=u,u};p.getSensor=Ce;var ze=function(t){var a=t.element.getAttribute(E.SizeSensorId);t.element.removeAttribute(E.SizeSensorId),t.destroy(),a&&x[a]&&delete x[a]};p.removeSensor=ze;Object.defineProperty(_,"__esModule",{value:!0});_.ver=_.clear=_.bind=void 0;var D=p,Ae=function(t,a){var i=(0,D.getSensor)(t);return i.bind(a),function(){i.unbind(a)}};_.bind=Ae;var Ie=function(t){var a=(0,D.getSensor)(t);(0,D.removeSensor)(a)};_.clear=Ie;var Oe="0.2.7";_.ver=Oe;var y={};Object.defineProperty(y,"__esModule",{value:!0});y.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(n){return window.setTimeout(n,1e3/60)};y.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||window.clearTimeout;y.range=function(t){return new Array(t).fill(0).map(function(a,i){return i})};y.canvasStyle=function(t){return"display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:"+t.zIndex+";opacity:"+t.opacity};(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(l){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(l[o]=e[o])}return l},i=function(){function l(r,e){for(var o=0;o<e.length;o++){var m=e[o];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(r,m.key,m)}}return function(r,e,o){return e&&l(r.prototype,e),o&&l(r,o),r}}(),u=_,s=y;function h(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}var v=function(){function l(r,e){var o=this;h(this,l),this.randomPoints=function(){return(0,s.range)(o.c.count).map(function(){return{x:Math.random()*o.canvas.width,y:Math.random()*o.canvas.height,xa:2*Math.random()-1,ya:2*Math.random()-1,max:6e3}})},this.el=r,this.c=a({zIndex:-1,opacity:.5,color:"0,0,0",pointColor:"0,0,0",count:99},e),this.canvas=this.newCanvas(),this.context=this.canvas.getContext("2d"),this.points=this.randomPoints(),this.current={x:null,y:null,max:2e4},this.all=this.points.concat([this.current]),this.bindEvent(),this.requestFrame(this.drawCanvas)}return i(l,[{key:"bindEvent",value:function(){var e=this;(0,u.bind)(this.el,function(){e.canvas.width=e.el.clientWidth,e.canvas.height=e.el.clientHeight}),this.onmousemove=window.onmousemove,window.onmousemove=function(o){e.current.x=o.clientX-e.el.offsetLeft+document.scrollingElement.scrollLeft,e.current.y=o.clientY-e.el.offsetTop+document.scrollingElement.scrollTop,e.onmousemove&&e.onmousemove(o)},this.onmouseout=window.onmouseout,window.onmouseout=function(){e.current.x=null,e.current.y=null,e.onmouseout&&e.onmouseout()}}},{key:"newCanvas",value:function(){getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative");var e=document.createElement("canvas");return e.style.cssText=(0,s.canvasStyle)(this.c),e.width=this.el.clientWidth,e.height=this.el.clientHeight,this.el.appendChild(e),e}},{key:"requestFrame",value:function(e){var o=this;this.tid=(0,s.requestAnimationFrame)(function(){return e.call(o)})}},{key:"drawCanvas",value:function(){var e=this,o=this.context,m=this.canvas.width,B=this.canvas.height,Y=this.current,J=this.points,$=this.all;o.clearRect(0,0,m,B);var c=void 0,g=void 0,N=void 0,C=void 0,z=void 0,A=void 0;J.forEach(function(d,X){for(d.x+=d.xa,d.y+=d.ya,d.xa*=d.x>m||d.x<0?-1:1,d.ya*=d.y>B||d.y<0?-1:1,o.fillStyle="rgba("+e.c.pointColor+")",o.fillRect(d.x-.5,d.y-.5,1,1),g=X+1;g<$.length;g++)c=$[g],c.x!==null&&c.y!==null&&(C=d.x-c.x,z=d.y-c.y,A=C*C+z*z,A<c.max&&(c===Y&&A>=c.max/2&&(d.x-=.03*C,d.y-=.03*z),N=(c.max-A)/c.max,o.beginPath(),o.lineWidth=N/2,o.strokeStyle="rgba("+e.c.color+","+(N+.2)+")",o.moveTo(d.x,d.y),o.lineTo(c.x,c.y),o.stroke()))}),this.requestFrame(this.drawCanvas)}},{key:"destroy",value:function(){(0,u.clear)(this.el),window.onmousemove=this.onmousemove,window.onmouseout=this.onmouseout,(0,s.cancelAnimationFrame)(this.tid),this.canvas.parentNode.removeChild(this.canvas)}}]),l}();v.version="2.0.4",t.default=v,n.exports=t.default})(se,O);(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var a=O,i=u(a);function u(s){return s&&s.__esModule?s:{default:s}}t.default=i.default,n.exports=t.default})(ie,I);const Ee=G(I),H=n=>(ae("data-v-0420a002"),n=n(),oe(),n),ke={class:"index"},Fe=H(()=>b("div",{class:"logo"},"YiJian",-1)),Me={class:"menu"},Ne=H(()=>b("a",{class:"link",href:"https://github.com/Aizener/resume/tree/master#%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA",target:"_blank"},"模板创建",-1)),Pe={class:"container"},Te=K({__name:"Index",setup(n){const t=Z();return Q(()=>{const a={color:"0,0,0",count:100,zIndex:1};new Ee(document.querySelector(".index"),a)}),(a,i)=>{const u=L("router-link"),s=L("router-view");return V(),U("div",ke,[b("header",null,[Fe,b("div",Me,[w(u,{class:P(["link",{active:T(t).path==="/home"}]),to:"/"},{default:S(()=>[q("首页")]),_:1},8,["class"]),w(u,{class:P(["link",{active:T(t).path==="/mall"}]),to:"/mall"},{default:S(()=>[q("模板广场")]),_:1},8,["class"]),w(u,{class:P(["link",{active:T(t).path==="/my"}]),to:"/my"},{default:S(()=>[q("我的简历")]),_:1},8,["class"]),Ne])]),b("div",Pe,[w(s,null,{default:S(({Component:h})=>[w(ee,null,{default:S(()=>[(V(),ne(te(h)))]),_:2},1024)]),_:1})])])}}});const Re=re(Te,[["__scopeId","data-v-0420a002"]]);export{Re as default};
