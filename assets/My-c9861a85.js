import{o as c,c as r,b as e,d as g,q as f,E as y,n as i,a as l,u as d,F as Z,r as $,m as x,t as _,w,f as M,p as C,e as S,_ as V}from"./index-aa656a49.js";import{c as k,u as b}from"./Base-6181f7f7.js";const B={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},I=e("path",{fill:"currentColor",d:"M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm3-4q.425 0 .713-.288T9 16q0-.425-.288-.713T8 15q-.425 0-.713.288T7 16q0 .425.288.713T8 17Zm0-4q.425 0 .713-.288T9 12q0-.425-.288-.713T8 11q-.425 0-.713.288T7 12q0 .425.288.713T8 13Zm0-4q.425 0 .713-.288T9 8q0-.425-.288-.713T8 7q-.425 0-.713.288T7 8q0 .425.288.713T8 9Zm4 8h4q.425 0 .713-.288T17 16q0-.425-.288-.713T16 15h-4q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0-4h4q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-4q-.425 0-.713.288T11 12q0 .425.288.713T12 13Zm0-4h4q.425 0 .713-.288T17 8q0-.425-.288-.713T16 7h-4q-.425 0-.713.288T11 8q0 .425.288.713T12 9Z"},null,-1),H=[I];function D(o,s){return c(),r("svg",B,H)}const E={name:"material-symbols-list-alt-rounded",render:D},F={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},N=e("path",{fill:"currentColor",d:"M4 4h4v4H4V4Zm0 6h4v4H4v-4Zm4 6H4v4h4v-4Zm2-12h4v4h-4V4Zm4 6h-4v4h4v-4Zm-4 6h4v4h-4v-4ZM20 4h-4v4h4V4Zm-4 6h4v4h-4v-4Zm4 6h-4v4h4v-4Z"},null,-1),L=[N];function z(o,s){return c(),r("svg",F,L)}const P={name:"gg-menu-grid-r",render:z},R=o=>(C("data-v-9acef6a6"),o=o(),S(),o),Y={class:"my"},j={class:"my-top"},A=R(()=>e("h2",null,"我的简历列表",-1)),G={class:"type"},J=["src"],K={class:"info"},O={class:"title"},Q={class:"date"},U=g({__name:"My",setup(o){const s=f("box"),h=k(),u=b(),v=x(),m=a=>{const t=new Date(a);return`${t.getFullYear()}.${t.getMonth()+1}.${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`},p=a=>{u.updateValue(a.data),v.push({path:"/design",query:{name:a.name}})};return(a,t)=>{const T=y;return c(),r("div",Y,[e("div",j,[A,e("div",G,[e("div",{class:i(["icon",{active:s.value==="box"}]),onClick:t[0]||(t[0]=n=>s.value="box")},[l(d(P))],2),e("div",{class:i(["icon",{active:s.value==="row"}]),onClick:t[1]||(t[1]=n=>s.value="row")},[l(d(E))],2)])]),e("div",{class:i(["my-list",[s.value]])},[(c(!0),r(Z,null,$(d(h).myTemps,(n,q)=>(c(),r("div",{class:"item",key:q},[e("img",{class:"cover",src:n.cover,alt:""},null,8,J),e("div",K,[e("p",O,_(n.name),1),e("div",null,[e("span",Q,_(m(n.time)),1),l(T,{type:"success",onClick:W=>p(n)},{default:w(()=>[M("编辑")]),_:2},1032,["onClick"])])])]))),128))],2)])}}});const te=V(U,[["__scopeId","data-v-9acef6a6"]]);export{te as default};
