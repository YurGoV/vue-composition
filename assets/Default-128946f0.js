import{p as L,i as W,c as r,r as X,a as O,g as re,s as I,o as Y,b as ue,d as C,f as Le,e as Pe,h as ke,j as Ce,k as ce,l as $,m as u,T as $e,n as de,q as ve,t as Ee,u as fe,v as J,w as me,x as ye,y as Re,z as ze,A as q,B as He,C as Me,D as Ne,E as ge,F as Oe,G as Q,H as ee,I as D,J as le,K as De}from"./index-153fdda9.js";import{u as qe,m as j,a as te,b as z,c as Fe,d as je,e as Ue,f as Ke,g as Ge,h as Ze,i as Je,V as We,j as Z,k as Xe}from"./VBtn-e0cdcfc8.js";const F=Symbol.for("vuetify:layout"),pe=Symbol.for("vuetify:layout-item"),se=1e3,Ye=L({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qe=L({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function et(){const e=W(F);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function tt(e){const i=W(F);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Pe()}`,o=re("useLayoutItem");ue(pe,{id:t});const l=I(!1);ke(()=>l.value=!0),Ce(()=>l.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:a}=i.register(o,{...e,active:r(()=>l.value?!1:e.active.value),id:t});return ce(()=>i.unregister(t)),{layoutItemStyles:s,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const at=(e,i,t,o)=>{let l={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...l}}];for(const a of e){const n=i.get(a),d=t.get(a),y=o.get(a);if(!n||!d||!y)continue;const c={...l,[n.value]:parseInt(l[n.value],10)+(y.value?parseInt(d.value,10):0)};s.push({id:a,layer:c}),l=c}return s};function nt(e){const i=W(F,null),t=r(()=>i?i.rootZIndex.value-100:se),o=X([]),l=O(new Map),s=O(new Map),a=O(new Map),n=O(new Map),d=O(new Map),{resizeRef:y,contentRect:c}=qe(),_=r(()=>{const m=new Map,T=e.overlaps??[];for(const v of T.filter(b=>b.includes(":"))){const[b,h]=v.split(":");if(!o.value.includes(b)||!o.value.includes(h))continue;const A=l.get(b),R=l.get(h),H=s.get(b),M=s.get(h);!A||!R||!H||!M||(m.set(h,{position:A.value,amount:parseInt(H.value,10)}),m.set(b,{position:R.value,amount:-parseInt(M.value,10)}))}return m}),g=r(()=>{const m=[...new Set([...a.values()].map(v=>v.value))].sort((v,b)=>v-b),T=[];for(const v of m){const b=o.value.filter(h=>{var A;return((A=a.get(h))==null?void 0:A.value)===v});T.push(...b)}return at(T,l,s,n)}),p=r(()=>!Array.from(d.values()).some(m=>m.value)),x=r(()=>g.value[g.value.length-1].layer),P=r(()=>({"--v-layout-left":C(x.value.left),"--v-layout-right":C(x.value.right),"--v-layout-top":C(x.value.top),"--v-layout-bottom":C(x.value.bottom),...p.value?void 0:{transition:"none"}})),B=r(()=>g.value.slice(1).map((m,T)=>{let{id:v}=m;const{layer:b}=g.value[T],h=s.get(v),A=l.get(v);return{id:v,...b,size:Number(h.value),position:A.value}})),f=m=>B.value.find(T=>T.id===m),w=re("createLayout"),k=I(!1);Y(()=>{k.value=!0}),ue(F,{register:(m,T)=>{let{id:v,order:b,position:h,layoutSize:A,elementSize:R,active:H,disableTransitions:M,absolute:Be}=T;a.set(v,b),l.set(v,h),s.set(v,A),n.set(v,H),M&&d.set(v,M);const ae=Le(pe,w==null?void 0:w.vnode).indexOf(m);ae>-1?o.value.splice(ae,0,v):o.value.push(v);const ne=r(()=>B.value.findIndex(N=>N.id===v)),U=r(()=>t.value+g.value.length*2-ne.value*2),Ve=r(()=>{const N=h.value==="left"||h.value==="right",K=h.value==="right",Ae=h.value==="bottom",oe={[h.value]:0,zIndex:U.value,transform:`translate${N?"X":"Y"}(${(H.value?0:-110)*(K||Ae?-1:1)}%)`,position:Be.value||t.value!==se?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!k.value)return oe;const V=B.value[ne.value];if(!V)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const G=_.value.get(v);return G&&(V[G.position]+=G.amount),{...oe,height:N?`calc(100% - ${V.top}px - ${V.bottom}px)`:R.value?`${R.value}px`:void 0,left:K?void 0:`${V.left}px`,right:K?`${V.right}px`:void 0,top:h.value!=="bottom"?`${V.top}px`:void 0,bottom:h.value!=="top"?`${V.bottom}px`:void 0,width:N?R.value?`${R.value}px`:void 0:`calc(100% - ${V.left}px - ${V.right}px)`}}),Ie=r(()=>({zIndex:U.value-1}));return{layoutItemStyles:Ve,layoutItemScrimStyles:Ie,zIndex:U}},unregister:m=>{a.delete(m),l.delete(m),s.delete(m),n.delete(m),d.delete(m),o.value=o.value.filter(T=>T!==m)},mainRect:x,mainStyles:P,getLayoutItem:f,items:B,layoutRect:c,rootZIndex:t});const E=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),we=r(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:E,layoutStyles:we,getLayoutItem:f,items:B,layoutRect:c,layoutRef:y}}const ot=(e,i)=>{const t=e.__vccOpts||e;for(const[o,l]of i)t[o]=l;return t};const he=L({text:String,...j(),...te()},"VToolbarTitle"),be=$()({name:"VToolbarTitle",props:he(),setup(e,i){let{slots:t}=i;return z(()=>{const o=!!(t.default||t.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),lt=L({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function S(e,i,t){return $()({name:e,props:lt({mode:t,origin:i}),setup(o,l){let{slots:s}=l;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:c,offsetHeight:_}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${y}px`,n.style.width=`${c}px`,n.style.height=`${_}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:y,left:c,width:_,height:g}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=y||"",n.style.left=c||"",n.style.width=_||"",n.style.height=g||""}}};return()=>{const n=o.group?$e:de;return ve(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},s.default)}}})}function _e(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return $()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,l){let{slots:s}=l;return()=>ve(de,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:i},s.default)}})}function xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=Ee(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:s,onEnterCancelled:s,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(a){e&&a._parent&&a._parent.classList.remove(e),s(a)}function s(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");S("slide-y-transition");S("slide-y-reverse-transition");const st=_e("expand-transition",xe());_e("expand-x-transition",xe("",!0));const it=[null,"prominent","default","comfortable","compact"],Se=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>it.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fe(),...j(),...je(),...Ue(),...te({tag:"header"}),...fe()},"VToolbar"),ie=$()({name:"VToolbar",props:Se(),setup(e,i){var p;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:l}=Ke(J(e,"color")),{borderClasses:s}=Ge(e),{elevationClasses:a}=Ze(e),{roundedClasses:n}=Je(e),{themeClasses:d}=me(e),{rtlClasses:y}=ye(),c=I(!!(e.extended||(p=t.extension)!=null&&p.call(t))),_=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=r(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Re({VBtn:{variant:"text"}}),z(()=>{var f;const x=!!(e.title||t.title),P=!!(t.image||e.image),B=(f=t.extension)==null?void 0:f.call(t);return c.value=!!(e.extended||B),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,a.value,n.value,d.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[P&&u("div",{key:"image",class:"v-toolbar__image"},[t.image?u(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):u(We,{key:"image-img",cover:!0,src:e.image},null)]),u(Z,{defaults:{VTabs:{height:C(_.value)}}},{default:()=>{var w,k,E;return[u("div",{class:"v-toolbar__content",style:{height:C(_.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),x&&u(be,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),u(Z,{defaults:{VTabs:{height:C(g.value)}}},{default:()=>[u(st,null,{default:()=>[c.value&&u("div",{class:"v-toolbar__extension",style:{height:C(g.value)}},[B])]})]})]})}),{contentHeight:_,extensionHeight:g}}}),rt=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ut(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let o=0;const l=X(null),s=I(0),a=I(0),n=I(0),d=I(!1),y=I(!1),c=r(()=>Number(e.scrollThreshold)),_=r(()=>ze((c.value-s.value)/c.value||0)),g=()=>{const p=l.value;!p||t&&!t.value||(o=s.value,s.value="window"in p?p.pageYOffset:p.scrollTop,y.value=s.value<o,n.value=Math.abs(s.value-c.value))};return q(y,()=>{a.value=a.value||s.value}),q(d,()=>{a.value=0}),Y(()=>{q(()=>e.scrollTarget,p=>{var P;const x=p?document.querySelector(p):window;x&&x!==l.value&&((P=l.value)==null||P.removeEventListener("scroll",g),l.value=x,l.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ce(()=>{var p;(p=l.value)==null||p.removeEventListener("scroll",g)}),t&&q(t,g,{immediate:!0}),{scrollThreshold:c,currentScroll:s,currentThreshold:n,isScrollActive:d,scrollRatio:_,isScrollingUp:y,savedScroll:a}}function Te(){const e=I(!1);return Y(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:r(()=>e.value?void 0:{transition:"none !important"}),isBooted:He(e)}}const ct=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...Qe(),...rt(),height:{type:[Number,String],default:64}},"VAppBar"),dt=$()({name:"VAppBar",props:ct(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const o=X(),l=Me(e,"modelValue"),s=r(()=>{var w;const f=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),a=r(()=>{const f=s.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!l.value}),{currentScroll:n,scrollThreshold:d,isScrollingUp:y,scrollRatio:c}=ut(e,{canScroll:a}),_=r(()=>e.collapse||s.value.collapse&&(s.value.inverted?c.value>0:c.value===0)),g=r(()=>e.flat||s.value.elevate&&(s.value.inverted?n.value>0:n.value===0)),p=r(()=>s.value.fadeImage?s.value.inverted?1-c.value:c.value:void 0),x=r(()=>{var k,E;if(s.value.hide&&s.value.inverted)return 0;const f=((k=o.value)==null?void 0:k.contentHeight)??0,w=((E=o.value)==null?void 0:E.extensionHeight)??0;return f+w});Ne(r(()=>!!e.scrollBehavior),()=>{Oe(()=>{s.value.hide?s.value.inverted?l.value=n.value>d.value:l.value=y.value||n.value<d.value:l.value=!0})});const{ssrBootStyles:P}=Te(),{layoutItemStyles:B}=tt({id:e.name,order:r(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:x,elementSize:I(void 0),active:l,absolute:J(e,"absolute")});return z(()=>{const f=ie.filterProps(e);return u(ie,ge({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":p.value,height:void 0,...P.value},e.style]},f,{collapse:_.value,flat:g.value}),t)}),{}}}),vt=$()({name:"VAppBarTitle",props:he(),setup(e,i){let{slots:t}=i;return z(()=>u(be,ge(e,{class:"v-app-bar-title"}),t)),{}}}),ft={__name:"AppBar",setup(e){return(i,t)=>(Q(),ee(dt,{flat:""},{default:D(()=>[u(vt,{class:"app-bar"},{default:D(()=>[le(" Simple Time Tracker "),u(Xe,{"prepend-icon":"mdi-account"},{default:D(()=>[le(" Enter ")]),_:1})]),_:1})]),_:1}))}},mt=ot(ft,[["__scopeId","data-v-eeba0d2c"]]);const yt=L({scrollable:Boolean,...j(),...te({tag:"main"})},"VMain"),gt=$()({name:"VMain",props:yt(),setup(e,i){let{slots:t}=i;const{mainStyles:o}=et(),{ssrBootStyles:l}=Te();return z(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var s,a;return[e.scrollable?u("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(a=t.default)==null?void 0:a.call(t)]}})),{}}}),pt={__name:"View",setup(e){return(i,t)=>{const o=De("router-view");return Q(),ee(gt,null,{default:D(()=>[u(o)]),_:1})}}};const ht=L({...j(),...Ye({fullHeight:!0}),...fe()},"VApp"),bt=$()({name:"VApp",props:ht(),setup(e,i){let{slots:t}=i;const o=me(e),{layoutClasses:l,getLayoutItem:s,items:a,layoutRef:n}=nt(e),{rtlClasses:d}=ye();return z(()=>{var y;return u("div",{ref:n,class:["v-application",o.themeClasses.value,l.value,d.value,e.class],style:[e.style]},[u("div",{class:"v-application__wrap"},[(y=t.default)==null?void 0:y.call(t)])])}),{getLayoutItem:s,items:a,theme:o}}}),Tt={__name:"Default",setup(e){return(i,t)=>(Q(),ee(bt,null,{default:D(()=>[u(mt),u(pt)]),_:1}))}};export{Tt as default};
