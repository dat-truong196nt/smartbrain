(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{403:function(t,e,n){"use strict";n.r(e);var i=n(13),a=n.n(i),c=n(76),s=n.n(c),r=(n(87),n(77)),o=n(78),l=n(82),u=n(81),b=(n(88),n(26),n(6)),d=function(){return Object(b.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(b.jsx)("p",{className:"f3 underline dim black pa3 pointer",children:"Sign out"})})},j=n(79),p=n.p+"static/media/brain.b6394610.png",h=(n(90),function(){return Object(b.jsx)(j.a,{className:"tilt pa2",children:Object(b.jsx)("div",{className:"pa3 ba-gradient",children:Object(b.jsx)("img",{alt:"Logo",src:p})})})}),f=(n(91),function(t){var e=t.updateUrl,n=t.submitBtn;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"f3 center",children:"This SmartBrain will detect faces in your picture. Git it a try"}),Object(b.jsx)("div",{className:"center",children:Object(b.jsxs)("div",{className:"pa3 br2 box-shadow",style:{width:"60%"},children:[Object(b.jsx)("input",{className:"pa2",style:{width:"70%"},type:"text",onChange:e}),Object(b.jsx)("button",{className:"pa2 pointer",style:{width:"30%"},onClick:n,children:" Detect"})]})})]})}),m=function(){return Object(b.jsx)("p",{className:"f1 light-yellow",style:{display:"flex",justifyContent:"center"},children:"Your current ranking is #0"})},x=(n(92),function(t){return t.reduce((function(t,e){return t.push(Object(b.jsx)("div",{className:"bounding-box",style:{top:e.top,bottom:e.bottom,left:e.left,right:e.right}})),t}),[])}),g=function(t){var e=t.imageUrl,n=t.boxs;return e?Object(b.jsx)("div",{className:"pa3 ma3",style:{display:"flex",justifyContent:"center"},children:Object(b.jsxs)("div",{className:"absolute",children:[Object(b.jsx)("img",{id:"imgToDetect",alt:"img-detect",src:e,style:{width:"500px",height:"auto"}}),x(n)]})}):Object(b.jsx)("div",{className:"pa3 ma3",style:{display:"flex",justifyContent:"center"}})},O=n(80),y=n.n(O),v=n(46),w=n.n(v),N=new w.a.App({apiKey:"aaf71315bf854f6895f2a76c9a71a794"}),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).calculateFacePosition=function(t){var e=t.rawData.outputs[0].data.regions,n=document.getElementById("imgToDetect");return e.map((function(t){var e=t.region_info.bounding_box;return{top:e.top_row*n.height,bottom:(1-e.bottom_row)*n.height,left:e.left_col*n.width,right:(1-e.right_col)*n.width}}))},t.updateUrl=function(e){t.setState({input:e.target.value})},t.onBtnSubmit=function(){t.setState({url:t.state.input}),N.models.predict(w.a.FACE_DETECT_MODEL,t.state.input).then((function(e){return t.displayBox(t.calculateFacePosition(e))})).catch((function(t){return console.log}))},t.state={input:"",url:"",boxs:[]},t}return Object(o.a)(n,[{key:"displayBox",value:function(t){this.setState({boxs:t})}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{className:"particles"}),Object(b.jsx)(d,{}),Object(b.jsx)(h,{}),Object(b.jsx)(m,{}),Object(b.jsx)(f,{updateUrl:this.updateUrl,submitBtn:this.onBtnSubmit}),Object(b.jsx)(g,{boxs:this.state.boxs,imageUrl:this.state.url})]})}}]),n}(i.Component),B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,404)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),i(t),a(t),c(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),B()},87:function(t,e,n){},88:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){}},[[403,1,2]]]);
//# sourceMappingURL=main.26d4f474.chunk.js.map