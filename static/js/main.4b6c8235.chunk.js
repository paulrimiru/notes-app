(this["webpackJsonpanalog-notes-app"]=this["webpackJsonpanalog-notes-app"]||[]).push([[0],{168:function(e,t,a){e.exports=a(232)},173:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},220:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(153),r=a(266),c=a(91),o=a(270),i=a(0),l=a.n(i),s=a(14),u=a.n(s),m=a(152),d=a(65),p=(a(173),a(9)),f=a(154),v=a(17),g=a(90);function b(e,t){var a=Object(i.useState)((function(){try{var a=window.localStorage.getItem(e);return a||t}catch(n){return console.log(n),t}})),n=Object(p.a)(a,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){c(window.localStorage.getItem(e)||r)}),[window.localStorage.getItem(e)]),[r,function(t){try{window.localStorage.setItem(e,t||"")}catch(a){console.log(a)}}]}function h(){var e=Object(g.b)().enqueueSnackbar;return[function(t){e(t,{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"},preventDuplicate:!0})},function(t){e(t,{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"},preventDuplicate:!0})},function(t){e(t,{variant:"info",anchorOrigin:{vertical:"bottom",horizontal:"center"},preventDuplicate:!0})}]}var E=a(6),j=a.n(E),O=a(15),y=a(10),w=a(16),x=a(279),k=a(267),N=a(278),C=a(269),S=a(69),F=a.n(S),D=a(111),I=a.n(D),T=a(151),B=a.n(T),P=a(265),R=Object(P.a)((function(e){return{button:{marginBottom:e.spacing(4)},notesList:{flexGrow:1},orgModal:{padding:24},orgSelector:{maxWidth:"50%"}}})),A=a(71),V=a(237),q=Object(P.a)((function(e){return{container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:8,marginBottom:8,height:54,backgroudColor:"#e0e0e0","&:hover":{cursor:"pointer"}},title:{paddingLeft:12},newCategoryTextField:{flexGrow:1,paddingLeft:12}}})),W=a(60),z=a.n(W),_=a(87),L=a.n(_),M=a(49),Z=a.n(M),U=a(59),G=a.n(U),J=function(e){var t=e.title,a=e.mode,n=e.onSave,r=e.onDelete,c=e.onClick,o=e.id,s=e.selectForEdit,u=e.onEdit,m=q(),d=Object(i.useState)(t),f=Object(p.a)(d,2),v=f[0],g=f[1],b=function(){"create"===a?n({name:v}):u({name:v,id:o})},h=l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{variant:"body1",gutterBottom:!0,className:m.title},t),l.a.createElement("div",null,l.a.createElement(k.a,{edge:"end","aria-label":"edit",onClick:function(){return s(o)}},l.a.createElement(G.a,null)),l.a.createElement(k.a,{"aria-label":"delete",onClick:function(){r(o)}},l.a.createElement(z.a,null)))),E=l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{label:"Category",variant:"filled",className:m.newCategoryTextField,autoFocus:!0,value:v,onKeyPress:function(e){"Enter"===e.key&&b()},onChange:function(e){return g(e.target.value)}}),l.a.createElement(k.a,{"aria-label":"done",onClick:b},l.a.createElement(Z.a,null)));return l.a.createElement(V.a,{variant:"outlined",className:m.container,onClick:function(){"display"===a&&c(o)}},"display"!==a?E:h)},$=function(e){var t=e.data,a=e.onSave,n=e.onDelete,r=e.onClick,c=e.selectForEdit,o=e.onEdit;return l.a.createElement("div",{className:"list"},l.a.createElement(A.a,{variant:"h6",gutterBottom:!0},"Categories"),t.map((function(e,t){return l.a.createElement(J,{key:t,id:e.id,title:e.name,mode:e.mode,onSave:a,onDelete:n,selectForEdit:c,onEdit:o,onClick:r})})))},K=(a(200),a(271)),Q=a(282),Y=a(272),H=a(273),X=a(274),ee=a(275),te=a(276),ae=a(262),ne=Object(P.a)((function(e){return Object(ae.a)({root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"},avatar:{color:e.palette.getContrastText(o.a.A200),backgroundColor:o.a.A200},newNoteTextField:{flexGrow:1,paddingLeft:12}})})),re=function(e){var t,a=e.note,n=e.onNoteSelected,r=e.onSave,c=e.onDelete,o=e.selectForEdit,s=e.onEdit,u=ne(),m=Object(i.useState)(a.name),d=Object(p.a)(m,2),f=d[0],v=d[1],g=function(){"create"===a.mode?r({name:f}):s({name:f,id:a.id})},b=l.a.createElement(l.a.Fragment,null,l.a.createElement(K.a,null,l.a.createElement(Q.a,{className:u.avatar},null===(t=a.name.split("")[0])||void 0===t?void 0:t.toLocaleUpperCase())),l.a.createElement(Y.a,{primary:a.name,secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{component:"span",variant:"body2",className:u.inline,color:"textPrimary"},"Last Modified: ",a.updatedAt&&(new Intl.DateTimeFormat).format(new Date(a.updatedAt))))}),l.a.createElement(H.a,null,l.a.createElement(k.a,{edge:"end","aria-label":"edit",onClick:function(){return o(a.id)}},l.a.createElement(G.a,null)),l.a.createElement(k.a,{edge:"end","aria-label":"delete",onClick:function(){return c(a.id)}},l.a.createElement(z.a,null)))),h=l.a.createElement(l.a.Fragment,null,l.a.createElement(X.a,{label:"Meeting",variant:"filled",className:u.newNoteTextField,autoFocus:!0,value:f,onKeyPress:function(e){"Enter"===e.key&&g()},onChange:function(e){return v(e.target.value)}}),l.a.createElement(k.a,{"aria-label":"done",onClick:g},l.a.createElement(Z.a,null)));return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a,{alignItems:"flex-start",button:!0,onClick:function(){return n(a)}},"display"!==a.mode?h:b),l.a.createElement(te.a,{variant:"inset",component:"li"}))},ce=a(283),oe=a(280),ie=Object(P.a)((function(e){return Object(ae.a)({attendees:{padding:12,width:"80%",alignSelf:"center",height:"8%"},attendeesTag:{marginLeft:8,marginTop:16,marginBottom:16},meetingNotes:{flexGrow:1,width:"80%",alignSelf:"center",overflowY:"auto"},inputRoot:{display:"flex",flexDirection:"row",alignItems:"center",width:"80%",height:"20%",alignSelf:"center",marginBottom:48},inputField:{},doneButton:{justifySelf:"center"},header:{width:"80%",alignSelf:"center"},inputFieldTitle:{},inputContainer:{display:"flex",flexDirection:"column",width:"100%"},actions:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})})),le=a(146),se=a.n(le),ue=(a(201),Object(P.a)((function(e){return Object(ae.a)({inline:{width:"96%"},actions:{display:"flex",flexDirection:"column",justifyContent:"center",width:50},inputRoot:{display:"flex",flexDirection:"row",alignItems:"center",alignSelf:"center",width:"100%",marginBottom:48},inputField:{},doneButton:{justifySelf:"center"},header:{},inputFieldTitle:{},inputContainer:{display:"flex",flexDirection:"column",width:"100%"},displayContainer:{display:"flex",flexDirection:"row",alignItems:"center"},displayTextContainer:{flexGrow:1}})}))),me=function(e){var t=e.note,a=e.title,n=e.id,r=e.mode,c=e.onEdit,o=e.onSave,s=e.onDelete,u=ue(),m=Object(i.useState)(t),d=Object(p.a)(m,2),f=d[0],v=d[1],g=Object(i.useState)(a.split(" ")[2]),b=Object(p.a)(g,2),h=b[0],E=b[1],j=l.a.createElement("div",{className:u.displayContainer},l.a.createElement(Y.a,{primary:a,classes:{secondary:u.inline},secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{component:"span",variant:"body2",color:"textPrimary",paragraph:!0,align:"justify"},t))}),l.a.createElement(H.a,{className:u.actions},l.a.createElement(k.a,{edge:"end","aria-label":"edit",onClick:function(){return c(n)}},l.a.createElement(G.a,null)),l.a.createElement(k.a,{edge:"end","aria-label":"delete",onClick:function(){return s(n)}},l.a.createElement(z.a,null)))),O=l.a.createElement("div",{className:u.inputRoot},l.a.createElement("div",{className:u.inputContainer},l.a.createElement(X.a,{label:"Title",variant:"filled",className:u.inputFieldTitle,autoFocus:!0,value:h,onChange:function(e){return E(e.target.value)}}),l.a.createElement(X.a,{className:u.inputField,label:"Write your note here",multiline:!0,rows:4,value:f,onChange:function(e){return v(e.target.value)},helperText:"Press enter or icon when done writing",variant:"filled"})),l.a.createElement(k.a,{type:"submit",className:u.doneButton,"aria-label":"search",onClick:function(){o({id:n,title:"".concat(a.split(" ")[0]," - ").concat(h),note:f})}},l.a.createElement(Z.a,null)));return l.a.createElement(ee.a,{alignItems:"flex-start"},"edit"===r?O:j)},de=a(144),pe=a.n(de),fe=function(){var e=localStorage.getItem("token");return pe.a.create({baseURL:"https://analog-notes-api.herokuapp.com",headers:e?{Authorization:"Bearer ".concat(e)}:{},timeout:9e4})},ve=function(e){var t=e.note,a=e.onUpdate,n=e.orgId,r=ie(),c=Object(i.useState)([]),o=Object(p.a)(c,2),s=o[0],u=o[1],m=Object(i.useState)(""),d=Object(p.a)(m,2),f=d[0],v=d[1],g=Object(i.useState)(""),b=Object(p.a)(g,2),E=b[0],x=b[1],N=Object(i.useState)(["Me"]),S=Object(p.a)(N,2),F=S[0],D=S[1],I=Object(i.useState)([]),T=Object(p.a)(I,2),B=T[0],P=T[1],R=h(),V=Object(p.a)(R,2),q=V[0],W=V[1],z=function(){u([].concat(Object(w.a)(s),[{id:s.length.toString(),mode:"display",title:"".concat((new Intl.DateTimeFormat).format(new Date)," - ").concat(E),note:f}])),v(""),x("")};Object(i.useEffect)((function(){if(console.log(t),t.note){var e=JSON.parse(t.note);D(e.attendees),u(e.notes)}else D([]),u([]);n&&_(n)}),[e]);var _=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().get("/organisation/".concat(t,"/members"));case 3:a=e.sent,P(a.data.map((function(e){return e.username}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L("eror",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e,t){switch(e){case"success":q("Information fetched");break;case"error":W(t||"request failed")}},M=function(e){u(s.map((function(t){return t.id===e.id?Object(y.a)(Object(y.a)(Object(y.a)({},t),e),{},{mode:"display"}):t})))},U=function(e){u(s.filter((function(t){return t.id!==e})))},G=function(e){u(s.map((function(t){return t.id===e?Object(y.a)(Object(y.a)({},t),{},{mode:"edit"}):t})))};return t.id?l.a.createElement("div",{className:"meeting"},l.a.createElement(A.a,{variant:"h6",gutterBottom:!0,className:r.header},t.name),l.a.createElement(oe.a,{className:r.attendees,multiple:!0,value:F,onChange:function(e,t){t&&D(t)},id:"tags-filled",options:B,defaultValue:["Me"],renderTags:function(e,t){return e.map((function(e,a){var n;return l.a.createElement(ce.a,Object.assign({color:"primary",label:e,avatar:l.a.createElement(Q.a,null,null===(n=e.split("")[0])||void 0===n?void 0:n.toUpperCase())},t({index:a}),{className:r.attendeesTag}))}))},renderInput:function(e){return l.a.createElement(X.a,Object.assign({},e,{variant:"filled",label:"Members Present",miltiline:!0,rows:3}))}}),l.a.createElement(C.a,{className:r.meetingNotes},s.map((function(e){return l.a.createElement(me,Object.assign({},e,{onEdit:G,onDelete:U,onSave:M}))}))),l.a.createElement("div",{className:r.inputRoot},l.a.createElement("div",{className:r.inputContainer},l.a.createElement(X.a,{label:"Title",variant:"filled",className:r.inputFieldTitle,autoFocus:!0,value:E,onKeyPress:function(e){"Enter"===e.key&&z()},onChange:function(e){return x(e.target.value)}}),l.a.createElement(X.a,{className:r.inputField,label:"Write your note here",multiline:!0,rows:4,value:f,onChange:function(e){return v(e.target.value)},helperText:"Press the done icon when done writing",variant:"filled"})),l.a.createElement("div",{className:r.actions},l.a.createElement(k.a,{className:r.doneButton,"aria-label":"search",onClick:function(e){z()}},l.a.createElement(Z.a,null)),l.a.createElement(k.a,{className:r.doneButton,"aria-label":"search",onClick:function(e){!function(){var e={attendees:F,notes:s},n=JSON.stringify(e);a({id:t.id,note:n})}()}},l.a.createElement(se.a,null))))):l.a.createElement("div",{className:"nomeeting"},"No meeting selected")},ge=a(238),be=a(147),he=a.n(be),Ee=(a(220),Object(P.a)((function(){return Object(ae.a)({backdrop:{zIndex:1500,color:"#fff"},loader:{transform:"scale(3.5)"}})}))),je=function(e){var t=e.loading,a=Ee();return l.a.createElement(ge.a,{className:a.backdrop,open:t},l.a.createElement(he.a,{active:t,type:"line-scale-pulse-out-rapid",innerClassName:a.loader}))},Oe=a(277),ye=a(149),we=a.n(ye),xe=a(150),ke=a.n(xe),Ne=a(155),Ce=a(70),Se=a.n(Ce),Fe=(a(229),a(148)),De=a.n(Fe)()((function(e){return Object(ae.a)({textField:{marginTop:24,marginBottom:24},dropDown:{marginTop:12,marginBottom:12}})})),Ie=function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)},Te=Object(i.forwardRef)((function(e,t){var a=e.name,n=e.error,r=e.defaultValue,c=Object(i.useState)(!0),o=Object(p.a)(c,2),s=o[0],u=o[1],m=De(),d=function(){u(!s)};return l.a.createElement(X.a,{fullWidth:!0,defaultValue:r,error:!!n,id:a,label:Ie(a),name:a,variant:"filled",type:s?"password":"text",className:m.textField,inputRef:t,helperText:null===n||void 0===n?void 0:n.message,InputProps:{endAdornment:l.a.createElement(Oe.a,{position:"end"},l.a.createElement(k.a,{"aria-label":"toggle password visibility",onClick:d,onMouseDown:d},s?l.a.createElement(ke.a,null):l.a.createElement(we.a,null)))}})})),Be=Object(i.forwardRef)((function(e,t){var a=e.name,n=e.type,r=e.error,c=e.defaultValue,o=De();return console.log(r),l.a.createElement(X.a,{fullWidth:!0,defaultValue:c,error:!!r,className:o.textField,id:a,multiline:"multiline"===n,label:Ie(a),name:a,variant:"filled",type:"text",inputRef:t,helperText:null===r||void 0===r?void 0:r.message})})),Pe=Object(i.forwardRef)((function(e,t){var a=e.name,n=e.options,r=e.defaultValue,c=De();return l.a.createElement(X.a,{fullWidth:!0,name:a,label:Ie(a),defaultValue:r,id:a,select:!0,inputRef:t,className:c.dropDown,SelectProps:{native:!0,autoWidth:!0},variant:"filled"},n.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))}));function Re(e){var t=e.fields,a=e.actionsName,n=e.onSubmit,r=e.title,c=e.onCancel,o=e.hasCancel,i=Object(Ne.a)({reValidateMode:"onSubmit"}),s=i.register,u=i.handleSubmit,m=i.errors;return l.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),u(n)(e)},className:"form"},l.a.createElement("div",{className:"form-header"},l.a.createElement(A.a,{variant:"h6"},r)),l.a.createElement("div",{className:"form-container"},t.map((function(e){return function(e,t){var a=e.error,n=e.name;switch(e.type){case"text":case"multiline":return l.a.createElement(Be,{key:Se.a.generate(),error:a,name:n,ref:t,type:e.type,defaultValue:e.defaultValue});case"password":return l.a.createElement(Te,{type:e.type,key:Se.a.generate(),error:a,name:n,ref:t,defaultValue:e.defaultValue});case"custom":return l.a.createElement(e.component,{type:e.type,key:Se.a.generate(),error:a,name:n,ref:t,defaultValue:e.defaultValue});case"dropdown":return l.a.createElement(Pe,{type:e.type,key:Se.a.generate(),error:a,name:n,ref:t,options:e.options,defaultValue:e.defaultValue});default:return l.a.createElement("div",{className:"invalid"},"Invalid type passed")}}(Object(y.a)(Object(y.a)({},e),{},{error:m[e.name]}),s(e.validations))}))),l.a.createElement("div",{className:"form-actions"},l.a.createElement(N.a,{variant:"contained",color:"primary",size:"large",disableElevation:!0,type:"submit"},a),o&&l.a.createElement(N.a,{color:"primary",size:"large",disableElevation:!0,onClick:c},"Cancel")))}var Ae=function(){var e,t,a,n=Object(i.useState)([]),r=Object(p.a)(n,2),c=r[0],o=r[1],s=Object(i.useState)([]),u=Object(p.a)(s,2),m=u[0],d=u[1],f=Object(i.useState)([]),g=Object(p.a)(f,2),b=g[0],E=g[1],S=Object(i.useState)({open:!1,selectedCategory:""}),D=Object(p.a)(S,2),T=D[0],P=D[1],A=h(),V=Object(p.a)(A,2),q=V[0],W=V[1],z=Object(i.useState)({open:!1,mode:"create"}),_=Object(p.a)(z,2),M=_[0],Z=_[1],U=Object(i.useState)(!1),G=Object(p.a)(U,2),J=G[0],K=G[1],Q=Object(i.useState)({name:"",id:""}),Y=Object(p.a)(Q,2),H=Y[0],X=Y[1],ee=R(),te=Object(v.g)();Object(i.useEffect)((function(){K(!0),be()}),[]),Object(i.useEffect)((function(){var e;b.length&&(K(!0),he((null===(e=b.find((function(e){return e.selected})))||void 0===e?void 0:e.id)||b[0].id))}),[b]);var ae=function(e,t){switch(e){case"success":q("Information fetched");break;case"error":W(t||"request failed")}},ne=function(e){d(m.map((function(t){return t.id===e?Object(y.a)(Object(y.a)({},t),{},{mode:"edit"}):t})))},ce=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P({open:T.selectedCategory===t||""===T.selectedCategory?!T.open:T.open,selectedCategory:t}),T.selectedCategory===t){e.next=4;break}return e.next=4,Ee(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){X({id:e.id,name:e.name,note:e.notes})},ie=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().delete("/note/"+t);case 4:d(m.filter((function(e){return e.id!==t}))),K(!1),ae("success"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().delete("/category/"+t);case 4:o(c.filter((function(e){return e.id!==t}))),K(!1),ae("success"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().post("/organisation",t);case 3:a=e.sent,E([].concat(Object(w.a)(b),[Object(y.a)(Object(y.a)({},a.data),{},{selected:!0})])),Z(Object(y.a)(Object(y.a)({},M),{},{open:!1})),ae("success"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),ae("error",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().put("/organisation",{id:(null===(a=b.find((function(e){return e.selected})))||void 0===a?void 0:a.id)||b[0].id,members:[t.name]});case 3:Z(Object(y.a)(Object(y.a)({},M),{},{open:!1})),ae("success"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),ae("error",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().post("/category",Object(y.a)(Object(y.a)({},t),{},{organisationId:(null===(a=b.find((function(e){return e.selected})))||void 0===a?void 0:a.id)||b[0].id}));case 4:n=e.sent,o([].concat(Object(w.a)(c.filter((function(e){return"create"!==e.mode}))),[Object(y.a)(Object(y.a)({},n.data),{},{mode:"display"})])),K(!1),ae("success"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().put("/category",t);case 4:a=e.sent,o([].concat(Object(w.a)(c.filter((function(e){return"edit"!==e.mode}))),[Object(y.a)(Object(y.a)({},a.data),{},{mode:"display"})])),K(!1),ae("success"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().post("/note",Object(y.a)(Object(y.a)({},t),{},{categoryId:T.selectedCategory}));case 4:a=e.sent,d([].concat(Object(w.a)(m.filter((function(e){return"create"!==e.mode}))),[Object(y.a)(Object(y.a)({},a.data),{},{mode:"display"})])),K(!1),ae("success"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fe().put("/note",t);case 4:e.sent,d(m.map((function(e){return e.id===t.id?Object(y.a)(Object(y.a)({},e),{},{notes:t.note||e.notes,name:t.name||e.name,mode:"display"}):e}))),t.note?X(Object(y.a)(Object(y.a)({},H),{},{note:t.note})):X(Object(y.a)(Object(y.a)({},H),{},{name:t.name})),K(!1),ae("success"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),K(!1),console.log(e.t0),ae("error",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().get("/organisation");case 3:if((t=e.sent).data.length){e.next=8;break}return Z(Object(y.a)(Object(y.a)({},M),{},{open:!0})),K(!1),e.abrupt("return");case 8:E(t.data.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{selected:0===t})}))),K(!1),ae("success","Fetched organisations successfully"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),K(!1),ae("error",e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().get("/category/".concat(t));case 3:a=e.sent,o(a.data.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{mode:"display"})}))),K(!1),ae("success","Fetched categories successfully"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),K(!1),ae("error",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe().get("/note/".concat(t));case 3:a=e.sent,d(a.data.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{mode:"display"})}))),K(!1),ae("success","Fetched notes successfully"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),K(!1),ae("error",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"app"},l.a.createElement(je,{loading:J}),l.a.createElement(x.a,{open:M.open,className:ee.orgModal,fullWidth:!0,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},l.a.createElement(Re,{title:"Please create an organisation",actionsName:"submit",onSubmit:"create"===M.mode?se:ue,hasCancel:!1,fields:[{type:"text",name:"name",validations:{required:"Required",min:{value:2,message:"Please enter a name with at least 2 characters"}}}]})),l.a.createElement("div",{className:"app-container"},l.a.createElement("div",{className:"app-container-master"},l.a.createElement("div",{className:"app-container-master__categories"},l.a.createElement(F.a,{variant:"h4"},"Notes"),l.a.createElement("div",{className:"app-container-master__categories-header"},l.a.createElement(L.a,{select:!0,SelectProps:{native:!0},variant:"filled",fullWidth:!0,className:ee.orgSelector},b.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement(k.a,{"aria-label":"search",onClick:function(){Z({open:!0,mode:"invite"})}},l.a.createElement(B.a,null))),l.a.createElement("div",{className:"app-container-master__list"},l.a.createElement($,{data:c,onSave:me,onDelete:le,onClick:ce,selectForEdit:function(e){o(c.map((function(t){return t.id===e?Object(y.a)(Object(y.a)({},t),{},{mode:"edit"}):t})))},onEdit:de})),l.a.createElement(N.a,{variant:"contained",color:"primary",size:"large",className:ee.button,endIcon:l.a.createElement(I.a,null),onClick:function(){o([].concat(Object(w.a)(c),[{name:"",id:c.length.toString(),mode:"create"}]))}},"New"),l.a.createElement(N.a,{variant:"contained",color:"primary",size:"large",onClick:function(){te.push("/auth"),localStorage.removeItem("token")}},"Logout")),l.a.createElement("div",{className:"app-container-master__notes".concat(T.open?"-visible":"")},l.a.createElement(F.a,{variant:"h6",gutterBottom:!0},null===(e=c.find((function(e){return e.id===T.selectedCategory})))||void 0===e?void 0:e.name," Notes"),l.a.createElement(C.a,{className:ee.notesList},m.map((function(e,t){return l.a.createElement(re,{key:t,note:e,onNoteSelected:oe,onSave:pe,onDelete:ie,selectForEdit:ne,onEdit:ge})}))),l.a.createElement(N.a,{variant:"contained",color:"primary",size:"large",className:ee.button,endIcon:l.a.createElement(I.a,null),onClick:function(){d([].concat(Object(w.a)(m),[{name:"",id:m.length.toString(),mode:"create"}]))}},"New"))),l.a.createElement("div",{className:"app-container-detail"},l.a.createElement(ve,{note:H,onUpdate:ge,orgId:(null===(t=b.find((function(e){return e.selected})))||void 0===t?void 0:t.id)||(null===(a=b[0])||void 0===a?void 0:a.id)}))))},Ve=(a(231),a(281)),qe=Object(P.a)((function(e){return Object(ae.a)({textfield:{marginTop:e.spacing(3),marginBottom:e.spacing(3),width:"100%"},button:{alignSelf:"center",textTransform:"none",fontSize:"18px",fontWeight:400}})})),We=function(){var e=Object(i.useState)("login"),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(!1),c=Object(p.a)(r,2),o=c[0],s=c[1],u=b("token"),m=Object(p.a)(u,2),d=m[0],f=m[1],g=qe(),E=h(),y=Object(p.a)(E,2),w=y[0],x=y[1],k=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),"login"!==a){e.next=6;break}return e.next=4,F(t);case 4:e.next=8;break;case 6:return e.next=8,D(t);case 8:s(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe().post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe().post("/user/register",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:(null===(a=e.sent)||void 0===a?void 0:a.data.data.access_token)&&f(a.data.data.access_token),w("login successfull"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),x(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:n("login"),w("registration successfull"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),x(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"login"},l.a.createElement(je,{loading:o}),d&&l.a.createElement(v.a,{to:{pathname:"/"}}),l.a.createElement(Ve.a,{mdDown:!0},l.a.createElement("img",{className:"login-image",src:"https://res.cloudinary.com/mikekrantz/image/upload/v1600309819/compressed-abstract.jpg",alt:"abstract"})),l.a.createElement("div",{className:"login-main"},l.a.createElement("div",{className:"login-container"},l.a.createElement(Re,{title:"Welcome to Notes",actionsName:"login"===a?"Login":"Register",onSubmit:k,hasCancel:!1,fields:"login"===a?[{type:"text",name:"email",validations:{required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}},{type:"password",name:"password"}]:[{type:"text",name:"username",validations:{required:"Required",min:{value:2,message:"Please enter a name with at least 2 characters"}}},{type:"text",name:"email",validations:{required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}},{type:"password",name:"password",validations:{required:"Password Required",min:{value:6,message:"Please enter a password with at least 6 characters"},max:{value:15,message:"Please enter a password with at most 15 characters"}}}]}),l.a.createElement(N.a,{className:g.button,color:"secondary",onClick:function(){return n("login"===a?"register":"login")}},"login"===a?"Don't have account? Please register here":"Already have account? Please login here"))))},ze=function(e){var t=e.component,a=Object(f.a)(e,["component"]),n=b("token"),r=Object(p.a)(n,1)[0];return l.a.createElement(v.b,Object.assign({},a,{render:function(e){return r?l.a.createElement(t,e):l.a.createElement(v.a,{to:"/auth"})}}))},_e=function(){return l.a.createElement(v.d,null,l.a.createElement(v.b,{path:"/auth",component:We}),l.a.createElement(ze,{exact:!0,path:"/",component:Ae}),l.a.createElement(ze,{path:"/",component:Ae}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=Object(n.a)({palette:{primary:{main:c.a[700]},secondary:{main:o.a.A200}}});u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,{theme:Le},l.a.createElement(m.ReactQueryDevtools,{initialIsOpen:!1}),l.a.createElement(g.a,{maxSnack:3},l.a.createElement(d.a,null,l.a.createElement(_e,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.4b6c8235.chunk.js.map