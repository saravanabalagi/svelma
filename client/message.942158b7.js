import{S as e,i as t,s,c as n,a as i,j as a,f as o,n as r,m as c,o as l,p as $,r as m,d as p,B as d,M as u,e as f,b as g,g as h,k as v,l as b,t as x,h as k}from"./client.09dfd7c5.js";import{D as w}from"./DocHeader.ad511791.js";import{E as M}from"./Example.a6d62388.js";import"./Code.37ebd5e4.js";function j(e){let t;return{c(){t=x("Toggle")},l(e){t=k(e,"Toggle")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function D(e){let t;return{c(){t=x("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},l(e){t=k(e,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Fusce id fermentum quam. Proin sagittis, nibh id\n      hendrerit imperdiet, elit sapien laoreet elit")},m(e,s){c(e,t,s)},d(e){e&&p(t)}}}function y(e){let t,s,x,k,w;return s=new d({props:{class:"block",$$slots:{default:[j]},$$scope:{ctx:e}}}),s.$on("click",e[1]),k=new u({props:{active:!e[0],title:"Default",$$slots:{default:[D]},$$scope:{ctx:e}}}),k.$on("close",e[2]),{c(){t=f("div"),n(s.$$.fragment),x=i(),n(k.$$.fragment),this.h()},l(e){t=g(e,"DIV",{slot:!0});var n=h(t);a(s.$$.fragment,n),x=o(n),a(k.$$.fragment,n),n.forEach(p),this.h()},h(){v(t,"slot","preview")},m(e,n){c(e,t,n),r(s,t,null),b(t,x),r(k,t,null),w=!0},p(e,t){const n={};8&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const i={};1&t&&(i.active=!e[0]),8&t&&(i.$$scope={dirty:t,ctx:e}),k.$set(i)},i(e){w||(l(s.$$.fragment,e),l(k.$$.fragment,e),w=!0)},o(e){$(s.$$.fragment,e),$(k.$$.fragment,e),w=!1},d(e){e&&p(t),m(s),m(k)}}}function B(e){let t,s,d,u;return t=new w({props:{title:"Message",subtitle:"Message blocks to convey information"}}),d=new M({props:{code:'<script>\n  import { Button, Message } from \'svelma\'\n\n  let open\n<\/script>\n\n<Button class="block" on:click={() => open = !open}>Toggle</Button>\n<Message active={!open} title="Default"\n  on:close={active => open = active}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  Fusce id fermentum quam. Proin sagittis, nibh id\n  hendrerit imperdiet, elit sapien laoreet elit\n</Message>',$$slots:{preview:[y]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment),s=i(),n(d.$$.fragment)},l(e){a(t.$$.fragment,e),s=o(e),a(d.$$.fragment,e)},m(e,n){r(t,e,n),c(e,s,n),r(d,e,n),u=!0},p(e,[t]){const s={};9&t&&(s.$$scope={dirty:t,ctx:e}),d.$set(s)},i(e){u||(l(t.$$.fragment,e),l(d.$$.fragment,e),u=!0)},o(e){$(t.$$.fragment,e),$(d.$$.fragment,e),u=!1},d(e){m(t,e),e&&p(s),m(d,e)}}}function q(e,t,s){let n;return[n,()=>s(0,n=!n),e=>s(0,n=e)]}class E extends e{constructor(e){super(),t(this,e,q,B,s,{})}}export{E as default};