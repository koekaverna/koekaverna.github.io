(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(t,e,a){"use strict";var r=a(6),s=a(3),i=a(58),l=a(11),n=a(4),o=a(19),c=a(96),p=a(28),u=a(2),C=a(21),d=a(36).f,v=a(18).f,f=a(7).f,g=a(156).trim,_=s.Number,m=_.prototype,h="Number"==o(C(m)),b=function(t){var e,a,r,s,i,l,n,o,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=g(c)).charCodeAt(0))||45===e){if(88===(a=c.charCodeAt(2))||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+c}for(l=(i=c.slice(2)).length,n=0;n<l;n++)if((o=i.charCodeAt(n))<48||o>s)return NaN;return parseInt(i,r)}return+c};if(i("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(h?u((function(){m.valueOf.call(a)})):"Number"!=o(a))?c(new _(b(e)),a,I):b(e)},k=r?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;k.length>N;N++)n(_,A=k[N])&&!n(I,A)&&f(I,A,v(_,A));I.prototype=m,m.constructor=I,l(s,"Number",I)}},144:function(t,e,a){},155:function(t,e,a){},156:function(t,e,a){var r=a(16),s="["+a(157)+"]",i=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),n=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:n(1),end:n(2),trim:n(3)}},157:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},158:function(t,e,a){"use strict";var r=a(144);a.n(r).a},162:function(t,e,a){"use strict";a.r(e);a(155),a(139);var r={name:"GithubCircleIcon",props:{title:{type:String,default:"Github Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},s=a(27),i=Object(s.a)(r,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon github-circle-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,l={name:"TelegramIcon",props:{title:{type:String,default:"Telegram icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},n=Object(s.a)(l,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon telegram-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,o={name:"VkCircleIcon",props:{title:{type:String,default:"Vk Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},c=Object(s.a)(o,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon vk-circle-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M5.5,8.5H7C7.36,8.5 7.5,8.66 7.64,9.07C8.36,11.17 9.57,13 10.07,13C10.26,13 10.35,12.92 10.35,12.45V10.28C10.29,9.28 9.76,9.19 9.76,8.84C9.76,8.67 9.9,8.5 10.14,8.5H12.45C12.77,8.5 12.87,8.67 12.87,9.04V11.96C12.87,12.27 13,12.38 13.1,12.38C13.29,12.38 13.45,12.27 13.79,11.93C14.85,10.74 15.6,8.92 15.6,8.92C15.7,8.7 15.87,8.5 16.24,8.5H17.71C18.16,8.5 18.26,8.73 18.16,9.04C17.97,9.9 16.18,12.43 16.18,12.43C16,12.68 15.96,12.8 16.18,13.09C16.33,13.3 16.85,13.74 17.19,14.15C17.83,14.86 18.3,15.46 18.44,15.87C18.56,16.29 18.35,16.5 17.93,16.5H16.45C15.89,16.5 15.73,16.05 14.73,15.05C13.85,14.21 13.5,14.1 13.26,14.1C12.96,14.1 12.87,14.18 12.87,14.61V15.93C12.87,16.29 12.76,16.5 11.82,16.5C10.26,16.5 8.54,15.55 7.33,13.8C5.5,11.24 5,9.31 5,8.92C5,8.7 5.08,8.5 5.5,8.5Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,p={name:"InstagramIcon",props:{title:{type:String,default:"Instagram icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},u={components:{GithubCircleIcon:i,TelegramIcon:n,VkCircleIcon:c,InstagramIcon:Object(s.a)(p,(function(t,e){var a=e._c;return a("span",e._g(e._b({staticClass:"material-design-icon instagram-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"}},[a("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports}},C=(a(158),Object(s.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative bg-white shadow-xl rounded p-6 pb-4"},[a("div",{staticClass:"absolute -m-6 rounded rounded-b-none h-24 w-full bg-gray-400"}),t._v(" "),a("img",{staticClass:"relative w-32 h-32 rounded-full mx-auto",attrs:{src:"/koe.jpg",alt:"Egor Korobov"}}),t._v(" "),a("div",{staticClass:"text-center"},[a("h2",{staticClass:"mb-0"},[t._v("Egor Korobov")]),t._v(" "),a("div",{staticClass:"font-mono uppercase mb-5"},[t._v("Web Developer")]),t._v(" "),a("div",[t._v("📍 Yekaterinburg, Russia")]),t._v(" "),a("div",[t._v("👥 CopyTrans")]),t._v(" "),t._m(0),t._v(" "),a("hr",{staticClass:"-mx-6 my-4"}),t._v(" "),a("div",{staticClass:"social"},[a("a",{attrs:{target:"_blank",href:"https://github.com/koekaverna"}},[a("github-circle-icon")],1),t._v(" "),a("a",{attrs:{target:"_blank",href:"http://t.me/koekaverna"}},[a("telegram-icon")],1),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://vk.com/kaverna"}},[a("vk-circle-icon")],1),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://www.instagram.com/koekaverna"}},[a("instagram-icon")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("📬 "),e("a",{attrs:{href:"mailto:koe.kaverna@gmail.com"}},[this._v("koe.kaverna@gmail.com")])])}],!1,null,"fd7376d0",null));e.default=C.exports}}]);