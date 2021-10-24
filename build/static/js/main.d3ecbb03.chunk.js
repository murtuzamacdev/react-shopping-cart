(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),i=c(20),d=c.n(i),o=(c(29),c(30),c(31),c(15)),u=c(2),a=c(23),s=c(8),j=[{productId:"1",productName:"Macbook Pro",productPrice:12e4,maxBuyLimit:3,showInventoryWarningLimit:1},{productId:"2",productName:"iPhone",productPrice:8e4,maxBuyLimit:2,showInventoryWarningLimit:1},{productId:"3",productName:"iWatch",productPrice:3e4,maxBuyLimit:2,showInventoryWarningLimit:10},{productId:"4",productName:"iPad",productPrice:6e4,maxBuyLimit:2,showInventoryWarningLimit:1}],l=[{productId:"1",currentQuantity:5},{productId:"2",currentQuantity:10},{productId:"3",currentQuantity:8},{productId:"4",currentQuantity:9}],h=c(0),b=r.createContext({products:[],inventory:[],cart:[],addToCart:void 0,removeFromCart:void 0,viewType:!1,setviewType:void 0}),p=function(t){var e=r.useState(j),c=Object(s.a)(e,2),n=c[0],i=(c[1],r.useState(l)),d=Object(s.a)(i,2),o=d[0],u=d[1],p=r.useState([]),x=Object(s.a)(p,2),O=x[0],v=x[1],m=r.useState(!1),f=Object(s.a)(m,2),y=f[0],I=f[1];return Object(h.jsx)(b.Provider,{value:{products:n,cart:O,addToCart:function(t){v([].concat(Object(a.a)(O),[t.productId]));var e=Object.assign([],o),c=e.find((function(e){return e.productId===t.productId}));if(c){var r=null===c||void 0===c?void 0:c.currentQuantity;c.currentQuantity=r-1,u(e)}},inventory:o,removeFromCart:function(t){var e=Object.assign([],O),c=e.findIndex((function(e){return e===t}));e.splice(c,1),v(e)},viewType:y,setviewType:I},children:t.children})},x=c(42),O=function(){var t=Object(r.useContext)(b),e=function(e){return t.products.find((function(t){return t.productId===e}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Cart"}),Object(h.jsxs)("h3",{children:["Total price: ",function(){var e=0;return t.cart.forEach((function(c){var r=t.products.find((function(t){return t.productId===c}));r&&(e+=r.productPrice)})),e}()]}),Object(h.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Product Name"}),Object(h.jsx)("th",{children:"Product Price"}),Object(h.jsx)("th",{children:"Product Action"})]})}),Object(h.jsx)("tbody",{children:t.cart.map((function(c){var r,n;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:null===(r=e(c))||void 0===r?void 0:r.productName}),Object(h.jsx)("td",{children:null===(n=e(c))||void 0===n?void 0:n.productPrice}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){!function(e){t.removeFromCart(e)}(c)},children:"Remove"})})]})}))})]})]})},v=c(43),m=function(){var t=Object(r.useContext)(b);Object(r.useEffect)((function(){console.log(t)}),[]);var e=function(e){var c=t.cart.filter((function(t){return e.productId===t})).length,r=t.inventory.find((function(t){return t.productId===e.productId}));0===(null===r||void 0===r?void 0:r.currentQuantity)?alert("Sorry! Out of stock."):c>=e.maxBuyLimit?alert("Max limit reached"):t.addToCart(e)},c=function(e){var c,r=null===(c=t.inventory.find((function(t){return t.productId===e.productId})))||void 0===c?void 0:c.currentQuantity;return!!(r&&r<=e.showInventoryWarningLimit)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Products"}),Object(h.jsxs)("h3",{className:"mb-2",children:["Total items in cart: ",t.cart.length]}),Object(h.jsx)(o.b,{className:"mb-2",to:"cart",children:"View cart"}),Object(h.jsx)("br",{}),Object(h.jsx)(v.a,{className:"mb-2",onClick:function(){t.setviewType(!t.viewType)},children:"Toggle view"}),t.viewType&&Object(h.jsx)("ul",{className:"list-group",children:t.products.map((function(t,r){return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:t.productName}),Object(h.jsx)("p",{children:t.productPrice}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){e(t)},children:"Add to cart"})}),Object(h.jsx)("div",{children:c(t)?"Limited Stock":"In stock"})]})}))}),!t.viewType&&Object(h.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Product Name"}),Object(h.jsx)("th",{children:"Product Price"}),Object(h.jsx)("th",{children:"Product Action"}),Object(h.jsx)("th",{children:"Status"})]})}),Object(h.jsx)("tbody",{children:t.products.map((function(t,r){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.productName}),Object(h.jsx)("td",{children:t.productPrice}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){e(t)},children:"Add to cart"})}),Object(h.jsx)("td",{children:c(t)?"Limited Stock":"In stock"})]})}))})]})]})};var f=function(){return Object(h.jsx)("div",{style:{margin:" 200px"},children:Object(h.jsx)(p,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(b.Consumer,{children:function(t){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{})}),Object(h.jsx)(u.a,{path:"/cart",children:Object(h.jsx)(O,{})})]})})}})})})})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,d=e.getTTFB;c(t),r(t),n(t),i(t),d(t)}))};d.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.d3ecbb03.chunk.js.map