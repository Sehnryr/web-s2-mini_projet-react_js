(this["webpackJsonpweb-s2-mini_projet-react_js"]=this["webpackJsonpweb-s2-mini_projet-react_js"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(9),i=n.n(s),r=n(59),c=n.n(r),l=n(29),u=n.n(l),j=n(4),d=u()({root:{textAlign:"center"}});function b(e){var t=d();return Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("h1",{className:t.root,children:e.title})})}var p=u()({root:{textAlign:"center"}});function g(e){var t=p();return Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("h1",{className:t.root,children:e.title})})}var O=n(52),x=n(153),h=n(161),f=n(154),m=n(155),v=n(156),w=Object(x.a)({root:{textAlign:"center"},buttonGroup:{position:"absolute",zIndex:4,bottom:0,right:0},button:{position:"absolute",right:0,bottom:0,left:"auto !important"},codesandbox:{width:"80%",maxHeight:500,minHeight:400,border:0,borderRadius:4,overflow:"hidden"}});function k(e){var t=w(),n=e.useTranslation(),o=Object(a.useState)({forward:function(){},backward:function(){}}),s=Object(O.a)(o,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){void 0!==e.fullpageApi&&r({forward:function(){return e.fullpageApi.moveSlideRight()},backward:function(){return e.fullpageApi.moveSlideLeft()}})}),[e.fullpageApi]),Object(j.jsxs)("div",{className:"section",children:[Object(j.jsxs)("div",{className:"slide ".concat(t.root),children:[Object(j.jsx)("h2",{children:n("pages.demo.counter")}),Object(j.jsx)("iframe",{src:"https://codesandbox.io/embed/react-counter-demo-xu107?autoresize=1&fontsize=11&hidenavigation=1&theme=dark",className:t.codesandbox,sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]}),Object(j.jsx)("div",{className:"slide ".concat(t.root),children:Object(j.jsx)("h3",{children:"Slide 2.2"})}),Object(j.jsx)("div",{className:"slide ".concat(t.root),children:Object(j.jsx)("h3",{children:"Slide 2.3"})}),Object(j.jsxs)(h.a,{className:t.buttonGroup,children:[Object(j.jsx)(f.a,{onClick:i.backward,children:Object(j.jsx)(m.a,{fontSize:"large"})}),Object(j.jsx)(f.a,{onClick:i.forward,children:Object(j.jsx)(v.a,{fontSize:"large"})})]})]})}var N=u()({root:{textAlign:"center"}});function S(e){var t=N();return Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("h1",{className:t.root,children:e.title})})}var _=Object(x.a)({root:{textAlign:"center"}});function A(e){var t=_(),n=Object.values(e.titles);return Object(j.jsx)(c.a,{className:t.navigation,navigation:!0,navigationPosition:"left",navigationTooltips:n,scrollingSpeed:600,render:function(t){var n=t.fullpageApi;return Object(j.jsxs)(c.a.Wrapper,{children:[Object(j.jsx)(b,{title:e.titles.presentation}),Object(j.jsx)(g,{title:e.titles.principle}),Object(j.jsx)(k,{title:e.titles.demo,fullpageApi:n,useTranslation:e.useTranslation}),Object(j.jsx)(S,{title:e.titles.conclusion})]})}})}var E=n(51),T=n(60),C=n(157),L=n(162),y=n(158),F=n(163),P=n(160),z=n(159),R=n(85),J=(n(73),{useCssModules:!1,customCodes:{eo:"Esperanto"}}),D=Object(R.a)(a,J),U=Object(x.a)({root:{position:"absolute",top:".5rem",right:".5rem"}});var I=function(e){var t=U(),n="right",s=e.useTranslation(),i=Object.keys(e.languages),r=e.currentLanguage,c=Object(a.useState)({right:!1}),l=Object(O.a)(c,2),u=l[0],d=l[1],b=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&d(Object(T.a)(Object(T.a)({},u),{},Object(E.a)({},e,t)))}},p=Object(j.jsx)("div",{style:{width:250},role:"presentation",onClick:b(n,!1),onKeyDown:b(n,!1),children:Object(j.jsx)(C.a,{children:i.map((function(t){var n=s("languages."+t),a=e.languages[t].code;return Object(j.jsxs)(L.a,{button:!0,selected:r===t,onClick:function(){e.setLanguage(t)},children:[Object(j.jsx)(y.a,{children:Object(j.jsx)(D,{code:a})}),Object(j.jsx)(F.a,{primary:n})]},t)}))})});return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)(f.a,{className:t.root,onClick:b(n,!0),children:Object(j.jsx)(z.a,{})}),Object(j.jsx)(P.a,{anchor:n,open:u.right,onClose:b(n,!1),onOpen:b(n,!0),children:p})]})},G=n(18),H=n(82),K=n(83),M=n(84),B=(n(132),{fr_FR:H,en_US:K,eo_EO:M});function W(){Object(G.useTranslation)();var e=B[Object(G.getLanguage)()].titles;return Object(j.jsxs)(o.a.Fragment,{children:[Object(j.jsx)(A,{titles:e,useTranslation:G.useTranslation}),Object(j.jsx)(I,{currentLanguage:Object(G.getLanguage)(),languages:B,setLanguage:G.setLanguage,useTranslation:G.useTranslation})]})}Object(G.setTranslations)(B),Object(G.setDefaultLanguage)(Object.keys(B)[0]),i.a.render(Object(j.jsx)(W,{}),document.getElementById("root"))},73:function(e,t,n){},82:function(e){e.exports=JSON.parse('{"titles":{"presentation":"Pr\xe9sentation","principle":"Principe & Fonctionnement","demo":"D\xe9monstration","conclusion":"Conclusion"},"code":"fr","languages":{"fr_FR":"Fran\xe7ais","en_US":"Anglais","eo_EO":"Esp\xe9ranto"},"pages":{"demo":{"counter":"Compteur d\'articles"}}}')},83:function(e){e.exports=JSON.parse('{"titles":{"presentation":"Presentation","principle":"Principle & Functioning","demo":"Demonstration","conclusion":"Conclusion"},"code":"us","languages":{"fr_FR":"French","en_US":"English","eo_EO":"Esperanto"},"pages":{"demo":{"counter":"Item counter"}}}')},84:function(e){e.exports=JSON.parse('{"titles":{"presentation":"Prezento","principle":"Principo kaj Operacio","demo":"Manifestacio","conclusion":"Konkludo"},"code":"eo","languages":{"fr_FR":"La franca","en_US":"La angla","eo_EO":"Esperanto"},"pages":{"demo":{"counter":"Ero rebat"}}}')}},[[133,1,2]]]);
//# sourceMappingURL=main.90b041ad.chunk.js.map