import{u as l,r as s,j as e,R as g,H as x,a as f,b as j,M as R,c as w,I as P,d as b,e as L,S,f as y,L as A,g as O,h as M,i as v,k as I,l as H,m as E,n as T,o as G,p as _,q as B,s as C,B as d,t as D,v as N,w as k,P as z,x as U}from"./vendor-48fcbc21.js";function ae(){import.meta.url,import("_").catch(()=>1);async function*n(){}}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();function W(){const{t:n}=l(),o=s.getEnv(),c=s.getAppVersion(),a=t=>{s.setLanguage(t),s.getI18nInstance().changeLanguage(t)};return e.jsxs(g,{children:[e.jsx(x,{as:"h4",size:"md",children:n("Seed Project")}),e.jsx(f,{environment:o,version:c}),e.jsx(j,{ml:"auto",children:e.jsxs(R,{children:[e.jsx(w,{as:P,icon:e.jsx(b,{}),variant:"ghost",size:"sm"}),e.jsx(L,{children:S.map(t=>e.jsx(y,{onClick:()=>a(t),children:A[t][t]},t))})]})})]})}const q={counter:0},p=O({name:"app",initialState:q,reducers:{bumpCounter:n=>{n.counter++}}}),{bumpCounter:F}=p.actions,V=p.reducer,$=M(),h=v({reducer:{app:V},middleware:n=>n().prepend($.middleware)}),K=()=>I(),Q=H;window.rmgStore=h;function J(){const{t:n}=l(),o=K(),c=Q(a=>a.app.counter);return e.jsx(E,{children:e.jsxs(T,{children:[e.jsx(W,{}),e.jsxs(G,{children:[e.jsx(_,{children:e.jsx(B,{label:"Quick filter",children:e.jsx(C,{placeholder:"Filter anything"})})}),"This is a seed project for RMG with React framework.",e.jsx("br",{}),'Please replace any "RMG Seed Project" or "seed-project" with the correct component name.',e.jsx("br",{}),"Chakra UI and Redux store have been setup already. Here's an example state: ",c,".",e.jsx("br",{}),e.jsx(d,{onClick:()=>o(F()),children:"Bump"}),e.jsx("br",{}),"RMG Runtime has been setup. Click the button below to open RMG in another tab.",e.jsx("br",{}),e.jsxs(d,{onClick:()=>s.openApp("rmg"),children:[n("Open")," ",n("Rail Map Generator")]})]})]})})}const X={},Y="打开",Z={Open:Y},ee="開啟",te={Open:ee},ne="열기",re={Open:ne},se=new s.I18nBuilder().use(D).withAppName("Seed Project").withLng(s.getLanguage()).withResource("en",X).withResource("zh-Hans",Z).withResource("zh-Hant",te).withResource("ko",re).build();var m=(n=>(n.APP_LOAD="APP_LOAD",n))(m||{});let u;const oe=()=>{u=N(document.getElementById("root")),u.render(e.jsx(k.StrictMode,{children:e.jsx(z,{store:h,children:e.jsx(U,{i18n:se,children:e.jsx(J,{})})})}))};s.ready().then(()=>{oe(),s.injectUITools(),s.event(m.APP_LOAD,{})});export{ae as __vite_legacy_guard};
