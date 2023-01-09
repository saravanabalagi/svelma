import{S as t,i as e,s as n,c as o,a as s,e as r,t as a,j as c,f as i,b as l,g as m,h as p,d as $,k as f,n as u,m as h,l as d,o as g,p as w,r as y,B as D,a1 as v,a2 as E}from"./client.09dfd7c5.js";import"./Code.37ebd5e4.js";import{D as b}from"./DocHeader.ad511791.js";import{E as x}from"./Example.a6d62388.js";import{J as j}from"./JSDoc.3a60f6b6.js";function k(t){let e;return{c(){e=a("Dialog")},l(t){e=p(t,"Dialog")},m(t,n){h(t,e,n)},d(t){t&&$(e)}}}function P(t){let e;return{c(){e=a("Confirm")},l(t){e=p(t,"Confirm")},m(t,n){h(t,e,n)},d(t){t&&$(e)}}}function B(t){let e;return{c(){e=a("Confirm (custom)")},l(t){e=p(t,"Confirm (custom)")},m(t,n){h(t,e,n)},d(t){t&&$(e)}}}function C(t){let e,n,a,p,v,E,b;return n=new D({props:{type:"is-primary",$$slots:{default:[k]},$$scope:{ctx:t}}}),n.$on("click",t[4]),p=new D({props:{type:"is-info",$$slots:{default:[P]},$$scope:{ctx:t}}}),p.$on("click",t[5]),E=new D({props:{type:"is-danger",$$slots:{default:[B]},$$scope:{ctx:t}}}),E.$on("click",t[6]),{c(){e=r("div"),o(n.$$.fragment),a=s(),o(p.$$.fragment),v=s(),o(E.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var o=m(e);c(n.$$.fragment,o),a=i(o),c(p.$$.fragment,o),v=i(o),c(E.$$.fragment,o),o.forEach($),this.h()},h(){f(e,"slot","preview")},m(t,o){h(t,e,o),u(n,e,null),d(e,a),u(p,e,null),d(e,v),u(E,e,null),b=!0},p(t,e){const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};1024&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s);const r={};1024&e&&(r.$$scope={dirty:e,ctx:t}),E.$set(r)},i(t){b||(g(n.$$.fragment,t),g(p.$$.fragment,t),g(E.$$.fragment,t),b=!0)},o(t){w(n.$$.fragment,t),w(p.$$.fragment,t),w(E.$$.fragment,t),b=!1},d(t){t&&$(e),y(n),y(p),y(E)}}}function T(t){let e;return{c(){e=a("Prompt")},l(t){e=p(t,"Prompt")},m(t,n){h(t,e,n)},d(t){t&&$(e)}}}function I(t){let e;return{c(){e=a("Date Prompt")},l(t){e=p(t,"Date Prompt")},m(t,n){h(t,e,n)},d(t){t&&$(e)}}}function O(t){let e,n,a,p,v;return n=new D({props:{type:"is-primary",$$slots:{default:[T]},$$scope:{ctx:t}}}),n.$on("click",t[7]),p=new D({props:{type:"is-link",$$slots:{default:[I]},$$scope:{ctx:t}}}),p.$on("click",t[8]),{c(){e=r("div"),o(n.$$.fragment),a=s(),o(p.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var o=m(e);c(n.$$.fragment,o),a=i(o),c(p.$$.fragment,o),o.forEach($),this.h()},h(){f(e,"slot","preview")},m(t,o){h(t,e,o),u(n,e,null),d(e,a),u(p,e,null),v=!0},p(t,e){const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};1024&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){v||(g(n.$$.fragment,t),g(p.$$.fragment,t),v=!0)},o(t){w(n.$$.fragment,t),w(p.$$.fragment,t),v=!1},d(t){t&&$(e),y(n),y(p)}}}function Y(t){let e,n,D,v,E,k,P,B,T,I,Y,H,U,q,A,S,W,J,V,R,z,F,G,K,L,M,N,Q,X,Z,_,tt,et,nt,ot,st,rt,at,ct,it,lt,mt,pt;return e=new b({props:{title:"Dialog",subtitle:"User alerts, promps, and confirmation dialogs"}}),z=new x({props:{code:"<script>\n  import { Button, Dialog, Toast } from 'svelma'\n\n  function alert() {\n    Dialog.alert('Alles ist gut')\n  }\n\n  const thenHandler = result => Toast.create(`You ${result ? 'confirmed' : 'canceled'}`)\n\n  function confirm(type) {\n    switch(type) {\n      case 'custom':\n        return Dialog.confirm({\n          message: 'This is a custom confirmation message',\n          title: \"I'm a title!\",\n          type: 'is-danger',\n          icon: 'times-circle'\n        })\n        .then(thenHandler)\n      default:\n        Dialog.confirm('Shall we dance?')\n        .then(thenHandler)\n    }\n  }\n<\/script>\n\n<Button type=\"is-primary\" on:click={() => alert()}>Dialog</Button>\n<Button type=\"is-info\" on:click={() => confirm()}>Confirm</Button>\n<Button type=\"is-danger\" on:click={() => confirm('custom')}>Confirm (custom)</Button>\n",$$slots:{preview:[C]},$$scope:{ctx:t}}}),it=new x({props:{code:"<script>\n  import { Button, Dialog, Toast } from 'svelma'\n\n  function prompt(opts) {\n    Dialog.prompt({\n      message: \"What is your quest?\",\n      ...opts\n    })\n    .then(prompt => Toast.create(`Your answer was: '${prompt}'`))\n  }\n<\/script>\n\n<Button type=\"is-primary\" on:click={() => prompt()}>Prompt</Button>\n<Button type=\"is-link\" on:click={() => prompt({ message: 'Which date?', inputProps: { type: 'date' }})}>Date Prompt</Button>",$$slots:{preview:[O]},$$scope:{ctx:t}}}),mt=new j({props:{jsdoc:t[0]}}),{c(){o(e.$$.fragment),n=s(),D=r("p"),v=a("Alert and Dialog"),E=s(),k=r("p"),P=a("Use "),B=r("code"),T=a("Dialog.alert()"),I=a(" and "),Y=r("code"),H=a("Dialog.confirm()"),U=a(" to create these kinds of dialogs.\nThe methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the\nvalue will be "),q=r("code"),A=a("false"),S=a(". If the user clicks the confirm button the value will be "),W=r("code"),J=a("true"),V=a(".\n\nThe first argument can either be an object of options or a string to use as the message."),R=s(),o(z.$$.fragment),F=s(),G=r("hr"),K=s(),L=r("p"),M=a("Prompt"),N=s(),Q=r("p"),X=a("Use "),Z=r("code"),_=a("Dialog.prompt()"),tt=a(" to programmatically create prompts for user input. By default the\ndialog will be created with a required text input. You can control the props (attributes) on the prompt with the\n"),et=r("code"),nt=a("inputProps"),ot=a(" prop.\n\n"),st=r("code"),rt=a("prompt()"),at=a(" returns a promise that will be resolved with the prompt input value if the user confirms, or null\nif they cancel/close."),ct=s(),o(it.$$.fragment),lt=s(),o(mt.$$.fragment),this.h()},l(t){c(e.$$.fragment,t),n=i(t),D=l(t,"P",{class:!0});var o=m(D);v=p(o,"Alert and Dialog"),o.forEach($),E=i(t),k=l(t,"P",{class:!0});var s=m(k);P=p(s,"Use "),B=l(s,"CODE",{});var r=m(B);T=p(r,"Dialog.alert()"),r.forEach($),I=p(s," and "),Y=l(s,"CODE",{});var a=m(Y);H=p(a,"Dialog.confirm()"),a.forEach($),U=p(s," to create these kinds of dialogs.\nThe methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the\nvalue will be "),q=l(s,"CODE",{});var f=m(q);A=p(f,"false"),f.forEach($),S=p(s,". If the user clicks the confirm button the value will be "),W=l(s,"CODE",{});var u=m(W);J=p(u,"true"),u.forEach($),V=p(s,".\n\nThe first argument can either be an object of options or a string to use as the message."),s.forEach($),R=i(t),c(z.$$.fragment,t),F=i(t),G=l(t,"HR",{class:!0}),K=i(t),L=l(t,"P",{class:!0});var h=m(L);M=p(h,"Prompt"),h.forEach($),N=i(t),Q=l(t,"P",{class:!0});var d=m(Q);X=p(d,"Use "),Z=l(d,"CODE",{});var g=m(Z);_=p(g,"Dialog.prompt()"),g.forEach($),tt=p(d," to programmatically create prompts for user input. By default the\ndialog will be created with a required text input. You can control the props (attributes) on the prompt with the\n"),et=l(d,"CODE",{});var w=m(et);nt=p(w,"inputProps"),w.forEach($),ot=p(d," prop.\n\n"),st=l(d,"CODE",{});var y=m(st);rt=p(y,"prompt()"),y.forEach($),at=p(d," returns a promise that will be resolved with the prompt input value if the user confirms, or null\nif they cancel/close."),d.forEach($),ct=i(t),c(it.$$.fragment,t),lt=i(t),c(mt.$$.fragment,t),this.h()},h(){f(D,"class","title is-4"),f(k,"class","content"),f(G,"class","is-medium"),f(L,"class","title is-4"),f(Q,"class","content")},m(t,o){u(e,t,o),h(t,n,o),h(t,D,o),d(D,v),h(t,E,o),h(t,k,o),d(k,P),d(k,B),d(B,T),d(k,I),d(k,Y),d(Y,H),d(k,U),d(k,q),d(q,A),d(k,S),d(k,W),d(W,J),d(k,V),h(t,R,o),u(z,t,o),h(t,F,o),h(t,G,o),h(t,K,o),h(t,L,o),d(L,M),h(t,N,o),h(t,Q,o),d(Q,X),d(Q,Z),d(Z,_),d(Q,tt),d(Q,et),d(et,nt),d(Q,ot),d(Q,st),d(st,rt),d(Q,at),h(t,ct,o),u(it,t,o),h(t,lt,o),u(mt,t,o),pt=!0},p(t,[e]){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),z.$set(n);const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),it.$set(o);const s={};1&e&&(s.jsdoc=t[0]),mt.$set(s)},i(t){pt||(g(e.$$.fragment,t),g(z.$$.fragment,t),g(it.$$.fragment,t),g(mt.$$.fragment,t),pt=!0)},o(t){w(e.$$.fragment,t),w(z.$$.fragment,t),w(it.$$.fragment,t),w(mt.$$.fragment,t),pt=!1},d(t){y(e,t),t&&$(n),t&&$(D),t&&$(E),t&&$(k),t&&$(R),y(z,t),t&&$(F),t&&$(G),t&&$(K),t&&$(L),t&&$(N),t&&$(Q),t&&$(ct),y(it,t),t&&$(lt),y(mt,t)}}}async function H(){const t=await this.fetch("components/dialog.json");return{jsdoc:await t.json()}}function U(t,e,n){let{jsdoc:o}=e;function s(){v.alert("Alles ist gut")}const r=t=>E.create("You "+(t?"confirmed":"canceled"));function a(t){if("custom"===t)return v.confirm({message:"This is a custom confirmation message",title:"I'm a title!",type:"is-danger",icon:"times-circle"}).then(r);v.confirm("Shall we dance?").then(r)}function c(t){v.prompt({message:"What is your quest?",...t}).then((t=>E.create(`Your answer was: '${t}'`)))}return t.$$set=t=>{"jsdoc"in t&&n(0,o=t.jsdoc)},[o,s,a,c,()=>s(),()=>a(),()=>a("custom"),()=>c(),()=>c({message:"Which date?",inputProps:{type:"date"}})]}class q extends t{constructor(t){super(),e(this,t,U,Y,n,{jsdoc:0})}}export{q as default,H as preload};