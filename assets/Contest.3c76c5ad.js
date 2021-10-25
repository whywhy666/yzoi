import{o as s,c as a,a as r,d as B,l as I,j as T,u as e,s as C,A,t as i,F as g,p as w,n as M,b as d,w as k,f as L,V as O,e as N,B as j,P as S,C as W,g as H,D as q}from"./index.5d5fc7a4.js";import{a as U,C as G}from"./c-table.ce87c176.js";import{_ as D}from"./user-link.2b93b2aa.js";import{_ as P}from"./cf-rating-color.6c423047.js";import{l as V}from"./load.b9090f49.js";import{_ as Y}from"./at-rating-color.a8610445.js";var Q=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["Petr","b"],["Benq","c"],["ksun48","d"],["jiangly","e"]],"data":[{"n":"a","h":"a","r":3707},{"n":"b","h":"b","r":3159},{"n":"c","h":"c","r":3672},{"n":"d","h":"d","r":3575},{"n":"e","h":"e","r":3288}]}');const K=V(Q),X=new Map(K.map(t=>[t.h,t.n])),Z=new Map(K.map(t=>[t.h,t.r]));function zt(t){var m;return(m=X.get(t))!=null?m:t}function z(t){return Z.get(t)}const tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},et=r("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z",fill:"currentColor"},null,-1),st=[et];function nt(t,m){return s(),a("svg",tt,st)}var at={name:"mdi-star",render:nt};const rt={class:"space-left"},ot={key:1},lt=B({props:{author:null},setup(t){const m=t,{author:n}=I(m),o=T(()=>{var x,u;return(u=(x=n==null?void 0:n.value)==null?void 0:x.teamUrl)!=null?u:""}),f=()=>{o.value!==""&&window.open(o.value,"_blank")};return(x,u)=>e(C)(e(n).teamName)?(s(),a(g,{key:0},[r("div",null,[r("span",{class:A(e(o)!==""&&"cursor-pointer"),onClick:f},i(e(n).teamName),3)]),r("div",rt,[(s(!0),a(g,null,w(e(n).members,(p,y)=>(s(),M(D,{class:A(y>0&&"ml-2"),key:p,name:p},null,8,["class","name"]))),128))])],64)):(s(),a("span",ot,i(e(n).members[0]),1))}}),ct={class:"space-left"},it=["href"],ut={class:"space-left"},dt=["href"],mt={key:2},ft=B({props:{author:null},setup(t){return(m,n)=>e(C)(t.author.teamName)&&t.author.members.length<=1?(s(),a(g,{key:0},[d(D,{name:t.author.teamName},null,8,["name"]),r("span",ct,[(s(!0),a(g,null,w(t.author.members,(o,f)=>(s(),a("a",{key:f,class:"ml-2",href:`https://codeforces.com/profile/${o}`,target:"_blank"},[d(e(P),{rating:e(z)(o)},{default:k(()=>[L(i(o),1)]),_:2},1032,["rating"])],8,it))),128))])],64)):e(C)(t.author.teamName)?(s(),a(g,{key:1},[r("div",null,[d(D,{name:t.author.teamName},null,8,["name"])]),r("div",ut,[(s(!0),a(g,null,w(t.author.members,(o,f)=>(s(),a("a",{key:f,class:A(f>0&&"ml-2"),href:`https://codeforces.com/profile/${o}`,target:"_blank"},[d(e(P),{rating:e(z)(o)},{default:k(()=>[L(i(o),1)]),_:2},1032,["rating"])],10,dt))),128))])],64)):(s(),a("span",mt,i(t.author.members[0]),1))}});var ht=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"],["jiangly","b"]],"data":[{"n":"a","h":"a","r":4023},{"n":"b","h":"b","r":3320}]}');const J=V(ht);new Map(J.map(t=>[t.h,t.n]));const pt=new Map(J.map(t=>[t.h,t.r]));function _t(t){return pt.get(t)}const bt={class:"space-left"},gt=["href"],vt={key:1},kt=B({props:{author:null},setup(t){return(m,n)=>e(C)(t.author.teamName)?(s(),a(g,{key:0},[d(D,{name:t.author.teamName},null,8,["name"]),r("span",bt,[(s(!0),a(g,null,w(t.author.members,(o,f)=>(s(),a("a",{key:f,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${o}`,target:"_blank"},[d(e(Y),{rating:e(_t)(o)},{default:k(()=>[L(i(o),1)]),_:2},1032,["rating"])],8,gt))),128))])],64)):(s(),a("span",vt,i(t.author.members[0]),1))}}),yt=r("span",null,"+",-1),$t={key:0},xt={key:0,class:"text-sm text-gray-400"},Ct={key:1},Nt={class:"text-center font-bold text-red-500"},Ft=r("span",null,"-",-1),Bt=B({props:{result:null,practice:null},setup(t){const m=t,{result:n}=I(m),o=T(()=>{var u,p;return(p=(u=n==null?void 0:n.value)==null?void 0:u.submissionUrl)!=null?p:""}),f=()=>{o.value!==""&&window.open(o.value,"_blank")};function x(u){function p(c){return(c<10?"0":"")+c}const y=Math.floor(u/3600),E=Math.floor(u%3600/60);return`${y}:${p(E)}`}return(u,p)=>{var y;return e(n)?(s(),a(g,{key:0},[e(n).verdict===e(O).OK?(s(),a("div",{key:0,class:A(e(o)!==""&&"cursor-pointer"),onClick:f},[r("div",{class:A(["text-center","font-bold",t.practice?"text-blue-500":"text-green-500"])},[yt,e(n).dirty?(s(),a("span",$t,i(e(n).dirty),1)):N("v-if",!0)],2),t.practice?N("v-if",!0):(s(),a("div",xt,[r("span",null,i(x(e(n).relativeTime)),1)]))],2)):(s(),a("div",Ct,[r("div",Nt,[Ft,r("span",null,i((y=e(n).dirty)!=null?y:1),1)])]))],2112)):N("v-if",!0)}}}),Tt={key:0,class:"mt-4 box"},At={key:0,class:"font-600"},Mt={key:1,class:"font-600"},Et={class:"flex items-center"},wt={key:0},Ot=B({props:{contest:null},setup(t){const m=t,{contest:n}=I(m),o=T(()=>n.value.type.startsWith("codeforces")),f=T(()=>n.value.type.startsWith("atcoder")),x=c=>c.author.participantType===S.OUT_OF_COMPETITION,u=c=>c.author.participantType===S.PRACTICE,p=c=>typeof c=="string"?c:String.fromCharCode(65+c),y=T(()=>{var c,F;return(F=(c=n.value.problems)==null?void 0:c.sort((l,v)=>{const h=typeof l.index=="string"?l.index.charCodeAt(0)-65:l.index,_=typeof v.index=="string"?v.index.charCodeAt(0)-65:v.index;return h-_}))!=null?F:[]}),E=T(()=>{var F,l,v;if(j(n.value.problems))return{standings:[],firstBlood:[]};if(j(n.value.standings))return{standings:[],firstBlood:[]};const c=Array((F=n.value.problems)==null?void 0:F.length);for(const h of n.value.standings){const _=Array((l=n.value.problems)==null?void 0:l.length);for(const b of h.submissions){const $=b.problemIndex;if(b.verdict===O.OK&&!u(h)&&(j(c[$])||c[$].relativeTime>b.relativeTime)&&(c[$]=b),j(_[$]))_[$]=b;else{const R=_[$];((v=R==null?void 0:R.verdict)!=null?v:O.FAILED)!==O.OK&&(_[$]=b)}}Reflect.set(h,"result",_)}return{standings:n.value.standings,firstBlood:c}});return(c,F)=>e(n).standings?(s(),a("div",Tt,[d(e(G),{data:e(E).standings,mobile:1080},{columns:k(({row:l})=>[d(e(U),{label:"#",align:"center",width:"4em"},{default:k(()=>[u(l)?(s(),a("span",Mt,"-")):(s(),a("span",At,i(l.rank),1))]),_:2},1024),d(e(U),{label:e(o)?"Handle":""},{default:k(()=>[r("div",Et,[x(l)?(s(),M(e(at),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):N("v-if",!0),r("div",null,[e(o)?(s(),M(ft,{key:0,author:l.author},null,8,["author"])):e(f)?(s(),M(kt,{key:1,author:l.author},null,8,["author"])):(s(),M(lt,{key:2,author:l.author},null,8,["author"]))])])]),_:2},1032,["label"]),d(e(U),{label:"\u89E3\u51B3",align:"center",width:"4em"},{default:k(()=>[r("span",null,i(l.solved),1)]),_:2},1024),d(e(U),{label:"\u7F5A\u65F6",align:"center",width:"4em"},{default:k(()=>[u(l)?N("v-if",!0):(s(),a("span",wt,i(e(W)(l.penalty).value),1))]),_:2},1024),(s(!0),a(g,null,w(e(y),(v,h)=>{var _,b;return s(),M(e(U),{key:v.index,label:p(v.index),center:"",class:A(e(C)(l)&&e(C)(e(E).firstBlood[h])&&e(C)(l.result[h])&&l.result[h].verdict===e(O).OK&&l.result[h].relativeTime<=((b=(_=e(E).firstBlood[h])==null?void 0:_.relativeTime)!=null?b:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:k(()=>[d(Bt,{result:l.result[h],practice:u(l)},null,8,["result","practice"])]),_:2},1032,["label","class"])}),128))]),_:1},8,["data"])])):N("v-if",!0)}}),Ut={class:"mb-4"},Rt={class:"info-box border-left"},jt={key:0},Dt=["href"],It=["href"],Jt=B({props:{contest:null},setup(t){return(m,n)=>(s(),a("div",null,[r("h2",Ut,i(t.contest.name),1),r("div",Rt,[r("p",null," \u65F6\u95F4\uFF1A"+i(e(H)(t.contest.startTime).value)+" \u81F3 "+i(e(H)(t.contest.startTime+t.contest.duration).value),1),r("p",null,"\u65F6\u957F\uFF1A"+i(e(q)(t.contest.duration).value),1),r("p",null,"\u4EBA\u6570\uFF1A"+i(t.contest.participantNumber)+" \u4EBA",1),t.contest.contestUrl||t.contest.standingsUrl?(s(),a("p",jt,[r("a",{href:t.contest.contestUrl,target:"_blank"},"\u6BD4\u8D5B\u4E3B\u9875",8,Dt),r("a",{href:t.contest.standingsUrl,target:"_blank",class:"ml-2"},"\u5B8C\u6574\u699C\u5355",8,It)])):N("v-if",!0)]),d(Ot,{contest:t.contest},null,8,["contest"])]))}});export{Jt as _,zt as f,K as h};
