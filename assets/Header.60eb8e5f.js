import{d as x,u as S,O as C,ag as k,o as B,c as E,b as e,w as t,a2 as l,ah as _,P as r,a as o,ai as I,H as a,p as P,e as F,_ as H}from"./index.935b857b.js";/* empty css                  *//* empty css                */const d=n=>(P("data-v-f574a268"),n=n(),F(),n),V={class:"header"},y={class:"header-right"},A={class:"info"},D={class:"avatar"},b=d(()=>o("span",null,"\u7BA1\u7406\u5458",-1)),G=d(()=>o("span",null,"\u9000\u51FA\u767B\u5F55",-1)),N=x({__name:"Header",setup(n){const s=S(),p=()=>{s.updateValue("collapse",!s.collapse)},i=()=>{s.updateValue("showDrawer",!0)},u=async()=>{await s.logout(),I.push("/login")};return(U,z)=>{const h=a("Fold"),m=a("Expand"),c=C,f=a("User"),v=a("Promotion"),g=k,w=a("Grid");return B(),E("div",V,[e(c,{size:"24px",class:"header-left",onClick:p},{default:t(()=>[l(e(h,{color:"#333"},null,512),[[_,!r(s).collapse]]),l(e(m,{color:"#333"},null,512),[[_,r(s).collapse]])]),_:1}),o("div",y,[o("div",A,[o("div",D,[e(c,null,{default:t(()=>[e(f)]),_:1})]),e(g,{placement:"bottom",trigger:"hover"},{reference:t(()=>[b]),default:t(()=>[o("div",{class:"user-menu--item",onClick:u},[G,e(c,null,{default:t(()=>[e(v)]),_:1})])]),_:1})]),o("div",{class:"info",onClick:i},[e(c,null,{default:t(()=>[e(w)]),_:1})])])])}}});const T=H(N,[["__scopeId","data-v-f574a268"]]);export{T as default};