(function(t){function e(e){for(var n,r,c=e[0],i=e[1],l=e[2],d=0,b=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&b.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var i=o[c];0!==s[i]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/sellsuki-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1eb0":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=o("5f5b"),a=o("b1e0"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("b-navbar",{attrs:{variant:"light"}},[o("b-navbar-brand",{attrs:{to:"/"}},[o("b-img",t._b({},"b-img",t.logoProps,!1)),t._v(" Shiba Book Shop ")],1)],1),o("router-view")],1)},c=[],i={data:function(){return{logoProps:{src:"https://material.angular.io/assets/img/examples/shiba1.jpg",class:"d-inline-block align-top",alt:"Shiba Book Shop",width:30,height:30}}}},l=i,u=o("2877"),d=Object(u["a"])(l,r,c,!1,null,null,null),b=d.exports,m=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"py-3",attrs:{fluid:""}},[o("b-row",[o("b-col",{attrs:{md:"8"}},[o("book-list")],1),o("b-col",{attrs:{md:"4"}},[o("cart")],1)],1)],1)},h=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",[t.loading?o("div",{staticClass:"text-center"},[o("b-spinner",{attrs:{label:"Loading..."}})],1):o("b-row",{staticClass:"align-items-stretch"},t._l(t.books,(function(e){return o("b-col",{key:e.id,staticClass:"mb-3",attrs:{sm:"6",lg:"4"}},[o("b-card",{staticClass:"h-100",attrs:{"img-src":e.cover,"img-alt":e.title,"img-top":"",title:e.title,"sub-title":e.price+" Baht"},scopedSlots:t._u([{key:"footer",fn:function(){return[o("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(o){return t.addToCart(e)}}},[t._v("Add to cart")])]},proxy:!0}],null,!0)})],1)})),1)],1)},k=[],v=o("5530"),g=o("2f62"),_={name:"BookList",computed:Object(v["a"])({},Object(g["b"])({loading:"books/loading",books:"books/books"})),created:function(){this.fetchBooks()},methods:{fetchBooks:function(){this.$store.dispatch("books/fetchBooks")},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)}}},x=_,y=(o("d24c"),Object(u["a"])(x,p,k,!1,null,"3bd12d1f",null)),C=y.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{scopedSlots:t._u([t.items.length>0?{key:"footer",fn:function(){return[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.checkout",modifiers:{checkout:!0}}],attrs:{block:"",variant:"primary"}},[t._v("Checkout")])]},proxy:!0}:null],null,!0)},[0===t.items.length?o("div",{staticClass:"text-center text-muted"},[t._v("No items")]):o("b-table",{attrs:{items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(o){return t.deleteFromCart(e.item.id)}}},[o("b-icon",{attrs:{icon:"trash","aria-hidden":"true"}})],1)]}}])}),t.items.length>0?o("b-row",[o("b-col",{attrs:{cols:"8"}},[t._v("Price")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"4"}},[t._v(t._s(t.amount))]),o("b-col",{attrs:{cols:"8"}},[t._v("Discount")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"4"}},[t._v(t._s(t.discountAmount))]),o("b-col",{attrs:{cols:"8"}},[t._v("Net")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"4"}},[t._v(t._s(t.amount-t.discountAmount))])],1):t._e(),o("modal-checkout")],1)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{id:"checkout",title:"Checkout"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.ok;return[o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Complete order ")])]}}])},[o("b-table",{attrs:{items:t.items,fields:t.fields}}),o("b-row",[o("b-col",{attrs:{cols:"6"}},[t._v("Price")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"6"}},[t._v(t._s(t.amount))]),o("b-col",{attrs:{cols:"6"}},[t._v("Discount")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"6"}},[t._v(t._s(t.discountAmount))]),o("b-col",{attrs:{cols:"6"}},[t._v("Net")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"6"}},[t._v(t._s(t.grandTotal))]),o("b-col",{attrs:{cols:"6"}},[t._v("Cash")]),o("b-col",{attrs:{cols:"6"}},[o("b-form-input",{attrs:{type:"number",size:"sm",state:t.cashState,"aria-describedby":"input-cash-feedback"},model:{value:t.cash,callback:function(e){t.cash=e},expression:"cash"}}),o("b-form-invalid-feedback",{attrs:{id:"input-cash-feedback"}},[t._v(" "+t._s("This field must be "+t.grandTotal+" or more.")+" ")])],1),o("b-col",{attrs:{cols:"6"}},[t._v("Change")]),o("b-col",{staticClass:"text-muted text-right",attrs:{cols:"6"}},[t._v(t._s(t.cash-t.grandTotal))])],1)],1)},S=[],T={name:"ModalCheckout",data:function(){return{cash:"",fields:[{key:"title",label:"Title"},{key:"price",label:"Price"},{key:"quantity",label:"Qty"}]}},computed:Object(v["a"])(Object(v["a"])({},Object(g["b"])({items:"cart/items",amount:"cart/amount",discountAmount:"cart/discountAmount"})),{},{grandTotal:function(){return this.amount-this.discountAmount},cashState:function(){return this.cash>=this.grandTotal}}),methods:{resetModal:function(){this.cash=""},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;if(this.cashState){var e=this.createMessageVNode();this.$bvModal.msgBoxOk([e],{title:"Confirmation",buttonSize:"sm",okVariant:"success",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}),this.$store.dispatch("cart/checkout"),this.$nextTick((function(){t.$bvModal.hide("checkout")}))}},createMessageVNode:function(){var t=this.$createElement;return t("div",[t("b-table",{props:{items:this.items,fields:this.fields}}),t("b-row",[t("b-col",{props:{cols:"6"}},"Price"),t("b-col",{class:"text-muted text-right",props:{cols:"6"}},this.amount),t("b-col",{props:{cols:"6"}},"Discount"),t("b-col",{class:"text-muted text-right",props:{cols:"6"}},this.discountAmount),t("b-col",{props:{cols:"6"}},"Net"),t("b-col",{class:"text-muted text-right",props:{cols:"6"}},this.grandTotal),t("b-col",{props:{cols:"6"}},"Cash"),t("b-col",{class:"text-muted text-right",props:{cols:"6"}},this.cash),t("b-col",{props:{cols:"6"}},"Change"),t("b-col",{class:"text-muted text-right",props:{cols:"6"}},this.cash-this.grandTotal)])])}}},B=T,P=Object(u["a"])(B,w,S,!1,null,null,null),$=P.exports,M={name:"Cart",components:{ModalCheckout:$},data:function(){return{fields:[{key:"title",label:"Title"},{key:"price",label:"Price"},{key:"quantity",label:"Qty"},{key:"action",label:""}]}},computed:Object(v["a"])({},Object(g["b"])({items:"cart/items",amount:"cart/amount",discountAmount:"cart/discountAmount"})),methods:{deleteFromCart:function(t){this.$store.dispatch("cart/deleteFromCart",t)}}},A=M,N=Object(u["a"])(A,O,j,!1,null,null,null),q=N.exports,E={name:"Home",components:{BookList:C,Cart:q}},F=E,L=Object(u["a"])(F,f,h,!1,null,null,null),z=L.exports;n["default"].use(m["a"]);var D=[{path:"/",name:"Home",component:z}],I=new m["a"]({mode:"history",base:"/sellsuki-test/",routes:D}),V=I,H=(o("96cf"),o("1da1")),J=o("bc3a"),Q=o.n(J),R={loading:!1,books:[]},G={fetchBooks:function(t){return Object(H["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setLoading",!0),e.prev=1,e.next=4,Q.a.get("https://api.jsonbin.io/b/5f3154b06f8e4e3faf2f99de");case 4:o=e.sent,n=o.data,t.commit("setBooks",n.books),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.commit("setBooks",[]);case 12:return e.prev=12,t.commit("setLoading",!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))()}},K={setLoading:function(t,e){t.loading=e},setBooks:function(t,e){t.books=e}},U={loading:function(t){return t.loading},books:function(t){return t.books}},W={namespaced:!0,state:R,actions:G,mutations:K,getters:U},X=(o("4de4"),o("7db0"),o("c740"),o("c975"),o("13d5"),o("a434"),o("a9e3"),{items:[],hpBookIds:["9781408855652","9781408855669","9781408855676","9781408855683","9781408855690","9781408855706","9781408855713"]}),Y={addToCart:function(t,e){t.commit("addToCart",e)},deleteFromCart:function(t,e){t.commit("deleteFromCart",e)},checkout:function(t){t.commit("checkout")}},Z={addToCart:function(t,e){var o=t.items.find((function(t){return t.id===e.id}));o?o.quantity++:t.items.push(Object(v["a"])(Object(v["a"])({},e),{},{quantity:1}))},deleteFromCart:function(t,e){var o=t.items.findIndex((function(t){return t.id===e}));o>-1&&t.items.splice(o,1)},checkout:function(t){t.items=[]}},tt={items:function(t){return t.items},amount:function(t){return t.items.reduce((function(t,e){return t+Number(e.price)*e.quantity}),0)},discountAmount:function(t){for(var e=t.items.filter((function(e){return t.hpBookIds.indexOf(e.id)>-1})),o=e.reduce((function(t,e){return e.quantity>t?e.quantity:t}),0),n=0,s=function(t){var o=e.filter((function(e){return e.quantity>=t})),s=o.reduce((function(t,e){return t+Number(e.price)}),0);switch(o.length){case 2:n+=10*s/100;break;case 3:n+=11*s/100;break;case 4:n+=12*s/100;break;case 5:n+=13*s/100;break;case 6:n+=14*s/100;break;case 7:n+=15*s/100;break}},a=1;a<=o;a++)s(a);return n}},et={namespaced:!0,state:X,actions:Y,mutations:Z,getters:tt};n["default"].use(g["a"]);var ot=new g["a"].Store({modules:{books:W,cart:et}});o("b107");n["default"].config.productionTip=!1,n["default"].use(s["a"]),n["default"].use(a["a"]),new n["default"]({router:V,store:ot,render:function(t){return t(b)}}).$mount("#app")},b107:function(t,e,o){},d24c:function(t,e,o){"use strict";o("1eb0")}});
//# sourceMappingURL=app.082bf11f.js.map