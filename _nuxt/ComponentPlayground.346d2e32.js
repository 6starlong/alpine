import{u as m}from"./asyncData.4b946c12.js";import{M as c,I as p,d as i,ag as u,r as l,N as e,k as d}from"./entry.8ba540e0.js";import f from"./Ellipsis.706dbbb7.js";import _ from"./ComponentPlaygroundData.e1abfeda.js";import"./TabsHeader.a36c0885.js";import"./ComponentPlaygroundProps.cc7329d5.js";import"./ProseH4.7372b127.js";import"./ProseCodeInline.ac4ff5eb.js";import"./Badge.39326a36.js";import"./MDCSlot.8b5e88f6.js";import"./slot.3e67599d.js";import"./ProseP.685593e2.js";import"./index.f9b943fc.js";import"./ComponentPlaygroundSlots.vue.08a0a9b3.js";import"./ComponentPlaygroundTokens.vue.197554d9.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-51227037"]]);export{V as default};
