import{Q as _,P as v}from"./quasar.14d49f89.js";import{d as g,u as d,r as y,c as h,w as k,a as u,F as b,b as q,e as B,o as l,f as I,g as V,h as w,i as C}from"./index.7a4e1a2e.js";const E={class:"q-pa-md"},F=g({__name:"main",setup(Q){var c;const a=d("runDataActiveRun","nodecg-speedcontrol"),e=d("displaySound","mysrtafes2023-layouts"),t=y(((c=e==null?void 0:e.data)==null?void 0:c.playerId)||"null"),p=h(()=>{var s;return a!=null&&a.data?(s=a==null?void 0:a.data)==null?void 0:s.teams.flatMap(o=>o.players):[]});k(()=>{var s;t.value=((s=e==null?void 0:e.data)==null?void 0:s.playerId)||""});const m=()=>{!e||(e.data={playerId:t.value},e.save())};return(s,o)=>{const i=V("q-radio");return l(),u("div",E,[(l(!0),u(b,null,q(B(p),n=>(l(),I(i,{label:n.name,key:n.id,val:n.id,modelValue:t.value,"onUpdate:modelValue":[o[0]||(o[0]=f=>t.value=f),m]},null,8,["label","val","modelValue"]))),128))])}}}),r=w(F),P=C();r.use(_);r.use(P);r.mount("#app");v.set(!0);
