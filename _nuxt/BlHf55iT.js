import{d as f,aO as m,z as d,G as r,bT as I,c as x,e as v,Q as S,l as _}from"./DOAhAIbp.js";const z=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){m(e=>({"31d9f4da":p.value}));const t=d(),s=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=r(()=>I(l.value)),p=r(()=>{var o,a;const e=(a=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,o,a;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:S({width:i.value,height:i.value})},null,4))}}),C=_(z,[["__scopeId","data-v-a82fbf75"]]);export{C as default};
