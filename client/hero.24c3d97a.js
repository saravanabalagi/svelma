import{S as s,i as t,s as a,c as n,a as e,j as r,f as i,n as o,m as c,o as l,p,r as d,d as h,e as f,t as u,b as m,g as $,h as b,k as y,l as v,ae as g,af as E,A as H,Y as T,Z as w,ai as j}from"./client.09dfd7c5.js";import"./Code.37ebd5e4.js";import{D as k}from"./DocHeader.ad511791.js";import{E as x}from"./Example.a6d62388.js";function D(s){let t,a,n,r,o,l,p,d,H,T,w;return{c(){t=f("section"),a=f("div"),n=f("div"),r=f("h1"),o=u("Title"),l=e(),p=f("h2"),d=u("Subtitle"),this.h()},l(s){t=m(s,"SECTION",{class:!0});var e=$(t);a=m(e,"DIV",{class:!0});var c=$(a);n=m(c,"DIV",{class:!0});var f=$(n);r=m(f,"H1",{class:!0});var u=$(r);o=b(u,"Title"),u.forEach(h),l=i(f),p=m(f,"H2",{class:!0});var y=$(p);d=b(y,"Subtitle"),y.forEach(h),f.forEach(h),c.forEach(h),e.forEach(h),this.h()},h(){y(r,"class","title"),y(p,"class","subtitle"),y(n,"class","container"),y(a,"class","hero-body"),y(t,"class",H="hero "+s[0])},m(s,e){c(s,t,e),v(t,a),v(a,n),v(n,r),v(r,o),v(n,l),v(n,p),v(p,d),w=!0},p(s,a){(!w||1&a&&H!==(H="hero "+s[0]))&&y(t,"class",H)},i(s){w||(g((()=>{T||(T=E(t,j,{},!0)),T.run(1)})),w=!0)},o(s){T||(T=E(t,j,{},!1)),T.run(0),w=!1},d(s){s&&h(t),s&&T&&T.end()}}}function S(s){let t,a,n,r,o,d,g,E,j,k,x,S=s[0]&&D(s);return{c(){t=f("div"),a=f("button"),n=u("Update Hero"),r=e(),o=f("br"),d=e(),g=f("br"),E=e(),S&&S.c(),this.h()},l(s){t=m(s,"DIV",{slot:!0});var e=$(t);a=m(e,"BUTTON",{class:!0});var c=$(a);n=b(c,"Update Hero"),c.forEach(h),r=i(e),o=m(e,"BR",{}),d=i(e),g=m(e,"BR",{}),E=i(e),S&&S.l(e),e.forEach(h),this.h()},h(){y(a,"class","button is-primary"),y(t,"slot","preview")},m(e,i){c(e,t,i),v(t,a),v(a,n),v(t,r),v(t,o),v(t,d),v(t,g),v(t,E),S&&S.m(t,null),j=!0,k||(x=H(a,"click",s[1]),k=!0)},p(s,a){s[0]?S?(S.p(s,a),1&a&&l(S,1)):(S=D(s),S.c(),l(S,1),S.m(t,null)):S&&(T(),p(S,1,1,(()=>{S=null})),w())},i(s){j||(l(S),j=!0)},o(s){p(S),j=!1},d(s){s&&h(t),S&&S.d(),k=!1,x()}}}function I(s){let t,a,f,u;return t=new k({props:{title:"Hero",subtitle:"Hero headers"}}),f=new x({props:{horizontal:!0,code:"<script>\n  import { slide } from 'svelte/transition'\n\n  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']\n  let type = 'is-primary'\n\n  async function update() {\n    type = ''\n\n    setTimeout(() => {\n      type = types[Math.floor(Math.random() * types.length)];\n    }, 1000)\n  }\n<\/script>\n\n<button class=\"button is-primary\" on:click={update}>Update Hero</button>\n\n<br />\n<br />\n\n{#if type}\n  <section class=\"hero {type}\" transition:slide>\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <h1 class=\"title\">\n          Title\n        </h1>\n        <h2 class=\"subtitle\">\n          Subtitle\n        </h2>\n      </div>\n    </div>\n  </section>\n{/if}",$$slots:{preview:[S]},$$scope:{ctx:s}}}),{c(){n(t.$$.fragment),a=e(),n(f.$$.fragment)},l(s){r(t.$$.fragment,s),a=i(s),r(f.$$.fragment,s)},m(s,n){o(t,s,n),c(s,a,n),o(f,s,n),u=!0},p(s,[t]){const a={};9&t&&(a.$$scope={dirty:t,ctx:s}),f.$set(a)},i(s){u||(l(t.$$.fragment,s),l(f.$$.fragment,s),u=!0)},o(s){p(t.$$.fragment,s),p(f.$$.fragment,s),u=!1},d(s){d(t,s),s&&h(a),d(f,s)}}}function M(s,t,a){const n=["is-primary","is-success","is-danger","is-warning","is-info","is-link"];let e="is-primary";return[e,async function(){a(0,e=""),setTimeout((()=>{a(0,e=n[Math.floor(Math.random()*n.length)])}),1e3)}]}class U extends s{constructor(s){super(),t(this,s,M,I,a,{})}}export{U as default};
