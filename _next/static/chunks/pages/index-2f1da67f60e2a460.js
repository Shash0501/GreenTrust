(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(17773)}])},17773:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return N}});var a=t(85893),l=t(67294),n=t(11163),r=t(77365),i=t(34797),c=t(41664),d=t.n(c),o=t(71305);let x=[{id:"features",title:"Features"},{id:"steps",title:"Steps"},{id:"contact-us",title:"Contact Us"}],m=()=>{let[e,s]=(0,l.useState)(!1);return(0,a.jsxs)("nav",{className:"w-full flex sm:justify-between justify-center px-[10%] items-center navbar mt-6",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)("ul",{className:"list-none sm:flex hidden ml-8 items-center justify-around",children:x.map((e,s)=>(0,a.jsx)("li",{className:"font-comfortaa\n            font-bold\n            cursor-pointer\n            text-[16px]\n            ".concat(s===x.length-1?"mr-0":"mr-10","\n            text-darkGray hover:text-darkPrimary"),children:(0,a.jsx)(d(),{href:"/".concat(e.id),children:e.title})},e.id))})]})};var f=t(1040),u=t(78603);t(9008);var h=t(33884),p=t(14748);let j=()=>{let e=(0,n.useRouter)(),s=(0,r.a)(),t=async()=>{try{await s.connect(),console.log("test",s.user)}catch(e){console.log(e)}},c=async()=>{try{let t=await (0,u.uG)(s,"fetchUserType");console.log(t.data,"Response"),"farmer"===t.data||"verifier"===t.data?e.push("/dashboard"):e.push("/farms")}catch(e){console.log(e)}};return(0,l.useEffect)(()=>{!(null==s?void 0:s.loading)&&(null==s?void 0:s.isLoggedIn)&&c()},[null==s?void 0:s.loading,null==s?void 0:s.isLoggedIn]),(0,a.jsx)(a.Fragment,{children:s.loading?(0,a.jsx)(i.Z,{}):(0,a.jsxs)("div",{className:"bg-white w-full overflow-hidden flex",children:[(0,a.jsxs)("div",{className:"md:w-2/3 w-full",children:[(0,a.jsx)(m,{}),(0,a.jsxs)("div",{id:"home",className:"flex flex-col items-center h-full md:pt-[160px] py-[40px]",children:[(0,a.jsx)("div",{className:"flex md:hidden",children:(0,a.jsx)(h.Z,{loop:!0,animationData:p,play:!0,className:"w-full"})}),(0,a.jsxs)("div",{className:"px-[10%] md:px-0 w-fit",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-comfortaa font-bold ss:text-[44px] text-[40px] text-darkGray",children:"Register with"}),(0,a.jsxs)("h1",{className:"font-poppins ss:text-[68px] text-[52px] text-primary leading-[120%] w-full mb-0",children:[(0,a.jsx)("span",{className:"text-primary font-extrabold",children:"Green "}),(0,a.jsx)("span",{className:"text-gray font-medium",children:"TRUST"})]}),(0,a.jsx)("p",{className:"flex-1 font-comfortaa font-semibold ss:text-[44px] text-[40px] text-darkGray",children:"today!"})]}),(0,a.jsxs)("p",{className:"text-3xl text-gray font-bold font-comfortaa max-w-[470px] mt-5",children:["Secure ",(0,a.jsx)("span",{className:"text-red",children:"seamless"}),","," ",(0,a.jsx)("span",{className:"text-red",children:"hassle-free"})," and"," ",(0,a.jsx)("span",{className:"text-red",children:"trusted"})," certification for your ",(0,a.jsx)("span",{className:"text-primary",children:"organic produce"}),"."]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)(f.Z,{text:"Get Started",styles:"!py-2 text-2xl",onClick:t})})]})]})]}),(0,a.jsx)("div",{className:"w-1/3 hidden md:flex ",children:(0,a.jsx)("img",{src:"./images/landing.svg",alt:"landing",className:"object-cover w-full h-screen"})})]})})};var N=j}},function(e){e.O(0,[296,185,748,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);