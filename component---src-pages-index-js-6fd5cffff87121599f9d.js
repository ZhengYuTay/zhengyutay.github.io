(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{200:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=a(12),i=a.n(r),c=a(27),o=a(17),s=a.n(o),u=a(376),l=a.n(u),d=a(370),h=(a(262),a(378)),p=a(212),g=a(241),m=a.n(g),f=a(263),E=a.n(f),y=a(379),w=Object(c.withStyles)(function(e){return{picture:{width:"300px",margin:"auto"},marginRight:{marginRight:"40px"}}})(function(e){var t=e.classes;return n.a.createElement(p.StaticQuery,{query:"899491768",render:function(e){var a=e.dataJson.developer,r=a.name,i=a.role,c=a.smallImage;return n.a.createElement(A.Fragment,null,n.a.createElement(E.a,{outerWrapperClassName:t.picture,sizes:c.childImageSharp.sizes}),n.a.createElement(m.a,{variant:"display3"},r),n.a.createElement(m.a,{variant:"subheading",gutterBottom:!0},i),n.a.createElement("div",null,n.a.createElement(y.SocialIcon,{url:"https://www.linkedin.com/in/zhengyutay/",className:t.marginRight,style:{height:50,width:50}}),n.a.createElement(y.SocialIcon,{url:"https://github.com/ZhengYuTay",style:{height:50,width:50}})))},data:h})}),b=a(386),j=a.n(b),v=function(e){var t=e.classes;return n.a.createElement("div",{className:t.root},n.a.createElement(j.a,{defaultTitle:"Zheng Yu",meta:[{name:"description",content:"This is my github io website!"},{name:"keywords",content:"zhengyutay, javascript, full, stack,"}],titleTemplate:"%s | Zheng Yu"},n.a.createElement("meta",{name:"twitter:site",content:"@zhengyutay"}),n.a.createElement("meta",{name:"og:type",content:"website"}),n.a.createElement("meta",{name:"og:site_name",content:"zhengyutay"}),n.a.createElement("meta",{property:"og:title",content:"Meet Zheng Yu"}),n.a.createElement("meta",{property:"og:description",content:"This is my github io website!"}),n.a.createElement("link",{rel:"canonical",href:"https://zhengyutay.github.io/"}),n.a.createElement("html",{lang:"en"})),n.a.createElement(w,null))};v.propTypes={classes:i.a.object.isRequired},t.default=function(e){var t=function(t){function a(e){var a;return(a=t.call(this,e)||this).pageContext=null,a.pageContext=Object(d.a)(),a}s()(a,t);var A=a.prototype;return A.componentDidMount=function(){var e=document.querySelector("#server-side-jss");e&&e.parentNode&&e.parentNode.removeChild(e)},A.render=function(){return n.a.createElement(c.MuiThemeProvider,{theme:this.pageContext.theme,sheetsManager:this.pageContext.sheetsManager},n.a.createElement(l.a,null),n.a.createElement(e,this.props))},a}(n.a.Component);return t.propTypes={pageContext:i.a.object},t}(Object(c.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit}}})(v))},208:function(e,t,a){var A;e.exports=(A=a(218))&&A.default||A},212:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var A=a(0),n=a.n(A),r=a(12),i=a.n(r),c=a(203),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(208),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var l=a(44);a.d(t,"parsePath",function(){return l.a});var d=n.a.createContext({}),h=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},218:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=a(12),i=a.n(r),c=a(49),o=a(1),s=function(e){var t=e.location,a=o.a.getResourcesForPathname(t.pathname);return n.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},370:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return l}),a(124),a(71),a(123),a(372);var A=a(235),n=a(27),r=a(260),i=a.n(r),c=a(375),o=a.n(c),s=Object(n.createMuiTheme)({palette:{primary:{light:i.a[300],main:i.a[500],dark:i.a[700]},secondary:{light:o.a[300],main:o.a[500],dark:o.a[700]}},spacing:{unit:8}});function u(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new A.SheetsRegistry,generateClassName:Object(n.createGenerateClassName)()}}function l(){return e.browser?(window.__INIT_MATERIAL_UI__||(window.__INIT_MATERIAL_UI__=u()),window.__INIT_MATERIAL_UI__):u()}}).call(this,a(371))},378:function(e){e.exports={data:{dataJson:{developer:{name:"Tay Zheng Yu",role:"Full Stack Developer (JavaScript)",smallImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEAQIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAVC1tEDAOrZFiE//xAAbEAADAQADAQAAAAAAAAAAAAABAgMAEhMiMf/aAAgBAQABBQKzlVFKA9r4TbLNrZ5lDL5MeOR3/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/AQyE/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAEP/aAAgBAgEBPwFW6vf/xAAdEAACAgEFAAAAAAAAAAAAAAAAAREhAhASIjFB/9oACAEBAAY/AuPbLs8NysohyZLX/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAERMSFBUXGh/9oACAEBAAE/IaGmhSR9kj6cvgnNmFsSPZZohuj8M3KgQpK3sXQ//9oADAMBAAIAAwAAABAPL8H/xAAYEQACAwAAAAAAAAAAAAAAAAAAARAhMf/aAAgBAwEBPxBDYoxH/8QAFxEAAwEAAAAAAAAAAAAAAAAAABAxYf/aAAgBAgEBPxCIbP8A/8QAHhABAAIDAAIDAAAAAAAAAAAAAQARITFBUWFxkdH/2gAIAQEAAT8QAAoE48tSp5Nq6d8gPA9L9h0IN0YPWYd0e4g8C4pCC87/AEzKlq3wwmVWr1uZObl3P//Z",aspectRatio:.9888111888111888,src:"/static/self-51c8a07f38b07d3eb0cf9adf26052154-4e8db.jpg",srcSet:"/static/self-51c8a07f38b07d3eb0cf9adf26052154-7cc04.jpg 310w,\n/static/self-51c8a07f38b07d3eb0cf9adf26052154-69042.jpg 620w,\n/static/self-51c8a07f38b07d3eb0cf9adf26052154-4e8db.jpg 1240w,\n/static/self-51c8a07f38b07d3eb0cf9adf26052154-50ab1.jpg 1860w,\n/static/self-51c8a07f38b07d3eb0cf9adf26052154-5c893.jpg 2121w",sizes:"(max-width: 1240px) 100vw, 1240px"}}}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-6fd5cffff87121599f9d.js.map