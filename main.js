(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>C});var a=n(601),o=n.n(a),r=n(314),i=n.n(r),c=n(417),s=n.n(c),d=new URL(n(560),n.b),l=new URL(n(173),n.b),p=new URL(n(431),n.b),u=new URL(n(780),n.b),f=new URL(n(725),n.b),h=new URL(n(164),n.b),m=i()(o()),g=s()(d),y=s()(l),b=s()(p),v=s()(u),x=s()(f),w=s()(h);m.push([e.id,`@font-face {\n    font-family: 'Madimi';\n    src: url(${g}) format('truetype');\n    font-style: normal;\n    font-weight: 400;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    background: url(${y});\n}\n\n.nav-button {\n    background-color: antiquewhite;\n    border: 2px solid #000;\n    border-radius: 5px;\n    padding: 10px 20px;\n    margin: 0 10px;\n    color: #000;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  \n.nav-button:active {\n    background-color: #f5deb3;\n}\n\n#title {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.cat-left {\n    transform: scaleX(-1);\n}\n\n.cat-left, .cat-right {\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    object-fit: cover;\n    padding-bottom: 15px;\n}\n\n.home-cat {\n    content: url(${b});\n}\n\n.menu-cat {\n    content: url(${v});\n}\n\n.contact-cat {\n    content: url(${x});\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n\n    width: 50%;\n    padding: 10px 40px 20px 40px;\n    border-radius: 12px;\n    background-color: antiquewhite;\n\n    font-family: 'Madimi', sans-serif;\n}\n\nh1 {\n    text-align: center;\n}\n\nh2 {\n    text-align: center;\n}\n\nul {\n    list-style-type: none;\n    padding-left: 0px;\n}\n\nli {\n    margin-bottom: 10px;\n    background-image: url(${w});\n    background-repeat: no-repeat;\n    background-position: left center;\n    padding-left: 30px;\n    background-size: 20px;\n}`,""]);const C=m},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},560:(e,t,n)=>{e.exports=n.p+"f8a02729fa3101fe9c6d.ttf"},173:(e,t,n)=>{e.exports=n.p+"d82dbbbaf5f8660f24e8.jpg"},431:(e,t,n)=>{e.exports=n.p+"569af5fd0dbfedfbaba5.png"},780:(e,t,n)=>{e.exports=n.p+"bee4ee9950f93676a074.png"},725:(e,t,n)=>{e.exports=n.p+"29053c3de51e4aede98a.png"},164:(e,t,n)=>{e.exports=n.p+"a7865b03cab2af63b31d.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.getElementById("content");t(e,"Hazel's Kitty Cafe","home-cat"),[{tag:"h2",id:"welcome",text:"Welcome to Hazel's Kitty Cafe!"},{tag:"p",id:"about",text:"At Hazel's Kitty Cafe, we believe in creating a purr-fect haven for both humans and feline friends alike. Nestled in the heart of Whiskerville, our cozy cafe offers a unique experience where you can enjoy delicious refreshments while surrounded by the playful antics of our adorable rescue cats."},{tag:"p",id:"menu",text:"Indulge your taste buds with our delectable selection of beverages and treats. Whether you're in the mood for a comforting cup of coffee, a refreshing iced tea, or a sweet pastry, we have something to satisfy every craving. Sit back, relax, and enjoy your favorite refreshments in the company of our charming cats."},{tag:"p",id:"visit",text:"Ready to experience the magic of Hazel's Kitty Cafe? Stop by our location in Whiskerville and immerse yourself in a world of whiskers and purrs. Whether you're a seasoned cat lover or simply looking for a cozy spot to unwind, we can't wait to welcome you with open paws."},{tag:"p",id:"contact",text:"Have a question or want to learn more about Hazel's Kitty Cafe? We're here to help! Reach out to us via phone or email, or stop by our location during business hours. Our friendly staff members are always happy to assist you."}].forEach((t=>{const n=document.createElement("div");n.classList.add("container");const a=document.createElement("h3");var o;a.textContent=(o=t.id)[0].toUpperCase()+o.slice(1);const r=document.createElement(t.tag);r.textContent=t.text,r.setAttribute("id",t.id),"p"===t.tag&&n.appendChild(a),n.appendChild(r),e.appendChild(n)}))}function t(e,t,n){const a=document.createElement("div");a.setAttribute("id","title");const o=document.createElement("h1");o.textContent=t;const r=document.createElement("img"),i=document.createElement("img");r.classList.add("cat-left",n),i.classList.add("cat-right",n),a.appendChild(r),a.appendChild(o),a.appendChild(i),e.appendChild(a)}var a=n(72),o=n.n(a),r=n(825),i=n.n(r),c=n(659),s=n.n(c),d=n(56),l=n.n(d),p=n(540),u=n.n(p),f=n(113),h=n.n(f),m=n(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals,e(),document.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(n=>{let a=n.target.id;const o=document.getElementById("content");"home"==a?(o.innerHTML="",e()):"menu"==a?(o.innerHTML="",function(){const e=document.getElementById("content");t(e,"Menu","menu-cat"),[{tag:"p",id:"beverages",text:"Beverages",items:[{name:"Catpuccino",description:"A creamy espresso drink with a playful twist of cat-shaped foam art. - $4.50"},{name:"Paw-some Hot Chocolate",description:"Rich and indulgent hot chocolate served with a marshmallow cat paw on top. - $4.75 "},{name:"Meowcha Latte",description:"A purr-fect blend of matcha green tea and steamed milk, topped with a sprinkle of catnip. - $5.00"},{name:"Kitty Kisses Tea",description:"A soothing herbal tea blend infused with hints of catnip and lavender. - $3.50"}]},{tag:"p",id:"pastries",text:"Pastries",items:[{name:"Purrfect Croissants",description:"Flaky croissants filled with your choice of chocolate, almond, or ham and cheese. - $3.25"},{name:"Catnip Cookies",description:"Homemade cookies infused with catnip for a delightful treat for both humans and cats. - $2.75"},{name:"Whisker Whirl Cupcakes:",description:"Moist cupcakes topped with fluffy buttercream frosting and decorated with edible sugar whiskers. - $3.50"}]},{tag:"p",id:"specialty",text:"Specialty Drinks",items:[{name:"Feline Fizz",description:"A refreshing sparkling lemonade with a splash of raspberry syrup, served over ice. - $4.00"},{name:"Kitty Concoction",description:"Our signature mocktail made with coconut water, pineapple juice, and a dash of grenadine, garnished with a cherry on top. - $5.25"},{name:"Whisker Wobble Smoothie",description:"A healthy blend of spinach, banana, and mango, with a sprinkle of chia seeds for added crunch. - $5.50"},{name:"Catnip Cooler",description:"A revitalizing blend of cucumber, mint, and lime, served as a chilled beverage. - $4.75"}]}].forEach((t=>{const n=document.createElement("div");n.classList.add("container");const a=document.createElement("h3");a.textContent=t.text;const o=document.createElement("ul");t.items.forEach((e=>{const t=document.createElement("li");t.textContent=`${e.name} - ${e.description}`,o.appendChild(t)})),n.appendChild(a),n.appendChild(o),e.appendChild(n)}))}()):"contact"==a&&(o.innerHTML="",function(){const e=document.getElementById("content");t(e,"Contact Us","contact-cat"),[{id:"location",header:"Location:",text:"Hazel's Kitty Cafe\n321 Purrington Ct\nWhiskerville, Catifornia, 99999"},{id:"phone",header:"Phone:",text:"1-800-PURR-NOW"},{id:"email",header:"Email:",text:"info@hazelskittycafe.com"},{id:"hours",header:"Hours of Operation:",text:"Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: 9:00 AM - 8:00 PM"}].forEach((t=>{const n=document.createElement("div");n.classList.add("container");const a=document.createElement("h3");a.textContent=t.header;const o=document.createElement("p");o.textContent=t.text,o.style.whiteSpace="pre",n.appendChild(a),n.appendChild(o),e.appendChild(n)}))}())}))}))})()})();