(this.webpackJsonpcronometrybe=this.webpackJsonpcronometrybe||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(13),i=n.n(a),r=(n(29),n(30),n(31),n(8)),o=n(9),l=n(10),u=n(12),m=n(11),d=n(39),h=n(18),j=n(19),p=n(23),b=n(2),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={clock:null},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clocker=setInterval((function(){var t=(new Date).toLocaleTimeString();e.setState({clock:t})}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clocker)}},{key:"render",value:function(){var e=this.state.clock;return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(p.a,{className:"quote",variant:"info",children:Object(b.jsx)("em",{children:'"Que n\xe3o se tenha pressa, mas que n\xe3o se perca tempo."'})}),Object(b.jsxs)(b.Fragment,{children:["Hora local: "," ",Object(b.jsx)("span",{className:"number clock",children:e}),Object(b.jsx)("hr",{})]})]})}}]),n}(c.Component),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={min:0,sec:0,stop:!0},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.minutes,c=t.seconds;(n||c)&&(this.setState({min:parseInt(n),sec:parseInt(c)}),document.getElementById("progress").style.strokeDashoffset="calc(240 - (240 * 100) / 100)",this.timer=setInterval((function(){e.state.sec||e.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{min:e.state.min-1,sec:60})})),e.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{sec:e.state.sec-1})}))}),1e3))}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.minutes,n=e.seconds,c=this.state,s=c.min,a=c.sec,i=parseInt(60*t)+parseInt(n),r=parseInt(60*s)+parseInt(a),o=document.getElementById("progress").style,l=(r/i*100).toFixed(2);if(o.strokeDashoffset="calc(240 - (240 * ".concat(l,") / 100)"),!this.state.min&&!this.state.sec){var u=["https://media.giphy.com/media/tIkn1XiX95mZPDZ4Gr/giphy.gif","https://media.giphy.com/media/lffW0sDfrzBXr1AxME/giphy.gif","https://media.giphy.com/media/KyCFtZE3LvGom5Imdj/giphy.gif","https://media.giphy.com/media/jqScOnk9Dqk7ILU4kF/giphy.gif","https://media.giphy.com/media/RgnTXvE24wFjUhB3Dt/giphy.gif","https://media.giphy.com/media/xUySTEJYS5F1Cayg92/giphy.gif","https://media.giphy.com/media/psaxnXPg4sfOilpRkN/giphy.gif"];clearInterval(this.timer),setTimeout((function(){var e=Math.round((u.length-1)*Math.random()),t=u[e];document.querySelector(".box").innerHTML='<img src="'.concat(t,'" width="500px" alt="tempo esgotado">')}),500)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state,t=e.min,n=e.sec;return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsxs)("div",{className:"percent",children:[Object(b.jsxs)("svg",{viewBox:"0 0 80 80",width:"220",height:"220",children:[Object(b.jsx)("circle",{cx:"40",cy:"40",r:"38"}),Object(b.jsx)("circle",{id:"progress",cx:"40",cy:"40",r:"38"})]}),Object(b.jsx)("div",{className:"number",children:Object(b.jsxs)("h2",{children:[t>=10?t:"0".concat(t)," : ",n>=10?n:"0".concat(n)," "]})})]}),Object(b.jsx)("h2",{className:"text",children:"Aguarde . . ."})]})}}]),n}(c.Component),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={minutes:0,seconds:0,init:!1},c}return Object(l.a)(n,[{key:"sendTime",value:function(){var e=document.querySelectorAll(".toHide"),t=[document.querySelector("[name='minutes']"),document.querySelector("[name='seconds']")],n=t[0],c=t[1],s=parseInt(n.value)>=0&&parseInt(n.value)<=99,a=parseInt(c.value)>=0&&parseInt(c.value)<=59;s&&a?0===parseInt(n.value)&&0===parseInt(c.value)?alert("Tempo inv\xe1lido!"):(e.forEach((function(e){return e.style.display="none"})),this.setState({minutes:parseInt(n.value)||0,seconds:parseInt(c.value)||0,init:!0}),n.value=null,c.value=null):alert("Limite m\xe1ximo de 99 para minutos e 59 para segundos.")}},{key:"stop",value:function(){var e=[document.querySelector("[name='minutes']"),document.querySelector("[name='seconds']")],t=e[1];e[0].value=0,t.value=0,document.querySelectorAll(".toHide").forEach((function(e){return e.style.display=""})),this.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{init:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.minutes,c=t.seconds,a=t.init;return Object(b.jsxs)(s.a.Fragment,{children:[a?Object(b.jsx)(f,{minutes:n,seconds:c}):Object(b.jsx)(v,{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"input-group toHide",children:[Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsx)(d.a.Prepend,{children:Object(b.jsx)(d.a.Text,{id:"inputGroup-sizing-default",children:"Minutos"})}),Object(b.jsx)(j.a.Control,{className:"form-control",defaultValue:"0",name:"minutes",type:"number",min:"0",max:"99"})]}),Object(b.jsxs)(d.a,{className:"mb-3",children:[Object(b.jsx)(d.a.Prepend,{children:Object(b.jsx)(d.a.Text,{id:"inputGroup-sizing-default",children:"Segundos"})}),Object(b.jsx)(j.a.Control,{className:"form-control",defaultValue:"0",name:"seconds",type:"number",min:"0",max:"59"})]})]}),Object(b.jsxs)("div",{className:"button-group",children:[Object(b.jsx)(h.a,{variant:"primary",className:"toHide",onClick:function(){return e.sendTime()},children:"Iniciar"}),Object(b.jsx)(h.a,{variant:"danger",onClick:function(){return e.stop()},children:"Encerrar"})]})]})}}]),n}(c.Component);var g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{className:"title",children:"CronomeTrybe"}),Object(b.jsx)(O,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.e6ed9712.chunk.js.map