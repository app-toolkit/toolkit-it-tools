import{d as f,n as v,bC as h,b as k,o as t,f as o,k as a,w as n,i as l,t as s,S as b,F as g,h as x,g as C,y as K,c as B,l as N}from"./index-65600c6f.js";import{_ as S}from"./InputCopyable.vue_vue_type_script_setup_true_lang-a56522a8.js";import{_ as w}from"./InputGroupLabel-3d4ce66c.js";import{_ as V}from"./InputGroup-f30ce359.js";const L={key:0,"mb-2":"","text-3xl":""},E=C("span",{"lh-1":"","op-70":""}," Press the key on your keyboard you want to get info about this key ",-1),T=f({__name:"keycode-info",setup(F){const e=v();h(document,"keydown",r=>{e.value=r});const u=k(()=>e.value?[{label:"Key :",value:e.value.key,placeholder:"Key name..."},{label:"Keycode :",value:String(e.value.keyCode),placeholder:"Keycode..."},{label:"Code :",value:e.value.code,placeholder:"Code..."},{label:"Location :",value:String(e.value.location),placeholder:"Code..."},{label:"Modifiers :",value:[e.value.metaKey&&"Meta",e.value.shiftKey&&"Shift",e.value.ctrlKey&&"Ctrl",e.value.altKey&&"Alt"].filter(Boolean).join(" + "),placeholder:"None"}]:[]);return(r,M)=>{const c=K,_=w,i=V;return t(),o("div",null,[a(c,{"mb-5":"","text-center":"","important:py-12":""},{default:n(()=>[l(e)?(t(),o("div",L,s(l(e).key),1)):b("",!0),E]),_:1}),(t(!0),o(g,null,x(l(u),({label:d,value:p,placeholder:m},y)=>(t(),B(i,{key:y,style:{"margin-bottom":"5px"}},{default:n(()=>[a(_,{style:{flex:"0 0 150px"}},{default:n(()=>[N(s(d),1)]),_:2},1024),a(S,{value:p,readonly:"",placeholder:m},null,8,["value","placeholder"])]),_:2},1024))),128))])}}});export{T as default};