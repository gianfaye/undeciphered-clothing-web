(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7504)}])},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,o=r(1598).Z,a=r(7273).Z,s=o(r(7294)),l=i(r(5443)),c=r(2730),d=r(9309),u=r(9977);r(5086);var h=i(r(1479));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://undecipheredclothing.imgix.net/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,i,o,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:o,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:h,fill:g,placeholder:p,loading:f,srcString:_,config:w,unoptimized:b,loader:x,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:y,setShowAltText:N,onLoad:E,onError:C}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=h?"lazy":f,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,{loading:f,width:o,height:i,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n({},d,u)},r,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,_,p,v,j,y,b))},[_,p,v,j,y,C,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,_,p,v,j,y,b)},onError:e=>{N(!0),"blur"===p&&y(!0),C&&C(e)}})))}),w=s.forwardRef((e,t)=>{let r,i;var o,{src:m,sizes:w,unoptimized:b=!1,priority:x=!1,loading:v,className:j,quality:y,width:N,height:E,fill:C,style:S,onLoad:D,onLoadingComplete:k,placeholder:P="empty",blurDataURL:M,layout:z,objectFit:R,objectPosition:I,lazyBoundary:O,lazyRoot:A}=e,H=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),L=s.useMemo(()=>{let e=g||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[F]),B=H,U=B.loader||h.default;delete B.loader;let W="__next_img_default"in U;if(W){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:r}=t,n=a(t,["config"]);return e(n)}}if(z){"fill"===z&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(S=n({},S,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!w&&(w=t)}let T="",q=f(N),G=f(E);if("object"==typeof(o=m)&&(p(o)||void 0!==o.src)){let e=p(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,T=e.src,!C){if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}}let V=!x&&("lazy"===v||void 0===v);((m="string"==typeof m?m:T).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),L.unoptimized&&(b=!0),W&&m.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(b=!0);let[Y,Z]=s.useState(!1),[J,K]=s.useState(!1),Q=f(y),X=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},J?{}:{color:"transparent"},S),$="blur"===P&&M&&!Y?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:G,blurWidth:r,blurHeight:i,blurDataURL:M,objectFit:X.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:L,src:m,unoptimized:b,width:q,quality:Q,sizes:w,loader:U}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},en=s.useRef(D);s.useEffect(()=>{en.current=D},[D]);let ei=s.useRef(k);s.useEffect(()=>{ei.current=k},[k]);let eo=n({isLazy:V,imgAttributes:ee,heightInt:G,widthInt:q,qualityInt:Q,className:j,imgStyle:X,blurStyle:$,loading:v,config:L,fill:C,unoptimized:b,placeholder:P,loader:U,srcString:et,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:Z,setShowAltText:K},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},eo,{ref:t})),x?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n||t,l=i||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},7504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(5893),i=r(8582),o=r.n(i),a=r(9197),s=r.n(a),l=r(9008),c=r.n(l),d=r(4265),u=r.n(d),h=r(7294);let g=e=>"/"===e[0]?e.slice(1):e;function p(e){let{src:t,width:r,quality:n}=e,i=new URL("https://undecipheredclothing.imgix.net/"+g(t)),o=i.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),n&&o.set("q",n.toString()),i.href}let f=(0,h.createContext)();function m(e){let{children:t}=e;return(null==t||t.length<1)&&console.error("ImgixProvider must have at least one Imgix child component"),(0,n.jsx)(f.Provider,{value:p,children:t})}var _=r(5675),w=r.n(_);let b=e=>{let{width:t,height:r,src:i,priority:o=!1,alt:a="",className:s=""}=e,l=(0,h.useContext)(f);return(0,n.jsx)(w(),{className:s,loader:l,src:i,alt:a,width:t,height:r,priority:o})};function x(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"UNDECIPHERED Clothing | Streetwear MNL PH"}),(0,n.jsx)("meta",{name:"description",content:"A streetwear brand in Manila, Philippines"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{property:"og:url",content:"https://undeciphered.ph"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:"UNDECIPHERED Clothing | Streetwear MNL PH"}),(0,n.jsx)("meta",{name:"twitter:card",content:"A streetwear brand in Manila, Philippines"}),(0,n.jsx)("meta",{property:"og:description",content:"A streetwear brand in Manila, Philippines"}),(0,n.jsx)("meta",{property:"og:image",content:"/site-preview.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:u().main,children:[(0,n.jsxs)("div",{className:u().description,children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://shopee.ph/undecipheredclothing",className:u().card,target:"_blank",rel:"noopener noreferrer",children:"Order from our Shopee \uD83D\uDEF8"})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:"A streetwear brand in Manila, Philippines"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/UndecipheredClothing/",className:u().card,target:"_blank",rel:"noopener noreferrer",children:"Follow us on Facebook \uD83D\uDC7B"})})]}),(0,n.jsx)("div",{className:u().center,children:(0,n.jsxs)(m,{children:[(0,n.jsx)(b,{className:u().logo,src:"/undeciphered-clothing-logo.png",alt:"Undeciphered Clothing Logo",width:500,height:140,priority:!0}),(0,n.jsx)(b,{className:u().logoMobile,src:"/undeciphered-clothing-logo-square.png",alt:"Undeciphered Clothing Logo",width:300,height:300,priority:!0})]})}),(0,n.jsxs)("div",{className:u().grid,children:[(0,n.jsxs)("a",{href:"https://shopee.ph/undecipheredclothing?shopCollection=244704110",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("h2",{className:s().className,children:"CYBERPUNK"}),(0,n.jsxs)("p",{className:o().className,children:["Wear something Gibsonesque \uD83E\uDDBE ",(0,n.jsx)("br",{}),"10 designs to choose from!"]})]}),(0,n.jsxs)("a",{href:"https://shopee.ph/undecipheredclothing?shopCollection=244850338",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("h2",{className:s().className,children:"IMPACT THREADS"}),(0,n.jsxs)("p",{className:o().className,children:["Support a cause for every purchase \uD83E\uDD0D ",(0,n.jsx)("br",{}),"Designs out now!"]})]}),(0,n.jsxs)("a",{href:"https://shopee.ph/undecipheredclothing",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("h2",{className:s().className,children:"MANIFESTO"}),(0,n.jsxs)("p",{className:o().className,children:["Speak without saying a word \uD83D\uDE0C ",(0,n.jsx)("br",{}),"Coming Soon!"]})]}),(0,n.jsxs)("a",{href:"https://shopee.ph/undecipheredclothing?shopCollection=244882766",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("h2",{className:s().className,children:"DARK MODE"}),(0,n.jsxs)("p",{className:o().className,children:["Because light attracts bugs \uD83D\uDC69‍\uD83D\uDCBB ",(0,n.jsx)("br",{}),"Collect all 10 designs!"]})]})]})]})]})}},8582:function(e){e.exports={style:{fontFamily:"'__Blinker_d58596', '__Blinker_Fallback_d58596'",fontWeight:400,fontStyle:"normal"},className:"__className_d58596"}},9197:function(e){e.exports={style:{fontFamily:"'__blanka_fcbeec', '__blanka_Fallback_fcbeec'",fontWeight:400},className:"__className_fcbeec"}},4265:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",logoMobile:"Home_logoMobile__z9uY9",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);