import{d,bC as l,G as v,q as f,B as p,al as g,bD as m,bE as h,aw as y,au as u,az as _}from"./DOAhAIbp.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:a}=l(i),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const a=y(),{navigation:n}=i,o=e=>u(_,{to:e._path},()=>e.title),t=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),t(s.children,r+1)]):u("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),q=C;export{q as default};
