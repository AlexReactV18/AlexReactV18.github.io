(this.webpackJsonpphotowall=this.webpackJsonpphotowall||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},12:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=(a(12),a(7)),o=a.n(s),l=a(3),i=a(8);var c={books:[{title:"One for the Blackbird",path:"./assets/pic1.jpg",id:0},{title:"The Cipher",path:"./assets/pic2.jpg",id:1},{title:"The Family accross the street",path:"./assets/pic3.jpg",id:2},{title:"Wrong Place Wrong Time",path:"./assets/pic4.jpg",id:3},{title:"The Love of my Life",path:"./assets/pic5.jpg",id:4},{title:"Twenty Years Later",path:"./assets/pic6.jpg",id:5}],login:{registrationClass:"register-form",loginClass:"login-form"},userList:[{username:"Alex",password:"123456"}],authenticated:!1};const m={isAuthenticated:!1,username:null,email:null,signin(e,t){m.isAuthenticated=t,m.username=e.username},signout(){m.isAuthenticated=!1,m.username=""}};function u(e,t){try{m.signin(e.userData,t)}catch(a){return{error:"Invalid login attempt"}}}var p=Object(i.a)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(console.log("ACT ",t,e),"create-view"===t.type)return{...e,login:{registrationClass:"login-form",loginClass:"register-form"}};if("sign-in-view"===t.type)return{...e,login:{registrationClass:"register-form",loginClass:"login-form"}};if("sign-in-user"===t.type){let a=e.userList||c.userList,r=a.filter(e=>e.username===t.userData.usernameLogin&&e.password===t.userData.passwordLogin).length>=1;return console.log("STORE DATA ",a,"USER DATA ",t.userData,r),u(t,r),{...e,authenticated:r}}if("create-user"===t.type){let a=e.userList||c.userList;return console.log(e.userList,c.userList),a.push(t.userData),{...e,userList:[...a]}}return"remove_photo"===t.type?{...e,books:e.books.filter(e=>e.id!==t.photoData.id)}:e})),d=a(5),g=a(1),h=a(2);const E=e=>{let{position:t}=e;return n.a.createElement("span",{className:"number"},t)},f=e=>n.a.createElement("img",{src:e.path,alt:"American Prometheus: The Inspiration for the Major "}),b=e=>n.a.createElement("h1",null,e.title),w=()=>n.a.createElement("h1",null,"Description placeholder"),C=e=>{let{id:t,removeHanlder:a,title:r,className:s}=e;t=100*Math.random();return n.a.createElement("article",{className:"book"},n.a.createElement(E,{position:e.position}),n.a.createElement(f,{path:e.path}),n.a.createElement(b,{title:e.title}),n.a.createElement(w,null),n.a.createElement("button",{className:"remove-button",onClick:t=>{a(e)}},"Delete"))},v=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null," Book - Best Sellers"),n.a.createElement("section",{className:"bookList"},e.books.map((t,a)=>n.a.createElement(C,Object.assign({},t,{removeHanlder:e.removeHanlder,position:a+1,key:a})))));class y extends r.Component{constructor(e){super(e),this.removeHanlder=this.removeHanlder.bind(this)}removeHanlder(e){console.log("REMOVE GOT ",e,this.state.books),this.props.removeHanlder(e)}componentDidMount(){this.setState({books:[]})}render(){return n.a.createElement(v,{books:this.props.books,removeHanlder:this.removeHanlder})}}var k=Object(l.b)(e=>({books:e.books,authenticated:e.authenticated}),(e,t)=>({removeHanlder:t=>{e({type:"remove_photo",photoData:t})}}))(y);const j=Object(d.b)([{id:"root",path:"/",loader:()=>({user:m.username}),Component:function(){return n.a.createElement("div",null,n.a.createElement(h.a,null))},children:[{path:"",action:async function(e){let t=await e;console.log("LOGIN ACTION ",t);try{await m.signin("")}catch(r){return{error:"Invalid login attempt"}}let a=t.get("redirectTo");return Object(g.s)(a||"/")},Component:()=>{let e=Object(l.c)();const t=Object(h.n)(),[a,s]=Object(r.useState)({username:"",email:"",password:"",confirmPassword:""}),[o,i]=Object(r.useState)({usernameLogin:"",passwordLogin:""}),[c,m]=Object(r.useState)({}),u=e=>{const{name:t,value:r}=e.target;s({...a,[t]:r})},p=e=>{const{name:t,value:a}=e.target;i({...o,[t]:a})};let d=Object(l.d)(e=>(e.authenticated,e.login));return n.a.createElement("div",{className:"login-page"},n.a.createElement("div",{className:"form"},n.a.createElement("form",{className:d.registrationClass,onSubmit:t=>{t.preventDefault();const r={};if(a.username.trim()||(r.username="username is required"),a.email.trim()?/\S+@\S+\.\S+/.test(a.email)||(r.email="email is not valid"):r.email="email is required",a.password.trim()?a.password.length<6&&(r.password="password should be at least 6 char"):r.password="password is required",a.confirmPassword!==a.password&&(r.confirmPassword="password not matched"),m(r),0===Object.keys(r).length){const a=new FormData(t.currentTarget),r=Object.fromEntries(a);e({type:"create-user",userData:r}),t.target.reset()}}},n.a.createElement("input",{name:"username",autoComplete:"off",onChange:u,type:"text",placeholder:"Name"}),c.username&&n.a.createElement("span",null,c.username),n.a.createElement("input",{name:"password",autoComplete:"off",onChange:u,type:"password",placeholder:"Password"}),c.password&&n.a.createElement("span",null,c.password),n.a.createElement("input",{name:"confirmPassword",autoComplete:"off",onChange:u,type:"password",placeholder:"Confirm Password"}),c.confirmPassword&&n.a.createElement("span",null,c.confirmPassword),n.a.createElement("input",{name:"email",type:"text",autoComplete:"off",onChange:u,placeholder:"Email Address"}),c.email&&n.a.createElement("span",null,c.email),n.a.createElement("button",null,"create"),n.a.createElement("p",{className:"message"},"Already registered? ",n.a.createElement("a",{className:"clickable",onClick:t=>{e({type:"sign-in-view"})}},"Sign In"))),n.a.createElement("form",{className:d.loginClass,onSubmit:a=>{a.preventDefault();const r={},n=new FormData(a.currentTarget),s=Object.fromEntries(n);s.usernameLogin.trim()||(r.usernameLogin="username is required"),s.passwordLogin.trim()||(r.passwordLogin="password is required"),m(r),0===Object.keys(r).length&&(e({type:"sign-in-user",userData:s}),a.target.reset(),t("/dashboard"))}},n.a.createElement("input",{name:"usernameLogin",autoComplete:"off",onChange:p,type:"text",placeholder:"Username"}),c.username&&n.a.createElement("span",null,c.username),n.a.createElement("input",{name:"passwordLogin",autoComplete:"off",onChange:p,type:"password",placeholder:"Password"}),c.password&&n.a.createElement("span",null,c.password),n.a.createElement("button",null,"login"),n.a.createElement("p",{className:"message"},"Not registered? ",n.a.createElement("a",{className:"clickable",onClick:t=>{e({type:"create-view"})}},"Create an account")))))}},{path:"dashboard",loader:function(e){if(console.log("CHECK ",m,e),!m.isAuthenticated)return console.log("CHECK 222 ",m),Object(g.s)("/");return null},Component:k}]},{path:"/logout",action:async()=>(await m.signout(),Object(g.s)("/"))}]);var L=function(){return n.a.createElement(d.a,{router:j,fallbackElement:n.a.createElement("p",null,"Initial Load...")})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:p},n.a.createElement(L,null))))}},[[10,1,2]]]);
//# sourceMappingURL=main.065eb134.chunk.js.map