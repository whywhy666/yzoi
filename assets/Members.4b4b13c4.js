var w=Object.defineProperty;var _=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(d,s,n)=>s in d?w(d,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[s]=n,p=(d,s)=>{for(var n in s||(s={}))$.call(s,n)&&g(d,n,s[n]);if(_)for(var n of _(s))L.call(s,n)&&g(d,n,s[n]);return d};import{u as U}from"./users.6dda8305.js";import{C as q,a as i}from"./c-table.ce87c176.js";import{_ as z}from"./user-link.2b93b2aa.js";import{b as G}from"./overview.6449ed91.js";import{d as H,i as I,j as J,o as k,c as v,b as u,w as c,u as o,a as h,t as r,g as B,f as m,e as K}from"./index.5d5fc7a4.js";import"./load.b9090f49.js";const M={class:"divide-y"},P=h("h2",{class:"mb-4"},"\u6210\u5458",-1),Q={class:"font-600"},W={key:0},X={class:"mt-4 pt-4"},Y={class:"text-gray-400"},ut=H({setup(d){const s=I(G),n=t=>{const e=t.submissions.length,b=t.submissions.filter(({v:l})=>l!==0).length,a=(e!==0?(100*b/e).toFixed(1):"0.0")+" %",O=t.submissions.filter(({t:l})=>l>=s.value).length,N=t.submissions.filter(({t:l,v:C})=>l>=s.value&&C!==0).length,E=t.contests.filter(({t:l})=>l>=s.value).length,f=t.submissions.filter(({v:l})=>l===1).sort((l,C)=>C.t-l.t),V=f.length>0?f[0].t:0;return p({subCount:e,okCount:b,okRate:a,recentSubCount:O,recentOkCount:N,recentContest:E,lastSolveTime:V},t)},S=J(()=>U.map(n)),D=(t,e)=>t.subCount-e.subCount,F=(t,e)=>t.okCount-e.okCount,y=(t,e)=>t.recentSubCount-e.recentSubCount,T=(t,e)=>t.recentOkCount-e.recentOkCount,x=(t,e)=>Number.parseFloat(t.okRate)-Number.parseFloat(e.okRate),A=(t,e)=>t.contests.length-e.contests.length,R=(t,e)=>t.recentContest-e.recentContest,j=(t,e)=>t.lastSolveTime-e.lastSolveTime;return(t,e)=>(k(),v("div",M,[P,u(o(q),{data:o(S),cache:"members","default-sort":"\u6700\u8FD1\u901A\u8FC7","default-sort-order":"desc"},{columns:c(({index:b,row:a})=>[u(o(i),{label:"#",width:"3em",align:"center"},{default:c(()=>[h("span",Q,r(b+1),1)]),_:2},1024),u(o(i),{label:"\u59D3\u540D"},{default:c(()=>[u(z,{name:a.name},null,8,["name"])]),_:2},1024),u(o(i),{label:"\u6700\u8FD1\u901A\u8FC7",width:"7em",align:"right",sort:T},{default:c(()=>[m(r(a.recentOkCount),1)]),_:2},1024),u(o(i),{label:"\u6700\u8FD1\u63D0\u4EA4",width:"7em",align:"right",sort:y},{default:c(()=>[m(r(a.recentSubCount),1)]),_:2},1024),u(o(i),{label:"\u6700\u8FD1\u6BD4\u8D5B",width:"7em",align:"right",sort:R},{default:c(()=>[m(r(a.recentContest),1)]),_:2},1024),u(o(i),{label:"\u6700\u65B0\u901A\u8FC7",width:"10em",align:"center",sort:j},{default:c(()=>[a.lastSolveTime>0?(k(),v("span",W,r(o(B)(a.lastSolveTime).value),1)):K("v-if",!0)]),_:2},1024),u(o(i),{label:"\u901A\u8FC7",width:"6em",align:"right",sort:F},{default:c(()=>[m(r(a.okCount),1)]),_:2},1024),u(o(i),{label:"\u63D0\u4EA4",width:"6em",align:"right",sort:D},{default:c(()=>[m(r(a.subCount),1)]),_:2},1024),u(o(i),{label:"\u901A\u8FC7\u7387",width:"6em",align:"right",sort:x},{default:c(()=>[m(r(a.okRate),1)]),_:2},1024),u(o(i),{label:"\u6BD4\u8D5B\u573A\u6B21",width:"7em",align:"right",sort:A},{default:c(()=>[m(r(a.contests.length),1)]),_:2},1024)]),_:1},8,["data"]),h("div",X,[h("span",Y,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+r(o(B)(s.value).value),1)])]))}});export{ut as default};
