(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),r=n(3),a=n.n(r),c=(n(13),n(4)),u=n(5),l=n(8),o=n(7),h=n(6),d=n.n(h),j=n(0),b=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={id:"",name:"",login:"",html_url:"",avatarUrl:"",node_id:"",gists_url:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.a.get(this.props.source,(function(e){var n=e;n&&t.setState({id:n.id,name:n.name,login:n.login,html_url:n.html_url,avatarUrl:n.avatar_url,node_id:n.node_id,gists_url:n.gists_url})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:["ID:",this.state.id]}),Object(j.jsxs)("h3",{children:["Name:",this.state.name]}),Object(j.jsx)("img",{src:this.state.avatarUrl}),Object(j.jsxs)("h3",{children:["NodeID:",this.state.node_id]}),Object(j.jsxs)("h3",{children:["My GitHub:",Object(j.jsxs)("a",{href:this.state.html_url,children:["GitHub.com/frankhuangg",Object(j.jsx)("br",{})]})]}),Object(j.jsx)("a",{href:this.state.gists_url,children:"gists_url"})]})}}]),n}(i.a.Component);a.a.render(Object(j.jsx)(b,{source:"https://api.github.com/users/frankhuangg"}),document.getElementById("root"));n(15);(function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),r(t),a(t)}))})()}},[[16,1,2]]]);
//# sourceMappingURL=main.692c212f.chunk.js.map