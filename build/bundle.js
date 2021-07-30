var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n){return t.set(n),e}function l(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function _(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function v(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let $;function y(t){$=t}const x=[],C=[],S=[],k=[],w=Promise.resolve();let I=!1;function E(t){S.push(t)}let N=!1;const L=new Set;function M(){if(!N){N=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];y(e),T(e.$$)}for(y(null),x.length=0;C.length;)C.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];L.has(e)||(L.add(e),e())}S.length=0}while(x.length);for(;k.length;)k.pop()();I=!1,N=!1,L.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const A=new Set;function j(t,e){-1===t.$$.dirty[0]&&(x.push(t),I||(I=!0,w.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(a,i,u,l,s,f,d,p=[-1]){const h=$;y(a);const g=a.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:i.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||h.$$.root};d&&d(g.root);let b=!1;if(g.ctx=u?u(a,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&j(a,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();i.intro&&((m=a.$$.fragment)&&m.i&&(A.delete(m),m.i(_))),function(t,n,a,i){const{fragment:u,on_mount:l,on_destroy:c,after_update:s}=t.$$;u&&u.m(n,a),i||E((()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(E)}(a,i.target,i.anchor,i.customElement),M()}var m,_;y(h)}const H=[];function O(e,n=t){let o;const r=new Set;function i(t){if(a(e,t)&&(e=t,o)){const t=!H.length;for(const t of r)t[1](),H.push(t,e);if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,u=t){const l=[a,u];return r.add(l),1===r.size&&(o=n(i)||t),a(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function q(e){let n,r,a,i,u,v,$,y,x,C,S,k,w,I,N,L,M,T,A,j,z,H,O,q,D,G,P,R,F,J,K,Q,U,V,W,X,Y,Z,tt,et,nt,ot,rt,at,it,ut,lt,ct,st,ft,dt,pt,ht,gt,bt,mt,_t,vt,$t,yt,xt,Ct,St,kt,wt,It,Et,Nt,Lt,Mt,Tt,At,jt,zt,Ht=B(e[2],10)+"",Ot=B(e[1],10)+"",qt=B(e[0],10)+"",Bt=B(e[11],1)+"",Dt=B(e[10],1)+"",Gt=B(e[9],1)+"";return{c(){n=s("div"),r=s("h1"),r.textContent="每日熱量及飲食建議",a=d(),i=s("div"),u=s("label"),v=f("體重[kg]：\n\t\t"),$=s("input"),y=d(),x=s("label"),C=f("年齡[歲]：\n\t\t"),S=s("input"),k=d(),w=s("label"),I=f("身高[cm]：\n\t\t"),N=s("input"),L=d(),M=s("label"),T=f("生理性別：\n\t\t"),A=s("select"),j=s("option"),j.textContent="男",z=s("option"),z.textContent="女",H=d(),O=s("label"),q=f("每週活動量：\n\t\t"),D=s("select"),G=s("option"),G.textContent="運動 0-1 小時",P=s("option"),P.textContent="運動 1-3 小時",R=s("option"),R.textContent="運動 4-6 小時",F=s("option"),F.textContent="運動 7-9 小時",J=s("option"),J.textContent="運動 10+ 小時",K=d(),Q=s("label"),U=f("訓練目標：\n\t\t"),V=s("select"),W=s("option"),W.textContent="增肌",X=s("option"),X.textContent="減脂",Y=s("option"),Y.textContent="維持",Z=d(),tt=s("br"),et=d(),nt=s("div"),ot=s("h2"),ot.textContent="計算結果",rt=d(),at=s("p"),it=f("BMR 基礎代謝率[大卡]："),ut=f(Ht),lt=d(),ct=s("p"),st=f("TDEE 每日總消耗熱量[大卡]："),ft=f(Ot),dt=d(),pt=s("p"),ht=f("目標熱量[大卡]："),gt=f(qt),bt=d(),mt=s("h3"),mt.textContent="每日三大營養素建議",_t=d(),vt=s("p"),$t=f("蛋白質[g]："),yt=f(Bt),xt=d(),Ct=s("p"),St=f("碳水化合物[g]："),kt=f(Dt),wt=d(),It=s("p"),Et=f("脂肪[g]："),Nt=f(Gt),Lt=d(),Mt=s("p"),Mt.innerHTML="<strong>強烈建議搭配阻力訓練以達最佳效果</strong>",Tt=d(),At=s("div"),At.innerHTML='<h2>關於</h2> \n\t<p>本程式由 wancat 開發，原始碼位於 <a href="https://github.com/lancatlin/eat-what-you-need" target="_blank">GitHub</a></p> \n\t<h3>對你有幫助嗎？拍手鼓勵我！</h3> \n\t<iframe title="LikeCoin" class="LikeCoin" height="235" src="https://button.like.co/in/embed/wancatserver/button?referrer=https://lancatlin.github.io/eat-what-you-need/" width="100%" frameborder="0"></iframe>',h($,"type","number"),h($,"min","3"),h($,"max","200"),h($,"step","0.1"),h(S,"type","number"),h(S,"min","0"),h(S,"max","200"),h(S,"step","1"),h(N,"type","number"),h(N,"min","0"),h(N,"max","300"),h(N,"step","1"),j.__value=5,j.value=j.__value,z.__value=-161,z.value=z.__value,void 0===e[5]&&E((()=>e[22].call(A))),G.__value=1.15,G.value=G.__value,P.__value=1.3,P.value=P.__value,R.__value=1.475,R.value=R.__value,F.__value=1.7,F.value=F.__value,J.__value=1.9,J.value=J.__value,void 0===e[4]&&E((()=>e[23].call(D))),W.__value="gain",W.value=W.__value,X.__value="reduce",X.value=X.__value,Y.__value="maintain",Y.value=Y.__value,void 0===e[3]&&E((()=>e[24].call(V))),h(n,"class","main svelte-ksz38u")},m(t,o){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,o),l(n,r),l(n,a),l(n,i),l(i,u),l(u,v),l(u,$),m($,e[8]),l(i,y),l(i,x),l(x,C),l(x,S),m(S,e[6]),l(i,k),l(i,w),l(w,I),l(w,N),m(N,e[7]),l(i,L),l(i,M),l(M,T),l(M,A),l(A,j),l(A,z),_(A,e[5]),l(i,H),l(i,O),l(O,q),l(O,D),l(D,G),l(D,P),l(D,R),l(D,F),l(D,J),_(D,e[4]),l(i,K),l(i,Q),l(Q,U),l(Q,V),l(V,W),l(V,X),l(V,Y),_(V,e[3]),l(n,Z),l(n,tt),l(n,et),l(n,nt),l(nt,ot),l(nt,rt),l(nt,at),l(at,it),l(at,ut),l(nt,lt),l(nt,ct),l(ct,st),l(ct,ft),l(nt,dt),l(nt,pt),l(pt,ht),l(pt,gt),l(nt,bt),l(nt,mt),l(nt,_t),l(nt,vt),l(vt,$t),l(vt,yt),l(nt,xt),l(nt,Ct),l(Ct,St),l(Ct,kt),l(nt,wt),l(nt,It),l(It,Et),l(It,Nt),l(nt,Lt),l(nt,Mt),l(n,Tt),l(n,At),jt||(zt=[p($,"input",e[19]),p(S,"input",e[20]),p(N,"input",e[21]),p(A,"change",e[22]),p(D,"change",e[23]),p(V,"change",e[24])],jt=!0)},p(t,[e]){256&e&&g($.value)!==t[8]&&m($,t[8]),64&e&&g(S.value)!==t[6]&&m(S,t[6]),128&e&&g(N.value)!==t[7]&&m(N,t[7]),32&e&&_(A,t[5]),16&e&&_(D,t[4]),8&e&&_(V,t[3]),4&e&&Ht!==(Ht=B(t[2],10)+"")&&b(ut,Ht),2&e&&Ot!==(Ot=B(t[1],10)+"")&&b(ft,Ot),1&e&&qt!==(qt=B(t[0],10)+"")&&b(gt,qt),2048&e&&Bt!==(Bt=B(t[11],1)+"")&&b(yt,Bt),1024&e&&Dt!==(Dt=B(t[10],1)+"")&&b(kt,Dt),512&e&&Gt!==(Gt=B(t[9],1)+"")&&b(Nt,Gt)},i:t,o:t,d(t){t&&c(n),jt=!1,o(zt)}}}function B(t,e){return Math.ceil(t/e)*e}function D(t,e,n){let o,r,a,l,c,s,f,d,p,h,b,m,_;const $={gain:{calories:1.1,protein:.25,carbohydrates:.55,fat:.2},reduce:{calories:.75,protein:.4,carbohydrates:.4,fat:.2},maintain:{calories:1,protein:.3,carbohydrates:.45,fat:.25}},y=O(Number(localStorage.getItem("weight")));i(t,y,(t=>n(8,_=t))),y.subscribe((t=>{localStorage.setItem("weight",t)}));let x=O(Number(localStorage.getItem("height")));i(t,x,(t=>n(7,m=t))),x.subscribe((t=>localStorage.setItem("height",t)));let C=O(Number(localStorage.getItem("age")));i(t,C,(t=>n(6,b=t))),C.subscribe((t=>localStorage.setItem("age",t)));let S=O(Number(localStorage.getItem("sex_bias")));i(t,S,(t=>n(5,h=t))),S.subscribe((t=>localStorage.setItem("sex_bias",t))),h||u(S,h=5,h);let k=O(Number(localStorage.getItem("activity")));i(t,k,(t=>n(4,p=t))),k.subscribe((t=>localStorage.setItem("activity",t))),p||u(k,p=1.15,p);let w=O(localStorage.getItem("target"));return i(t,w,(t=>n(3,d=t))),w.subscribe((t=>localStorage.setItem("target",t))),d||u(w,d="maintain",d),t.$$.update=()=>{504&t.$$.dirty&&console.log(_,m,b,h,p,d),480&t.$$.dirty&&n(2,o=10*_+6.25*m-5*b+h),20&t.$$.dirty&&n(1,r=o*p),8&t.$$.dirty&&n(18,a=$[d]),262146&t.$$.dirty&&n(0,l=r*a.calories),262145&t.$$.dirty&&n(11,c=l*a.protein/4),262145&t.$$.dirty&&n(10,s=l*a.carbohydrates/4),262145&t.$$.dirty&&n(9,f=l*a.fat/9)},[l,r,o,d,p,h,b,m,_,f,s,c,y,x,C,S,k,w,a,function(){_=g(this.value),y.set(_)},function(){b=g(this.value),C.set(b)},function(){m=g(this.value),x.set(m)},function(){h=v(this),S.set(h)},function(){p=v(this),k.set(p)},function(){d=v(this),w.set(d)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),z(this,t,D,q,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map