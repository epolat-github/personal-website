(this["webpackJsonpwebsite.v2"]=this["webpackJsonpwebsite.v2"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),c=(a(15),a(1)),i=a(2),l=a(3),u=a(4),m=a(6),p=a(9),h=a.n(p),d=(a(18),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,a=this.props.data.description,n=(this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),r.a.createElement("h3",null,"I'm a future ",r.a.createElement("span",null,t)," ",a,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},n))))}}]),a}(n.Component)),f=(n.Component,n.Component,n.Component,n.Component,n.Component,n.Component,function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={foo:"bar",resumeData:{}},m.a.initialize("UA-163978223-1"),m.a.pageview(window.location.pathname),n}return Object(i.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{data:this.state.resumeData.main}))}}]),a}(n.Component));o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.92cc2f76.chunk.js.map