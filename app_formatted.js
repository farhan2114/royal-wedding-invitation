Rw():void 0,...he
}
),p&&Cw({
...he
}
),Mw({
...he,apply:ga(({
elements:Te,rects:rn,availableWidth:kt,availableHeight:Kt
}
)=>{
const{
width:on,height:Pt
}
=rn.reference,Nl=Te.floating.style;
Nl.setProperty("--radix-popper-available-width",`${
kt
}
px`),Nl.setProperty("--radix-popper-available-height",`${
Kt
}
px`),Nl.setProperty("--radix-popper-anchor-width",`${
on
}
px`),Nl.setProperty("--radix-popper-anchor-height",`${
Pt
}
px`)
}
,"apply")
}
),q&&_w({
element:q,padding:m
}
),qw({
arrowWidth:Z,arrowHeight:le
}
),R&&Nw({
strategy:"referenceHidden",...he,boundary:de?he.boundary:void 0
}
)]
}
),x=L.setPlacementState;
Vt(()=>(x(Y),()=>{
x(void 0)
}
),[Y,x]);
const[V,$]=Dc(Y),F=Cn(M);
Vt(()=>{
P&&F?.()
}
,[P,F]);
const ae=ie.arrow?.x,re=ie.arrow?.y,ee=ie.arrow?.centerOffset!==0,[Ge,Oe]=E.useState();
return Vt(()=>{
Q&&Oe(window.getComputedStyle(Q).zIndex)
}
,[Q]),v.jsx("div",{
ref:me.setFloating,"data-radix-popper-content-wrapper":"",style:{
...C,transform:P?C.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ge,"--radix-popper-transform-origin":[ie.transformOrigin?.x,ie.transformOrigin?.y].join(" "),...ie.hide?.referenceHidden&&{
visibility:"hidden",pointerEvents:"none"
}

}
,dir:i.dir,children:v.jsx(Hw,{
scope:o,placedSide:V,placedAlign:$,onArrowChange:K,arrowX:ae,arrowY:re,shouldHideArrow:ee,children:v.jsx(Zt.div,{
"data-side":V,"data-align":$,...j,ref:k,style:{
...j.style,animation:P?j.style?.animation:"none"
}

}
)
}
)
}
)
}
,"PopperContent"));
function hv(l){
return l!==null
}
ga(hv,"isNotNull");
var qw=ga(l=>({
name:"transformOrigin",options:l,fn(i){
const{
placement:r,rects:o,middlewareData:c
}
=i,h=c.arrow?.centerOffset!==0,g=h?0:l.arrowWidth,m=h?0:l.arrowHeight,[p,b]=Dc(r),S={
start:"0%",center:"50%",end:"100%"
}
[b],T=(c.arrow?.x??0)+g/2,R=(c.arrow?.y??0)+m/2;
let O="",M="";
return p==="bottom"?(O=h?S:`${
T
}
px`,M=`${
-m
}
px`):p==="top"?(O=h?S:`${
T
}
px`,M=`${
o.floating.height+m
}
px`):p==="right"?(O=`${
-m
}
px`,M=h?S:`${
R
}
px`):p==="left"&&(O=`${
o.floating.width+m
}
px`,M=h?S:`${
R
}
px`),{
data:{
x:O,y:M
}

}

}

}
),"transformOrigin");
function Dc(l){
const[i,r="center"]=l.split("-");
return[i,r]
}
ga(Dc,"getSideAndAlignFromPlacement");
var kw=Lw,Bw=Object.defineProperty,ut=(l,i)=>Bw(l,"name",{
value:i,configurable:!0
}
),[jc,GE]=wa("Tooltip",[fv]),Gw=fv(),Yw="TooltipProvider",Qw=700,Sp="tooltip.open",[Vw,Xw]=jc(Yw),Zw=ut(l=>{
const{
__scopeTooltip:i,delayDuration:r=Qw,skipDelayDuration:o=300,disableHoverableContent:c=!1,children:f
}
=l,h=E.useRef(!0),g=E.useRef(!1),m=E.useRef(0);
return E.useEffect(()=>{
const p=m.current;
return()=>window.clearTimeout(p)
}
,[]),v.jsx(Vw,{
scope:i,isOpenDelayedRef:h,delayDuration:r,onOpen:E.useCallback(()=>{
o<=0||(window.clearTimeout(m.current),h.current=!1)
}
,[o]),onClose:E.useCallback(()=>{
o<=0||(window.clearTimeout(m.current),m.current=window.setTimeout(()=>h.current=!0,o))
}
,[o]),isPointerInTransitRef:g,onPointerInTransitChange:E.useCallback(p=>{
g.current=p
}
,[]),disableHoverableContent:c,children:f
}
)
}
,"TooltipProvider"),Kw="Tooltip",[YE,wr]=jc(Kw),mv="TooltipPortal",[Pw,Jw]=jc(mv,{
forceMount:void 0
}
),Fw=ut(l=>{
const{
__scopeTooltip:i,forceMount:r,children:o,container:c
}
=l,f=wr(mv,i);
return v.jsx(Pw,{
scope:i,forceMount:r,children:v.jsx(xc,{
present:r||f.open,children:v.jsx(ry,{
asChild:!0,container:c,children:o
}
)
}
)
}
)
}
,"TooltipPortal"),Di="TooltipContent",$w=E.forwardRef(ut(function(i,r){
const o=Jw(Di,i.__scopeTooltip),{
forceMount:c=o.forceMount,side:f="top",...h
}
=i,g=wr(Di,i.__scopeTooltip);
return v.jsx(xc,{
present:c||g.open,children:g.disableHoverableContent?v.jsx(pv,{
side:f,...h,ref:r
}
):v.jsx(Ww,{
side:f,...h,ref:r
}
)
}
)
}
,"TooltipContent")),Ww=E.forwardRef(ut(function(i,r){
const o=wr(Di,i.__scopeTooltip),c=Xw(Di,i.__scopeTooltip),f=E.useRef(null),h=Rt(r,f),[g,m]=E.useState(null),{
trigger:p,onClose:b
}
=o,S=f.current,{
onPointerInTransitChange:T
}
=c,R=E.useCallback(()=>{
m(null),T(!1)
}
,[T]),O=E.useCallback((M,j)=>{
const L=M.currentTarget,Q={
x:M.clientX,y:M.clientY
}
,_=yv(Q,L.getBoundingClientRect()),k=vv(Q,_),q=gv(j.getBoundingClientRect()),K=xv([...k,...q]);
m(K),T(!0)
}
,[T]);
return E.useEffect(()=>()=>R(),[R]),E.useEffect(()=>{
if(p&&S){
const M=ut(L=>O(L,S),"handleTriggerLeave"),j=ut(L=>O(L,p),"handleContentLeave");
return p.addEventListener("pointerleave",M),S.addEventListener("pointerleave",j),()=>{
p.removeEventListener("pointerleave",M),S.removeEventListener("pointerleave",j)
}

}

}
,[p,S,O,R]),E.useEffect(()=>{
if(g){
const M=ut(j=>{
const L=j.target,Q={
x:j.clientX,y:j.clientY
}
,_=p?.contains(L)||S?.contains(L),k=!bv(Q,g);
_?R():k&&(R(),b())
}
,"handleTrackPointerGrace");
return document.addEventListener("pointermove",M),()=>document.removeEventListener("pointermove",M)
}

}
,[p,S,g,b,R]),v.jsx(pv,{
...i,ref:h
}
)
}
,"TooltipContentHoverable")),Iw=Pp("TooltipContent"),pv=E.forwardRef(ut(function(i,r){
const{
__scopeTooltip:o,children:c,"aria-label":f,id:h,onEscapeKeyDown:g,onPointerDownOutside:m,...p
}
=i,b=wr(Di,o),S=Gw(o),{
onClose:T
}
=b;
E.useEffect(()=>(document.addEventListener(Sp,T),()=>document.removeEventListener(Sp,T)),[T]),E.useEffect(()=>{
if(b.trigger){
const O=ut(M=>{
M.target instanceof Node&&M.target.contains(b.trigger)&&T()
}
,"handleScroll");
return window.addEventListener("scroll",O,{
capture:!0
}
),()=>window.removeEventListener("scroll",O,{
capture:!0
}
)
}

}
,[b.trigger,T]);
const{
setContentId:R
}
=b;
return Vt(()=>(R(h),()=>{
R(void 0)
}
),[h,R]),v.jsx(ay,{
asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:g,onPointerDownOutside:m,onFocusOutside:O=>O.preventDefault(),onDismiss:T,children:v.jsxs(kw,{
"data-state":b.stateAttribute,role:f?void 0:"tooltip",id:f?void 0:b.contentId,...S,...p,ref:r,style:{
...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"
}
,children:[v.jsx(Iw,{
children:c
}
),f?v.jsx(tx,{
id:b.contentId,role:"tooltip",children:f
}
):null]
}
)
}
)
}
,"TooltipContentImpl"));
function yv(l,i){
const r=Math.abs(i.top-l.y),o=Math.abs(i.bottom-l.y),c=Math.abs(i.right-l.x),f=Math.abs(i.left-l.x);
switch(Math.min(r,o,c,f)){
case f:return"left";
case c:return"right";
case r:return"top";
case o:return"bottom";
default:throw new Error("unreachable")
}

}
ut(yv,"getExitSideFromRect");
function vv(l,i,r=5){
const o=[];
switch(i){
case"top":o.push({
x:l.x-r,y:l.y+r
}
,{
x:l.x+r,y:l.y+r
}
);
break;
case"bottom":o.push({
x:l.x-r,y:l.y-r
}
,{
x:l.x+r,y:l.y-r
}
);
break;
case"left":o.push({
x:l.x+r,y:l.y-r
}
,{
x:l.x+r,y:l.y+r
}
);
break;
case"right":o.push({
x:l.x-r,y:l.y-r
}
,{
x:l.x-r,y:l.y+r
}
);
break
}
return o
}
ut(vv,"getPaddedExitPoints");
function gv(l){
const{
top:i,right:r,bottom:o,left:c
}
=l;
return[{
x:c,y:i
}
,{
x:r,y:i
}
,{
x:r,y:o
}
,{
x:c,y:o
}
]
}
ut(gv,"getPointsFromRect");
function bv(l,i){
const{
x:r,y:o
}
=l;
let c=!1;
for(let f=0,h=i.length-1;
f<i.length;
h=f++){
const g=i[f],m=i[h],p=g.x,b=g.y,S=m.x,T=m.y;
b>o!=T>o&&r<(S-p)*(o-b)/(T-b)+p&&(c=!c)
}
return c
}
ut(bv,"isPointInPolygon");
function xv(l){
const i=l.slice();
return i.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),Sv(i)
}
ut(xv,"getHull");
function Sv(l){
if(l.length<=1)return l.slice();
const i=[];
for(let o=0;
o<l.length;
o++){
const c=l[o];
for(;
i.length>=2;
){
const f=i[i.length-1],h=i[i.length-2];
if((f.x-h.x)*(c.y-h.y)>=(f.y-h.y)*(c.x-h.x))i.pop();
else break
}
i.push(c)
}
i.pop();
const r=[];
for(let o=l.length-1;
o>=0;
o--){
const c=l[o];
for(;
r.length>=2;
){
const f=r[r.length-1],h=r[r.length-2];
if((f.x-h.x)*(c.y-h.y)>=(f.y-h.y)*(c.x-h.x))r.pop();
else break
}
r.push(c)
}
return r.pop(),i.length===1&&r.length===1&&i[0].x===r[0].x&&i[0].y===r[0].y?i:i.concat(r)
}
ut(Sv,"getHullPresorted");
var eE=Zw,tE=Fw,wv=$w;
const nE=eE,lE=E.forwardRef(({
className:l,sideOffset:i=4,...r
}
,o)=>v.jsx(tE,{
children:v.jsx(wv,{
ref:o,sideOffset:i,className:Ct("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",l),...r
}
)
}
));
lE.displayName=wv.displayName;
const Ev=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("rounded-xl border bg-card text-card-foreground shadow",l),...i
}
));
Ev.displayName="Card";
const aE=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("flex flex-col space-y-1.5 p-6",l),...i
}
));
aE.displayName="CardHeader";
const iE=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("font-semibold leading-none tracking-tight",l),...i
}
));
iE.displayName="CardTitle";
const sE=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("text-sm text-muted-foreground",l),...i
}
));
sE.displayName="CardDescription";
const Tv=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("p-6 pt-0",l),...i
}
));
Tv.displayName="CardContent";
const rE=E.forwardRef(({
className:l,...i
}
,r)=>v.jsx("div",{
ref:r,className:Ct("flex items-center p-6 pt-0",l),...i
}
));
rE.displayName="CardFooter";
function oE(){
return v.jsx("div",{
className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:v.jsx(Ev,{
className:"w-full max-w-md mx-4",children:v.jsxs(Tv,{
className:"pt-6",children:[v.jsxs("div",{
className:"flex mb-4 gap-2",children:[v.jsx(Mb,{
className:"h-8 w-8 text-red-500"
}
),v.jsx("h1",{
className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"
}
)]
}
),v.jsx("p",{
className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"
}
)]
}
)
}
)
}
)
}
function uE(l,i){
if(l instanceof RegExp)return{
keys:!1,pattern:l
}
;
var r,o,c,f,h=[],g="",m=l.split("/");
for(m[0]||m.shift();
c=m.shift();
)r=c[0],r==="*"?(h.push(r),g+=c[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(o=c.indexOf("?",1),f=c.indexOf(".",1),h.push(c.substring(1,~o?o:~f?f:c.length)),g+=~o&&!~f?"(?:/([^/]+?))?":"/([^/]+?)",~f&&(g+=(~o?"?":"")+"\\"+c.substring(f))):g+="/"+c;
return{
keys:h,pattern:new RegExp("^"+g+(i?"(?=$|/)":"/?$"),"i")
}

}
var Ju={
exports:{

}

}
,Fu={

}
;
var wp;
function cE(){
if(wp)return Fu;
wp=1;
var l=dr();
function i(S,T){
return S===T&&(S!==0||1/S===1/T)||S!==S&&T!==T
}
var r=typeof Object.is=="function"?Object.is:i,o=l.useState,c=l.useEffect,f=l.useLayoutEffect,h=l.useDebugValue;
function g(S,T){
var R=T(),O=o({
inst:{
value:R,getSnapshot:T
}

}
),M=O[0].inst,j=O[1];
return f(function(){
M.value=R,M.getSnapshot=T,m(M)&&j({
inst:M
}
)
}
,[S,R,T]),c(function(){
return m(M)&&j({
inst:M
}
),S(function(){
m(M)&&j({
inst:M
}
)
}
)
}
,[S]),h(R),R
}
function m(S){
var T=S.getSnapshot;
S=S.value;
try{
var R=T();
return!r(S,R)
}
catch{
return!0
}

}
function p(S,T){
return T()
}
var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:g;
return Fu.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:b,Fu
}
var Ep;
function fE(){
return Ep||(Ep=1,Ju.exports=cE()),Ju.exports
}
var dE=fE();
const hE=ji.useInsertionEffect,mE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pE=mE?E.useLayoutEffect:E.useEffect,yE=hE||pE,Av=l=>{
const i=E.useRef([l,(...r)=>i[0](...r)]).current;
return yE(()=>{
i[0]=l
}
),i[1]
}
,Tp=["popstate","pushState","replaceState","hashchange"];
let Ri=[];
const Ap=()=>Ri.forEach(l=>l()),vE=l=>(Ri.push(l)===1&&Tp.forEach(i=>addEventListener(i,Ap)),()=>{
Ri=Ri.filter(i=>i!==l),Ri.length||Tp.forEach(i=>removeEventListener(i,Ap))
}
),Ov=(l,i)=>dE.useSyncExternalStore(vE,l,i),Op=()=>location.search,gE=({
ssrSearch:l
}
={

}
)=>Ov(Op,l!=null?()=>l:Op),Rp=()=>location.pathname,bE=({
ssrPath:l
}
={

}
)=>Ov(Rp,l!=null?()=>l:Rp),xE=(l,{
replace:i=!1,state:r=null
}
={

}
)=>history[i?"replaceState":"pushState"](r,"",l),SE=l=>[bE(l),xE],Cp=Symbol.for("wouter_v3");
if(typeof history<"u"&&typeof window[Cp]>"u"){
for(const l of["pushState","replaceState"]){
const i=history[l];
history[l]=function(){
const r=i.apply(this,arguments),o=new Event(l);
return o.arguments=arguments,dispatchEvent(o),r
}

}
Object.defineProperty(window,Cp,{
value:!0
}
)
}
const Rv=(l="")=>l==="/"?"":l,wE=(l,i)=>l[0]==="~"?l.slice(1):Rv(i)+l,Cv=(l,i)=>(l=Mp(Rv(l)),i=Mp(i),!l||!i.toLowerCase().indexOf(l.toLowerCase())?i.slice(l.length)||"/":"~"+i),Mp=l=>{
try{
return l.includes("%")?decodeURI(l):l
}
catch{
return l
}

}
,Mv={
hook:SE,searchHook:gE,parser:uE,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:l=>l,aroundNav:(l,i,r)=>l(i,r)
}
,Nv=E.createContext(Mv),Ui=()=>E.useContext(Nv),_v={

}
,Dv=E.createContext(_v),EE=()=>E.useContext(Dv),jv=(l,i=l.base)=>Cv(i,l.hook(l)[0]),zv=l=>{
const[i,r]=l.hook(l);
return[Cv(l.base,i),Av((o,c)=>l.aroundNav(r,wE(o,l.base),c))]
}
,TE=()=>zv(Ui()),Uv=(l,i,r,o)=>{
const{
pattern:c,keys:f
}
=i instanceof RegExp?{
pattern:i
}
:l(i||"*",o),h=c.exec(r);
if(!h)return[!1,null];
const g={

}
;
for(let m=1;
m<h.length;
m++)g[m-1]=h[m];
if(f)for(let m=0;
m<f.length;
m++)g[f[m]]=h[m+1];
else Object.assign(g,h.groups);
return o?[!0,g,h[0]]:[!0,g]
}
,Hv=({
children:l,...i
}
)=>{
const r=Ui(),o=i.hook?Mv:r;
let c=o;
if(i.ssrPath){
const[m,p=i.ssrSearch??""]=i.ssrPath.split("?");
m&&(i.ssrSearch=p,i.ssrPath=m)
}
i.hrefs=i.hrefs??i.hook?.hrefs,i.searchHook=i.searchHook??i.hook?.searchHook;
let f=E.useRef(o),h=f.current,g=h;
for(let m in o){
const p=m==="base"?o[m]+(i[m]??""):i[m]??o[m];
p!==g[m]&&(h===g&&(f.current=g={
...g
}
),g[m]=p),(p!==o[m]||p!==c[m])&&(c=g)
}
return E.createElement(Nv.Provider,{
value:c
}
,l)
}
,AE=({
children:l,component:i
}
,r)=>i?E.createElement(i,{
params:r
}
):typeof l=="function"?l(r):l,OE=l=>{
let i=E.useRef(_v);
const r=i.current,o=Object.keys(l);
return i.current=o.length!==Object.keys(r).length||o.some(c=>l[c]!==r[c])?l:r
}
,Np=({
path:l,nest:i,match:r,...o
}
)=>{
const c=Ui(),f=jv(c),[h,g,m]=r??Uv(c.parser,l,f,i),p=OE({
...EE(),...g
}
);
if(!h)return null;
const b=AE(o,p);
return E.createElement(Dv.Provider,{
value:p
}
,m?E.createElement(Hv,{
base:m
}
,b):b)
}
;
E.forwardRef((l,i)=>{
const r=Ui(),[o,c]=zv(r),{
to:f="",href:h=f,onClick:g,asChild:m,children:p,className:b,replace:S,state:T,transition:R,...O
}
=l;
return O.onClick=Av(M=>{
M.ctrlKey||M.metaKey||M.altKey||M.shiftKey||M.button!==0||(g?.(M),M.defaultPrevented||(M.preventDefault(),c(h,l)))
}
),O.href=r.hrefs(h[0]==="~"?h.slice(1):r.base+h,r),b!==void 0&&(O.className=b?.call?b(o===h):b),i&&(O.ref=i),m&&E.isValidElement(p)?E.cloneElement(p,O):E.createElement("a",O,p)
}
);
const Lv=(l,i=[])=>{
if(Array.isArray(l))for(const r of l)Lv(r&&r.type===E.Fragment?r.props.children:r,i);
else i.push(l);
return i
}
,RE=({
children:l,location:i
}
)=>{
const r=Ui(),o=jv(r);
for(const c of Lv(l)){
let f=0;
if(E.isValidElement(c)&&(f=Uv(r.parser,c.props.path,i||o,c.props.nest))[0])return E.cloneElement(c,{
match:f
}
)
}
return null
}
,CE=new p1,ME=[{
title:"Mehfil-e-Shaam",date:"19 February · 7:00 pm",place:"The Courtyard",description:"An evening of old songs, new stories, and the first toast to the weekend that brought us all here.",image:"/images/couple-flowers.jpg"
}
,{
title:"Rang Barse",date:"20 February · 11:00 am",place:"Rang Mahal",description:"Colour, rhythm, and an open invitation to dance before the serious business of forever begins.",image:"/images/event-hands.jpg"
}
,{
title:"Saat Phere",date:"21 February · 5:30 pm",place:"The Lake Pavilion",description:"Seven promises beside the water, surrounded by the people who made our story possible.",image:"/images/event-saat-phere.jpg"
}
,{
title:"Vidaai Brunch",date:"22 February · 10:30 am",place:"The Garden Terrace",description:"One last slow morning together, with sunlight, sweet things, and a little reluctance to say goodbye.",image:"/images/couple-nikkah.jpg"
}
],NE=[["2018","Knowing","A shared table, an overlong conversation, and the first feeling that this was something worth staying for."],["2022","Introduction","Two families, one very full living room, and enough food to make the meeting feel like home."],["2026","Promise","A question beside a quiet lake. A yes that made every future feel suddenly close."]],An={
meera:{
name:"Meera",kicker:"Her way",image:"/images/bride-makeup.jpg",alt:"Portrait of Meera getting ready",short:"She notices the small things, remembers every birthday, and can turn an ordinary afternoon into a reason to gather. Meera brings warmth wherever she goes.",detail:"She collects little rituals: the first cup of tea, a song for every mood, and a reason to make one more person feel at home. Meera believes the best days are made of small, beautiful details."
}
,aarav:{
name:"Aarav",kicker:"His way",image:"/images/groom-sherwani.jpg",alt:"Portrait of Aarav in his sherwani",short:"He carries the long stories, the steady laugh, and an instinct for making room at the table. Aarav makes every place feel a little more like home.",detail:"He brings the long stories, the steady laugh, and an instinct for making room at the table. Aarav finds joy in the unplanned detours and always knows when it is time to stay a little longer."
}

}
,Ai=[{
quote:"May you always find your way back to the same table.",cite:"With love, always",image:"/images/flower-gold.png"
}
,{
quote:"For all the days ahead: more laughter than luggage.",cite:"Your favourite people",image:"/images/flower-gold.png"
}
,{
quote:"A beautiful beginning to a very long story.",cite:"From our hearts",image:"/images/flower-gold.png"
}
,{
quote:"May your home always hold a little light for everyone who comes to it.",cite:"A keepsake for the road",image:"/images/flower-gold.png",keepsake:!0
}
];
function _E(){
const l=()=>{
const o=Math.max(0,new Date("2027-02-21T17:00:00+05:30").getTime()-Date.now());
return{
days:Math.floor(o/864e5),hours:Math.floor(o/36e5%24),minutes:Math.floor(o/6e4%60),seconds:Math.floor(o/1e3%60)
}

}
,[i,r]=E.useState(l);
return E.useEffect(()=>{
const o=window.setInterval(()=>r(l()),1e3);
return()=>window.clearInterval(o)
}
,[]),v.jsxs("div",{
className:"countdown-orbit","data-testid":"countdown-wedding",children:[v.jsx("div",{
className:"orbit-line","aria-hidden":"true"
}
),v.jsx("div",{
className:"countdown-grid",children:Object.entries(i).map(([o,c])=>v.jsxs("div",{
className:"countdown-unit","data-testid":`countdown-${
o
}
`,children:[v.jsx("span",{
className:"countdown-number",children:String(c).padStart(2,"0")
}
),v.jsx("small",{
children:o
}
)]
}
,o))
}
)]
}
)
}
function DE(){
const l=E.useRef(null),i=E.useRef(null),r=E.useRef(null),[o,c]=E.useState(!1),f=()=>{
if(l.current){
l.current.resume();
return
}
const g=window.AudioContext;
if(!g)return;
const m=new g,p=m.createGain();
p.gain.value=o?0:.035,p.connect(m.destination),l.current=m,i.current=p;
const b=[261.63,329.63,392,329.63,293.66,349.23,440,349.23];
let S=0;
const T=()=>{
const R=m.currentTime,O=m.createOscillator(),M=m.createGain();
O.type="sine",O.frequency.setValueAtTime(b[S%b.length],R),M.gain.setValueAtTime(1e-4,R),M.gain.exponentialRampToValueAtTime(.22,R+.18),M.gain.exponentialRampToValueAtTime(1e-4,R+2.8),O.connect(M),M.connect(p),O.start(R),O.stop(R+3),S+=1,r.current=window.setTimeout(T,1400)
}
;
T()
}
,h=()=>{
c(g=>{
const m=!g,p=l.current,b=i.current;
return p&&b&&b.gain.setTargetAtTime(m?0:.035,p.currentTime,.08),m
}
)
}
;
return E.useEffect(()=>()=>{
r.current&&window.clearTimeout(r.current),l.current&&l.current.close()
}
,[]),{
isMuted:o,startMusic:f,toggleMute:h
}

}
function jE(){
const[l,i]=E.useState(!1),[r,o]=E.useState([0,1,2,3]),[c,f]=E.useState(0),[h,g]=E.useState("next"),[m,p]=E.useState(!1),[b,S]=E.useState(null),{
isMuted:T,startMusic:R,toggleMute:O
}
=DE();
E.useEffect(()=>{
const _=Array.from(document.querySelectorAll(".reveal")),k=new IntersectionObserver(q=>q.forEach(K=>K.isIntersecting&&K.target.classList.add("is-visible")),{
threshold:.13
}
);
return _.forEach(q=>k.observe(q)),()=>k.disconnect()
}
,[]),E.useEffect(()=>{
if(!b)return;
const _=document.body.style.overflow,k=q=>{
q.key==="Escape"&&S(null)
}
;
return document.body.style.overflow="hidden",window.addEventListener("keydown",k),()=>{
document.body.style.overflow=_,window.removeEventListener("keydown",k)
}

}
,[b]);
const M=()=>{
i(!0),R(),window.setTimeout(()=>document.getElementById("welcome")?.focus(),700)
}
,j=()=>o(_=>[..._.slice(1),_[0]]),L=_=>{
g(_),f(k=>_==="next"?(k+1)%Ai.length:(k-1+Ai.length)%Ai.length)
}
,Q=_=>{
_.preventDefault(),p(!0),_.currentTarget.reset()
}
;
return v.jsxs("main",{
className:"invitation",children:[v.jsxs("button",{
className:"music-toggle",type:"button",onClick:O,"aria-pressed":T,"aria-label":T?"Unmute ambient music":"Mute ambient music","data-testid":"button-toggle-music",children:[T?v.jsx(kb,{
size:14,strokeWidth:1.35,"aria-hidden":"true"
}
):v.jsx(Lb,{
size:14,strokeWidth:1.35,"aria-hidden":"true"
}
),v.jsx("span",{
children:T?"Unmute":"Mute"
}
)]
}
),v.jsxs("section",{
className:`cover ${
l?"is-open":""
}
`,"aria-label":"Opening invitation cover",children:[v.jsx("div",{
className:"cover-backdrop","aria-hidden":"true"
}
),v.jsxs("div",{
className:"cover-card",children:[v.jsxs("div",{
className:"cover-arch-frame","aria-hidden":"true",children:[v.jsx("span",{
className:"arch-column arch-column-left"
}
),v.jsx("span",{
className:"arch-column arch-column-right"
}
),v.jsxs("svg",{
className:"arch-top-ornament",viewBox:"0 0 240 70",children:[v.jsx("path",{
d:"M8 46C29 25 48 19 74 30c13 6 23 5 34-3M232 46c-21-21-40-27-66-16-13 6-23 5-34-3"
}
),v.jsx("path",{
d:"M13 49c17 2 29 8 38 17M227 49c-17 2-29 8-38 17M35 32c9-10 19-15 31-16M205 32c-9-10-19-15-31-16"
}
),v.jsx("path",{
d:"M50 27c-5-10-12-14-22-15 2 10 10 16 22 15ZM190 27c5-10 12-14 22-15-2 10-10 16-22 15ZM48 49c-8 1-14 5-18 12 9 0 15-4 18-12ZM192 49c8 1 14 5 18 12-9 0-15-4-18-12Z"
}
),v.jsx("path",{
className:"arch-top-petal",d:"M120 33c-15-20-28-17-25-5 2 8 11 12 25 15 14-3 23-7 25-15 3-12-10-15-25 5ZM120 33c15-20 28-17 25-5-2 8-11 12-25 15-14-3-23-7-25-15-3-12 10-15 25 5Z"
}
),v.jsx("circle",{
cx:"120",cy:"38",r:"7"
}
),v.jsx("path",{
d:"M120 19v-8M112 21l-5-7M128 21l5-7"
}
)]
}
),v.jsx("span",{
className:"arch-flower arch-flower-bottom",children:"✽　❧　✽　❧　✽"
}
)]
}
),v.jsx("div",{
className:"cover-heart",children:v.jsx(_b,{
size:17,strokeWidth:1.2,"aria-hidden":"true"
}
)
}
),v.jsx("p",{
className:"eyebrow",children:"A wedding invitation"
}
),v.jsxs("h1",{
className:"cover-names",children:[v.jsx("span",{
children:"Aarav"
}
),v.jsx("span",{
className:"ampersand",children:"&"
}
),v.jsx("span",{
children:"Meera"
}
)]
}
),v.jsx("p",{
className:"cover-date",children:"Udaipur · 21 February 2027"
}
),v.jsx("button",{
className:"open-button",type:"button",onClick:M,"aria-label":"Open the invitation","aria-expanded":l,"data-testid":"button-open-invitation",children:"Open the invitation"
}
),v.jsx("span",{
className:"cover-prompt",children:"Turn the page, stay awhile"
}
)]
}
)]
}
),v.jsxs("div",{
className:"page-shell",children:[v.jsx("section",{
className:"hero",id:"welcome",tabIndex:-1,"aria-labelledby":"welcome-title",children:v.jsxs("div",{
className:"hero-inner reveal",children:[v.jsx("p",{
className:"eyebrow",children:"Udaipur · 21 February 2027"
}
),v.jsxs("h1",{
id:"welcome-title",className:"display",children:["Aarav ",v.jsx("em",{
children:"&"
}
)," Meera"]
}
),v.jsx("p",{
className:"hero-subtitle",children:"With full hearts and a little bit of nervous laughter, we invite you to the beginning of our forever."
}
),v.jsxs("a",{
className:"scroll-cue",href:"#waiting","aria-label":"Scroll to the countdown section","data-testid":"link-scroll-countdown",children:[v.jsx("span",{
"aria-hidden":"true"
}
)," Stay awhile ",v.jsx(Eb,{
size:13,strokeWidth:1.3,"aria-hidden":"true"
}
)]
}
)]
}
)
}
),v.jsx("div",{
className:"divider","aria-hidden":"true"
}
),v.jsxs("section",{
className:"section countdown-section reveal",id:"waiting","aria-labelledby":"waiting-title",children:[v.jsx("p",{
className:"section-label",children:"01 · The date"
}
),v.jsx("h2",{
className:"section-title",id:"waiting-title",children:"The waiting is part of it."
}
),v.jsx("p",{
className:"countdown-copy",children:"The lake is holding its breath. We are counting down to a weekend of music, family and the kind of dancing that makes the floor remember."
}
),v.jsx(_E,{

}
)]
}
),v.jsx("section",{
className:"section family-section","aria-labelledby":"family-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("div",{
className:"reveal",children:[v.jsx("p",{
className:"section-label",children:"02 · With our families"
}
),v.jsx("h2",{
className:"section-title",id:"family-title",children:"Held by many hands."
}
)]
}
),v.jsxs("div",{
className:"family-editorial",children:[v.jsxs("div",{
className:"family-copy reveal",children:[v.jsx("h3",{
children:"A blessing is a chorus, never a solo."
}
),v.jsx("p",{
children:"With gratitude for the people who gave us our first homes, our loudest laughs, and the courage to make one of our own."
}
)]
}
),v.jsxs("div",{
className:"family-names reveal",children:[v.jsxs("div",{
className:"family-name",children:[v.jsx("span",{
children:"With love from the Sharma family"
}
),v.jsx("strong",{
children:"Shri Raghav & Smt. Kavita Sharma"
}
)]
}
),v.jsxs("div",{
className:"family-name",children:[v.jsx("span",{
children:"With love from the Rao family"
}
),v.jsx("strong",{
children:"Shri Devendra & Smt. Nandini Rao"
}
)]
}
)]
}
),v.jsx("img",{
className:"jharokha reveal",src:"/images/golden-jharokha.png",alt:"Delicate carved gold jharokha ornament"
}
)]
}
)]
}
)
}
),v.jsx("section",{
className:"section couple-section","aria-labelledby":"couple-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("div",{
className:"reveal",children:[v.jsx("p",{
className:"section-label",children:"03 · The two of us"
}
),v.jsx("h2",{
className:"section-title",id:"couple-title",children:"A good story needs two."
}
)]
}
),v.jsxs("div",{
className:"couple-editorial",children:[v.jsxs("figure",{
className:"couple-feature reveal",children:[v.jsx("img",{
src:"/images/prewedding-couple.jpg",alt:"Aarav and Meera smiling together in Udaipur"
}
),v.jsx("figcaption",{
className:"couple-caption",children:"Aarav & Meera"
}
)]
}
),v.jsxs("div",{
className:"couple-profiles",children:[v.jsxs("article",{
className:"profile-card reveal",children:[v.jsx("button",{
className:"profile-arch",type:"button",onClick:()=>S("meera"),"aria-label":"Expand Meera's portrait","aria-expanded":b==="meera","data-testid":"button-expand-meera",children:v.jsx("img",{
src:An.meera.image,alt:An.meera.alt
}
)
}
),v.jsxs("div",{
className:"profile-copy",children:[v.jsx("p",{
className:"profile-kicker",children:An.meera.kicker
}
),v.jsx("h3",{
children:"Meera"
}
),v.jsx("p",{
children:An.meera.short
}
)]
}
)]
}
),v.jsxs("article",{
className:"profile-card profile-card-groom reveal",children:[v.jsx("button",{
className:"profile-arch",type:"button",onClick:()=>S("aarav"),"aria-label":"Expand Aarav's portrait","aria-expanded":b==="aarav","data-testid":"button-expand-aarav",children:v.jsx("img",{
src:An.aarav.image,alt:An.aarav.alt
}
)
}
),v.jsxs("div",{
className:"profile-copy",children:[v.jsx("p",{
className:"profile-kicker",children:An.aarav.kicker
}
),v.jsx("h3",{
children:"Aarav"
}
),v.jsx("p",{
children:An.aarav.short
}
)]
}
)]
}
),v.jsx("div",{
className:`profile-expanded ${
b?"is-open":""
}
`,role:"dialog","aria-modal":"true","aria-labelledby":"profile-expanded-title","aria-hidden":!b,onClick:_=>_.target===_.currentTarget&&S(null),children:(()=>{
const _=An[b??"meera"];
return v.jsxs("div",{
className:"profile-expanded-inner",children:[v.jsx("div",{
className:"profile-expanded-image",children:v.jsx("img",{
src:_.image,alt:_.alt
}
)
}
),v.jsxs("div",{
className:"profile-expanded-copy",children:[v.jsx("p",{
className:"profile-kicker",children:_.kicker
}
),v.jsx("h3",{
id:"profile-expanded-title",children:_.name
}
),v.jsx("p",{
children:_.detail
}
),v.jsxs("button",{
className:"profile-close",type:"button",onClick:()=>S(null),tabIndex:b?0:-1,"aria-label":"Close expanded portrait","data-testid":"button-close-profile",children:[v.jsx(jp,{
size:14,strokeWidth:1.35,"aria-hidden":"true"
}
),"Close portrait"]
}
)]
}
)]
}
)
}
)()
}
)]
}
)]
}
)]
}
)
}
),v.jsx("section",{
className:"section dump-section","aria-labelledby":"dump-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("div",{
className:"dump-head reveal",children:[v.jsxs("div",{
children:[v.jsx("p",{
className:"section-label",children:"04 · Small evidence"
}
),v.jsx("h2",{
className:"section-title",id:"dump-title",children:"A little life, collected."
}
)]
}
),v.jsx("p",{
className:"section-intro",children:"Four frames from the in-between: the flowers, the quiet rituals, and all the hands that keep a day like this beautiful."
}
)]
}
),v.jsxs("div",{
className:"photo-dump",children:[v.jsxs("figure",{
className:"dump-photo reveal",children:[v.jsx("img",{
src:"/images/couple-flowers.jpg",alt:"Aarav and Meera among flowers"
}
),v.jsx("figcaption",{
children:"the beginning of a garden"
}
)]
}
),v.jsxs("figure",{
className:"dump-photo reveal",children:[v.jsx("img",{
src:"/images/couple-temple.jpg",alt:"Aarav and Meera outside a temple"
}
),v.jsx("figcaption",{
children:"under old arches"
}
)]
}
),v.jsxs("figure",{
className:"dump-photo reveal",children:[v.jsx("img",{
src:"/images/couple-nikkah.jpg",alt:"Aarav and Meera in a quiet wedding moment"
}
),v.jsx("figcaption",{
children:"the quiet yes"
}
)]
}
),v.jsxs("figure",{
className:"dump-photo reveal",children:[v.jsx("img",{
src:"/images/event-hands.jpg",alt:"Hands gathered together at the wedding"
}
),v.jsx("figcaption",{
children:"many hands, one day"
}
)]
}
)]
}
)]
}
)
}
),v.jsx("section",{
className:"section story-section","aria-labelledby":"story-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("div",{
className:"reveal",children:[v.jsx("p",{
className:"section-label",children:"05 · In our own words"
}
),v.jsx("h2",{
className:"section-title",id:"story-title",children:"The long way round."
}
)]
}
),v.jsxs("div",{
className:"story-layout",children:[v.jsx("div",{
className:"story-intro reveal",children:v.jsx("p",{
children:"Some stories announce themselves. Ours arrived quietly — a conversation, a thousand small choices, and the soft surprise of finding home in another person."
}
)
}
),v.jsxs("div",{
className:"story-anchors reveal","aria-label":"Photographs from Aarav and Meera's journey",children:[v.jsx("figure",{
className:"story-anchor one",children:v.jsx("img",{
src:"/images/bride-makeup.jpg",alt:"Meera preparing for the wedding"
}
)
}
),v.jsx("figure",{
className:"story-anchor two",children:v.jsx("img",{
src:"/images/couple-temple.jpg",alt:"Aarav and Meera sharing a temple visit"
}
)
}
),v.jsx("figure",{
className:"story-anchor three",children:v.jsx("img",{
src:"/images/golden-jharokha.png",alt:"Gold carved jharokha ornament"
}
)
}
)]
}
)]
}
),v.jsx("div",{
className:"journey-list",children:NE.map(([_,k,q])=>v.jsxs("article",{
className:"journey-item reveal",children:[v.jsx("span",{
className:"journey-year",children:_
}
),v.jsxs("div",{
children:[v.jsx("h3",{
children:k
}
),v.jsx("p",{
children:q
}
)]
}
)]
}
,_))
}
)]
}
)
}
),v.jsx("section",{
className:"section events-section","aria-labelledby":"events-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("div",{
className:"events-head reveal",children:[v.jsxs("div",{
children:[v.jsx("p",{
className:"section-label",children:"07 · Four reasons to stay"
}
),v.jsx("h2",{
className:"section-title",id:"events-title",children:"The weekend deck."
}
)]
}
),v.jsx("p",{
className:"section-intro",children:"The main event, in four movements. Tap the card on top to pass it behind the stack."
}
)]
}
),v.jsx("div",{
className:"stack-wrap","aria-live":"polite",children:r.map((_,k)=>{
const q=ME[_],K=k===0;
return v.jsxs("button",{
className:`event-stack-card ${
K?"is-top":""
}
`,type:"button",style:{
"--stack":k
}
,onClick:K?j:void 0,tabIndex:K?0:-1,"aria-hidden":!K,"aria-label":K?`View ${
q.title
}
. Tap to see the next event`:`${
q.title
}
, behind the active event`,"data-testid":`card-event-${
_+1
}
`,children:[v.jsx("span",{
className:"stack-image",children:v.jsx("img",{
src:q.image,alt:""
}
)
}
),v.jsxs("span",{
className:"stack-copy",children:[v.jsxs("span",{
children:[v.jsxs("span",{
className:"event-number",children:["0",_+1," / 04"]
}
),v.jsx("strong",{
children:q.title
}
),v.jsx("span",{
className:"stack-description",children:q.description
}
)]
}
),v.jsxs("span",{
className:"event-meta",children:[v.jsx("span",{
children:q.date
}
),v.jsx("span",{
children:q.place
}
)]
}
)]
}
)]
}
,q.title)
}
)
}
),v.jsx("p",{
className:"deck-hint",children:"Tap the top card to continue"
}
)]
}
)
}
),v.jsx("section",{
className:"section venue-section","aria-labelledby":"venue-title",children:v.jsxs("div",{
className:"section-narrow",children:[v.jsxs("figure",{
className:"venue-feature reveal",children:[v.jsx("img",{
src:"/images/udaipur-venue-twilight.jpg",alt:"Rang Mahal glowing beside Lake Pichola at twilight"
}
),v.jsx("figcaption",{
children:"Rang Mahal · Udaipur"
}
)]
}
),v.jsxs("div",{
className:"venue-copy",children:[v.jsxs("div",{
className:"reveal",children:[v.jsx("p",{
className:"section-label",children:"08 · Where we gather"
}
),v.jsx("h2",{
id:"venue-title",children:"Rang Mahal"
}
),v.jsx("p",{
children:"On the eastern shore of Lake Pichola, the old palace turns rose-gold as the sun goes down. Come for the view, stay for the stories. We cannot wait to show you the Udaipur we love."
}
),v.jsxs("p",{
className:"address",children:[v.jsx(jb,{
size:15,strokeWidth:1.2,"aria-hidden":"true"
}
)," Udaipur, Rajasthan"]
}
)]
}
),v.jsx("div",{
className:"reveal",children:v.jsx("iframe",{
className:"map-frame",title:"Map showing Rang Mahal on Lake Pichola, Udaipur",src:"https://www.google.com/maps?q=Rang+Mahal+Lake+Pichola+Udaipur&output=embed",loading:"lazy"
}
)
}
)]
}
)]
}
)
}
),v.jsxs("section",{
className:"section blessings-section","aria-labelledby":"blessings-title",children:[v.jsxs("div",{
className:"reveal",children:[v.jsx("p",{
className:"section-label",children:"09 · Leave us a little love"
}
),v.jsx("h2",{
className:"section-title",id:"blessings-title",children:"Blessings for the road."
}
)]
}
),v.jsx("div",{
className:"blessing-stage","aria-live":"polite",children:Ai.map((_,k)=>{
const q=k===c;
return v.jsxs("button",{
className:`blessing-card ${
q?"is-active":`is-${
h
}
`
}
 ${
_.keepsake?"is-keepsake":""
}
`,type:"button",onClick:q?()=>L("next"):void 0,tabIndex:q?0:-1,"aria-hidden":!q,"aria-label":q?"Tap to read the next blessing":_.quote,"data-testid":`card-blessing-${
k+1
}
`,children:[v.jsx("span",{
className:"blessing-image",children:v.jsx("img",{
src:_.image,alt:_.keepsake?"Ornate transparent gold jharokha keepsake":"Wedding detail from Aarav and Meera"
}
)
}
),v.jsxs("span",{
className:"blessing-copy",children:[v.jsxs("span",{
className:"blessing-quote",children:["“",_.quote,"”"]
}
),v.jsxs("span",{
className:"blessing-cite",children:["— ",_.cite]
}
)]
}
)]
}
,_.quote)
}
)
}
),v.jsxs("div",{
className:"blessing-nav",children:[v.jsx("button",{
className:"icon-button",type:"button",onClick:()=>L("previous"),"aria-label":"Previous blessing","data-testid":"button-previous-blessing",children:v.jsx(Ab,{
size:17,strokeWidth:1.2
}
)
}
),v.jsxs("span",{
className:"blessing-count",children:[String(c+1).padStart(2,"0")," / ",String(Ai.length).padStart(2,"0")]
}
),v.jsx("button",{
className:"icon-button",type:"button",onClick:()=>L("next"),"aria-label":"Next blessing","data-testid":"button-next-blessing",children:v.jsx(Rb,{
size:17,strokeWidth:1.2
}
)
}
)]
}
),v.jsx("form",{
className:"blessing-form reveal",onSubmit:Q,children:m?v.jsx("p",{
className:"form-success",role:"status",children:"Your blessing has joined the collection. We will carry it with us."
}
):v.jsxs(v.Fragment,{
children:[v.jsxs("div",{
className:"form-grid",children:[v.jsxs("div",{
className:"field",children:[v.jsx("label",{
htmlFor:"guest-name",children:"Your name"
}
),v.jsx("input",{
id:"guest-name",name:"name",required:!0,placeholder:"How shall we sign your note?","data-testid":"input-blessing-name"
}
)]
}
),v.jsxs("div",{
className:"field",children:[v.jsx("label",{
htmlFor:"guest-note",children:"Your note"
}
),v.jsx("textarea",{
id:"guest-note",name:"note",required:!0,placeholder:"A wish, a memory, or a few good words...","data-testid":"input-blessing-note"
}
)]
}
)]
}
),v.jsxs("button",{
className:"form-submit",type:"submit","data-testid":"button-send-blessing",children:["Send a blessing ",v.jsx(Ub,{
size:13,strokeWidth:1.4,"aria-hidden":"true"
}
)]
}
)]
}
)
}
)]
}
),v.jsx("footer",{
className:"closing-section","aria-labelledby":"closing-title",children:v.jsxs("div",{
className:"closing-card reveal",children:[v.jsx("img",{
className:"closing-flower closing-flower-left",src:"/images/flower-line.png",alt:"","aria-hidden":"true"
}
),v.jsx("img",{
className:"closing-flower closing-flower-right",src:"/images/flower-gold.png",alt:"","aria-hidden":"true"
}
),v.jsxs("div",{
className:"closing-inner",children:[v.jsx("p",{
className:"section-label",style:{
justifyContent:"center"
}
,children:"10 · Until then"
}
),v.jsxs("h2",{
className:"closing-names",id:"closing-title",children:[v.jsx("span",{
children:"Aarav"
}
),v.jsx("em",{
children:"&"
}
),v.jsx("span",{
children:"Meera"
}
)]
}
),v.jsx("p",{
className:"closing-invite",children:"Thank you for being here."
}
),v.jsx("p",{
className:"closing-copy",children:"Your presence is the present we will remember longest. Until we meet beside the lake, keep a little room in your heart — and perhaps a little room on the dance floor."
}
),v.jsx("div",{
className:"closing-details",children:"Udaipur · 21 February 2027"
}
),v.jsx("span",{
className:"closing-signoff",children:"With all our love"
}
),v.jsx("div",{
className:"footer-rule","aria-hidden":"true"
}
)]
}
)]
}
)
}
)]
}
)]
}
)
}
function zE(){
return v.jsx(UE,{
children:v.jsxs(RE,{
children:[v.jsx(Np,{
path:"/",component:jE
}
),v.jsx(Np,{
component:oE
}
)]
}
)
}
)
}
function UE({
children:l
}
){
const[i]=TE();
return v.jsx(Gp,{
resetKey:i,children:l
}
)
}
function HE(){
return v.jsx(v1,{
client:CE,children:v.jsxs(nE,{
children:[v.jsx(Hv,{
base:"/".replace(/\/$/,""),children:v.jsx(zE,{

}
)
}
),v.jsx(OS,{

}
)]
}
)
}
)
}
pb.createRoot(document.getElementById("root"),{
onCaughtError:(l,i)=>{
console.error(l,i.componentStack)
}

}
).render(v.jsx(Gp,{
children:v.jsx(HE,{

}
)
}
));

