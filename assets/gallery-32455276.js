import{f as g,l as b,o as a,c as p,v as m,L as C,h as v,a as s,z as P,N as $,q as V,O as D,d as f,a2 as G,k as A,D as E,a1 as O,ab as S,ac as B,$ as I,H as N,I as T,w,j as o,t as Y,aa as j,J as z}from"./app-da7552d6.js";import{_ as K}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-a04845b2.js";const L=g({__name:"YunGallery",props:{photos:{}},setup(_){return(r,n)=>{const e=b("VAGallery");return a(),p(e,{photos:r.photos},null,8,["photos"])}}}),R={key:0,"w-full":"","pt-14":"","pb-10":""},H={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},J=["onKeyup"],M={key:1},q=g({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(_){const r=_,n=m(""),e=m(""),l=m(!1),{decrypt:c}=C();async function d(){const i=r.encryptedPhotos;if(i)try{const t=await c(n.value,i);e.value=t||""}catch{l.value=!0}}function y(){e.value="",n.value=""}return(i,t)=>{const h=L;return a(),v("div",null,[e.value?(a(),v("div",M,[f(h,{photos:JSON.parse(e.value)},null,8,["photos"]),s("div",{"w-full":"","text-center":"","mt-8":""},[s("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(a(),v("div",R,[s("div",H,[P(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:V(l.value&&"border-red"),onInput:t[1]||(t[1]=u=>l.value=!1),onKeyup:D(d,["enter"])},null,42,J),[[$,n.value]]),s("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:d})])]))])}}}),F={text:"center",class:"yun-text-light",p:"2"},U={class:"page-action",text:"center"},W=["title"],Q=s("div",{"i-ri-arrow-go-back-line":""},null,-1),X=[Q],Z=g({__name:"gallery",setup(_){const r=G(),{t:n}=A(),e=E(),l=O(e);S([B({"@type":"CollectionPage"})]);const c=I(()=>e.value.photos||[]),y=N().value.addons["valaxy-addon-lightgallery"]?T(()=>z(()=>import("./YunGallery-586ec481.js"),["assets/YunGallery-586ec481.js","assets/app-da7552d6.js","assets/index-388e720c.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-a04845b2.js"])):()=>null;return(i,t)=>{const h=K,u=q,x=b("router-view"),k=j;return a(),p(k,null,{"main-header":w(()=>[f(h,{title:o(l)||o(n)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":w(()=>[s("div",F,Y(o(n)("counter.photos",c.value.length)),1),s("div",U,[s("a",{class:"yun-icon-btn",title:o(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(r).back())},X,8,W)]),o(e).encryptedPhotos?(a(),p(u,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(a(),p(o(y),{key:1,photos:c.value},null,8,["photos"])),f(x)]),_:1})}}}),oe=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{L as _,oe as g};