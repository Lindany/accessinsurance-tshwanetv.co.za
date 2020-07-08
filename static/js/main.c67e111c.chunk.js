(this["webpackJsonpaccessinsurance-app"]=this["webpackJsonpaccessinsurance-app"]||[]).push([[0],{21:function(e,t){},23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),i=n.n(r),c=(n(28),n(5)),l=n(11),s=n(1),u=n(2),p=n(4),m=n(3),h=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Careers")}}]),n}(a.Component),d=(n(29),n(12)),f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={menuOpen:!1},a}return Object(u.a)(n,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t={container:{position:"absolute",top:0,left:0,zIndex:"99",opacity:.9,display:"flex",alignItems:"center",background:"black",width:"100%",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},n=["about","services","products","sportme","fillme","careers","partners","account","contact"],a=["About Us","Services","Our Products","SportMe","FillMe","Careers","Our Partners","My Account","Contact Us"].map((function(t,a){return o.a.createElement(d.b,{to:"/".concat(n[a])},o.a.createElement(v,{key:a,delay:"".concat(.1*a,"s"),onClick:function(){e.handleLinkClick()}},t))}));return o.a.createElement("div",null,o.a.createElement("div",{style:t.container},o.a.createElement(y,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"white"}),o.a.createElement("div",{style:t.logo},"Logo")),o.a.createElement(b,{open:this.state.menuOpen},a),o.a.createElement(h,null),o.a.createElement("div",{style:t.body},o.a.createElement(O,{name:"Menu"})))}}]),n}(a.Component),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hover:!1},a}return Object(u.a)(n,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"gray":"#fafafa",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"gray",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return o.a.createElement("div",{style:t.container},o.a.createElement("div",{style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),o.a.createElement("div",{style:t.line}))}}]),n}(o.a.Component),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!!a.props.open&&a.props.open},a}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"black",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"3rem"}};return o.a.createElement("div",{style:e.container},this.state.open?o.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),n}(o.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={open:!!a.props.open&&a.props.open,color:a.props.color?a.props.color:"black"},a}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return o.a.createElement("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},o.a.createElement("div",{style:Object(l.a)(Object(l.a)({},t.line),t.lineTop)}),o.a.createElement("div",{style:Object(l.a)(Object(l.a)({},t.line),t.lineMiddle)}),o.a.createElement("div",{style:Object(l.a)(Object(l.a)({},t.line),t.lineBottom)}))}}]),n}(o.a.Component);function O(e){var t={footer:{position:"absolute",bottom:0,width:"100%",marginTop:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:e.color},line:{height:"1px",width:"90%",background:e.color},text:{padding:"0.5rem"}};return o.a.createElement("div",{style:t.footer},o.a.createElement("div",{style:t.line}),o.a.createElement("div",{style:t.text},e.title," all right reserved \xa9 2020"))}O.defaultProps={color:"black",title:"Access Insurance"};o.a.Component;var g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"About")}}]),n}(a.Component),j=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Contact")}}]),n}(a.Component),k=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"FillMe")}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Products")}}]),n}(a.Component),w=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Qoutes")}}]),n}(a.Component),C=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Services")}}]),n}(a.Component),x=n(21),S=n.n(x),M=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Sport Me")}}]),n}(a.Component),A=n(22);function I(e){var t=(e.location.state||{from:{pathname:"/"}}).from;console.log(t);var n=Object(a.useState)(!1),r=Object(A.a)(n,2),i=r[0],l=r[1];return i?o.a.createElement(c.a,{to:t}):o.a.createElement("div",null,o.a.createElement("p",null,"You must log in to view the page at ",t.pathname),o.a.createElement("button",{onClick:function(){L.authenticate((function(){l(!0)}))}},"Log in"))}var L={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)}},W=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Account")}}]),n}(a.Component),P=function(){return o.a.createElement("main",null,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/",component:f}),o.a.createElement(c.b,{path:"/about",component:g}),o.a.createElement(c.b,{path:"/careers",component:h}),o.a.createElement(c.b,{path:"/contact",component:j}),o.a.createElement(c.b,{path:"/fillme",component:k}),o.a.createElement(c.b,{path:"/products",component:E}),o.a.createElement(c.b,{path:"/qoutes",component:w}),o.a.createElement(c.b,{path:"/register",component:S.a}),o.a.createElement(c.b,{path:"/services",component:C}),o.a.createElement(c.b,{path:"/sportme",component:M}),o.a.createElement(c.b,{path:"/login",component:I}),o.a.createElement(c.b,{path:"/account",component:W}),o.a.createElement(c.b,{path:"/partners",component:W})))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,null,o.a.createElement(P,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.c67e111c.chunk.js.map