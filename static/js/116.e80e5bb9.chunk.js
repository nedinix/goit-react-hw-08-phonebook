"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[116],{3116:function(n,r,o){o.r(r),o.d(r,{default:function(){return Z}});var e,a,i,l,s=o(5705),d=o(168),t=o(5706),c=(0,t.Z)(s.l0)(e||(e=(0,d.Z)(["\n  label {\n    color: rgb(99, 99, 99);\n    margin-bottom: 4px;\n  }\n\n  input {\n    max-width: 254px;\n    width: 100%;\n    display: block;\n    height: 28px;\n\n    padding-left: 4px;\n\n    color: rgb(99, 99, 99);\n\n    outline: 1px solid rgb(198, 198, 198);\n    border-radius: 4px;\n    border: transparent;\n\n    transition: box-shadow 150ms linear, outline 150ms linear,\n      color 100ms linear;\n\n    &::placeholder {\n      color: rgba(99, 99, 99, 0.534);\n    }\n\n    &:hover,\n    &:focus {\n      outline: 1px solid rgb(99, 99, 99);\n    }\n\n    &:focus {\n      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    }\n  }\n\n  & div {\n    display: flex;\n    flex-direction: column;\n\n    margin-bottom: 12px;\n  }\n"]))),m=t.Z.button(a||(a=(0,d.Z)(["\n  display: block;\n  height: 28px;\n  margin-left: auto;\n\n  color: rgb(241, 241, 241);\n\n  border: 1px solid rgb(235, 104, 18);\n  border-radius: 4px;\n  background-color: rgb(235, 104, 18);\n\n  transition: box-shadow 150ms linear, background-color 100ms linear,\n    color 100ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(241, 241, 241);\n    color: rgb(235, 104, 18);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  }\n\n  &:active {\n    background-color: rgb(59, 59, 59);\n    color: rgb(248, 248, 248);\n  }\n"]))),p=(0,t.Z)(s.Bc)(i||(i=(0,d.Z)(["\n  padding-top: 4px;\n  font-size: 12px;\n  color: #d40606;\n"]))),x=t.Z.div(l||(l=(0,d.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 260px;\n"]))),u=o(9434),b=o(8724),h=o(5984),g=o(6727),w=o(7319),f=o(184),j=g.Ry().shape({email:g.Z_().trim().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email address").required("Enter your email address"),password:g.Z_().min(8,"minimum 8 characters ").max(32,"maximum 32 characters").required("Enter your password")}),k={email:"",password:""},v=function(){var n=(0,h.x0)(),r=(0,h.x0)(),o=(0,u.I0)(),e=(0,w.a)().isLoggedIn;return(0,f.jsx)(s.J9,{initialValues:k,validationSchema:j,onSubmit:function(n,r){o((0,b.pH)(n)),e&&r.resetForm()},children:(0,f.jsx)(c,{children:(0,f.jsxs)(x,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:n,children:"Email"}),(0,f.jsx)(s.gN,{id:n,type:"email",name:"email",placeholder:"Enter email address"}),(0,f.jsx)(p,{name:"email",component:"div"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:r,children:"Password"}),(0,f.jsx)(s.gN,{id:r,type:"password",name:"password",placeholder:"Enter password"}),(0,f.jsx)(p,{name:"password",component:"div"})]}),(0,f.jsx)(m,{type:"submit",children:"Login"})]})})})},Z=function(){return(0,f.jsx)(v,{})}}}]);
//# sourceMappingURL=116.e80e5bb9.chunk.js.map