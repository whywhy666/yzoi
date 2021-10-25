var G=Object.defineProperty;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var k=(f,n,l)=>n in f?G(f,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[n]=l,y=(f,n)=>{for(var l in n||(n={}))I.call(n,l)&&k(f,l,n[l]);if(B)for(var l of B(n))J.call(n,l)&&k(f,l,n[l]);return f};import{u as K}from"./users.6dda8305.js";import{C as P,a as u}from"./c-table.ce87c176.js";import{_ as Q}from"./user-link.2b93b2aa.js";import{_ as S}from"./cf-rating-color.6c423047.js";import{b as X}from"./overview.6449ed91.js";import{d as Y,i as Z,j as w,o as A,c as F,b as c,w as r,u as a,a as m,t as d,g as T,s as tt,f as h,e as et}from"./index.5d5fc7a4.js";import"./load.b9090f49.js";const st={class:"divide-y"},nt=m("h2",{class:"mb-4"},"Codeforces",-1),at={class:"font-600"},ot=["href"],lt={key:0},ct={class:"mt-4 pt-4"},rt={class:"text-gray-400"},Ct=Y({setup(f){const n=Z(X),l=e=>e.startsWith("codeforces"),j=e=>{const s=e.submissions.filter(({type:t})=>l(t)),_=s.length,o=s.filter(({v:t})=>t===1).length,L=s.filter(({t})=>t>=n.value).length,M=s.filter(({t,v:i})=>t>=n.value&&i===1).length,U=e.contests.filter(({type:t,t:i})=>i>=n.value&&l(t)).length,C=s.filter(({t,v:i,d:g})=>t>=n.value&&i===1&&tt(g)),v=C.reduce((t,i)=>{var g;return t+((g=i.d)!=null?g:0)},0),W=Math.ceil(C.length>0?v/C.length:0),p=s.filter(({v:t})=>t===1).sort((t,i)=>i.t-t.t),q=p.length>0?p[0].t:0,b=e.handles.filter(t=>l(t.type));let D=b.length>0?b[0]:"";const z=b.reduce((t,i)=>{const g=i;return g.codeforces.rating>t?(D=g.handle,g.codeforces.rating):t},0);return y({subCount:_,okCount:o,recentSubCount:L,recentOkCount:M,recentContest:U,recentDiffcult:v,recentAvgDiffcult:W,lastSolveTime:q,rating:z,handle:D},e)},x=w(()=>K.map(j)),O=(e,s)=>e.rating-s.rating,E=(e,s)=>e.okCount-s.okCount,N=(e,s)=>e.recentOkCount-s.recentOkCount,R=(e,s)=>e.recentAvgDiffcult-s.recentAvgDiffcult,V=(e,s)=>e.contests.length-s.contests.length,$=(e,s)=>e.recentContest-s.recentContest,H=(e,s)=>e.lastSolveTime-s.lastSolveTime;return(e,s)=>(A(),F("div",st,[nt,c(a(P),{data:a(x),cache:"codeforces","default-sort":"\u6700\u8FD1\u901A\u8FC7","default-sort-order":"desc"},{columns:r(({index:_,row:o})=>[c(a(u),{label:"#",width:"3em",align:"center"},{default:r(()=>[m("span",at,d(_+1),1)]),_:2},1024),c(a(u),{label:"\u59D3\u540D"},{default:r(()=>[c(Q,{name:o.name},null,8,["name"])]),_:2},1024),c(a(u),{label:"Handle"},{default:r(()=>[m("a",{href:`https://codeforces.com/profile/${o.handle}`,target:"_blank"},[c(a(S),{rating:o.rating},{default:r(()=>[h(d(o.handle),1)]),_:2},1032,["rating"])],8,ot)]),_:2},1024),c(a(u),{label:"Rating",sort:O,align:"right"},{default:r(()=>[c(a(S),{rating:o.rating,"disable-legendary":""},{default:r(()=>[h(d(o.rating),1)]),_:2},1032,["rating"])]),_:2},1024),c(a(u),{label:"\u6700\u8FD1\u901A\u8FC7",width:"7em",align:"right",sort:N},{default:r(()=>[h(d(o.recentOkCount),1)]),_:2},1024),c(a(u),{label:"\u6700\u8FD1\u5E73\u5747\u96BE\u5EA6",width:"10em",align:"right",sort:R},{default:r(()=>[h(d(o.recentAvgDiffcult),1)]),_:2},1024),c(a(u),{label:"\u6700\u8FD1\u6BD4\u8D5B",width:"7em",align:"right",sort:$},{default:r(()=>[h(d(o.recentContest),1)]),_:2},1024),c(a(u),{label:"\u6700\u65B0\u901A\u8FC7",width:"10em",align:"center",sort:H},{default:r(()=>[o.lastSolveTime>0?(A(),F("span",lt,d(a(T)(o.lastSolveTime).value),1)):et("v-if",!0)]),_:2},1024),c(a(u),{label:"\u901A\u8FC7",width:"6em",align:"right",sort:E},{default:r(()=>[h(d(o.okCount),1)]),_:2},1024),c(a(u),{label:"\u6BD4\u8D5B\u573A\u6B21",width:"7em",align:"right",sort:V},{default:r(()=>[h(d(o.contests.length),1)]),_:2},1024)]),_:1},8,["data"]),m("div",ct,[m("span",rt,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+d(a(T)(n.value).value),1)])]))}});export{Ct as default};
