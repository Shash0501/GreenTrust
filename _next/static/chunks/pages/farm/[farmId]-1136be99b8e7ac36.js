(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{24622:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farm/[farmId]",function(){return s(31962)}])},82349:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var r=s(85893),a=s(25675),n=s.n(a);function l(e){let{text:t}=e;return(0,r.jsxs)("div",{className:"items-center flex flex-col w-[20vw] min-w-[280px] my-4",children:[(0,r.jsx)(n(),{src:"/em.gif",width:0,height:0,className:"w-[15vw] min-w-[280px] bg-blend-multiply",alt:"Empty"}),(0,r.jsx)("p",{className:"text-gray text-center max-w-[200px]",children:t})]})}},91671:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var r=s(85893);function a(e){let{profile:t,onlyPic:s}=e;return t=JSON.parse(t),console.log("https://ipfs.io/ipfs/".concat(t.profilePic),"Profile pic url"),(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)("img",{src:"https://ipfs.io/ipfs/".concat(t.profilePic),className:"rounded-full w-[60px] h-[60px]",onError:e=>e.currentTarget.src="/images/jonathan.png"}):(0,r.jsxs)("div",{className:"flex items-center gap-8 px-8 py-4",children:[(0,r.jsx)("div",{className:"mr-4",children:(0,r.jsx)("img",{src:"https://ipfs.io/ipfs/".concat(t.profilePic),className:"rounded-full w-[60px] h-[60px]",onError:e=>e.currentTarget.src="/images/jonathan.png"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-darkGray text-2xl font-bold",children:t.name}),(0,r.jsx)("p",{className:"text-gray text-base font-bold",children:t.email})]})]})})}s(78603)},25720:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(85893),a=s(67814);function n(e){let{icon:t,styles:s,onClick:n}=e;return(0,r.jsx)("div",{onClick:n,class:"".concat(null!=s?s:""," flex justify-center items-center text-white bg-gray rounded-full w-8 h-8 hover:scale-105 cursor-pointer"),children:t&&(0,r.jsx)(a.G,{icon:t})})}},46897:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var r=s(85893),a=s(67814);function n(e){let{icon:t,text:s,style:n,iconDivStyle:l,textStyle:c}=e;return(0,r.jsxs)("div",{className:"flex items-center px-0 py-0 flex-row gap-[10px]",children:[(0,r.jsx)("div",{className:"".concat(l," flex justify-center items-center"),children:(0,r.jsx)(a.G,{icon:t,className:"w-[20px] h-[20px] ".concat(n)})}),(0,r.jsx)("p",{className:"text-darkGray text-base ".concat(c),children:s})]})}},31962:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var r=s(85893);s(67814);var a=s(59417),n=s(41664),l=s.n(n),c=s(46897),i=s(78603);function o(e){let{text:t,color:s}=e;return(0,r.jsx)("div",{className:"text-white top-2 right-2 p-1 rounded-full px-2 text-sm w-fit ".concat(s),title:t,children:t})}let d={0:"bg-primary",1:"bg-yellow",2:"bg-blue"};function x(e){let{cropDetails:t}=e;console.log(t,"This is crop details");let s=JSON.parse(t.details);s.status=t.status;let n=new Date(1e3*s.sowedOn).toLocaleDateString();return console.log("debug1902",s),(0,r.jsx)(l(),{href:"/farm/".concat(t.farmId,"/crop/").concat(t.id),children:(0,r.jsxs)("div",{className:"relative flex flex-col gap-2.5 py-6 px-5 shadow-lg rounded-2xl w-full hover:scale-105",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)(c.Z,{icon:a.YKZ,text:s.name,style:"text-brown !w-[32px] !h-[32px]",textStyle:"font-semibold text-xl overflow-hidden whitespace-nowrap"}),(0,r.jsx)(o,{text:(0,i.e9)(s.status),color:d[s.status]})]}),(0,r.jsx)(c.Z,{icon:a.WRo,text:n,style:"text-gray !w-[18px] !h-[18px]",iconDivStyle:"w-[32px]",textStyle:"!text-gray font-bold"})]})})}var u=s(67294),f=s(77365),m=s(11163),p=s(95867),h=s(73032),j=s(25720),g=s(33884),w=s(14748),v=s(82349),y=s(91671);function N(){let e=(0,f.a)(),t=(0,m.useRouter)(),{farmId:s}=t.query,{snackbarInfo:n,setSnackbarInfo:o}=(0,u.useContext)(p.S),{loading:d,setLoading:N}=(0,u.useContext)(h.O),[b,_]=(0,u.useState)(null),[S,Z]=(0,u.useState)([]),[E,k]=(0,u.useState)(null),[G,I]=(0,u.useState)(!1),[C,O]=(0,u.useState)(""),T=async()=>{N(!0);try{let t=await (0,i.uG)(e,"farms",[s]);_(t.data),console.log("farmRes debug:",t.data);let r=await (0,i.uG)(e,"fetchFarmCrops",[s]);Z(r.data);let a=await (0,i.uG)(e,"farmers",[parseInt(t.data.farmerId._hex)]),n=await (0,i.uG)(e,"fetchUserType");if("farmer"==n.data){let s=await (0,i.uG)(e,"addressToFarmerIds",[e.user.address]);parseInt(t.data.farmerId._hex)==parseInt(s.data._hex)&&I(!0)}k(a.data),console.log("farmer debug:",t.data.profile)}catch(e){o({...n,open:!0,message:"Error ".concat(e.code,": ").concat(e.message)})}N(!1)};(0,u.useEffect)(()=>{e.user&&T()},[null==e?void 0:e.user]);var P,D=null==S?void 0:S.map(e=>(0,r.jsx)(x,{cropDetails:e})),F=(0,r.jsx)("div",{className:"grid grid-cols-1: md:grid-cols-2 gap-10",children:D});return b?(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row mb-10 justify-around",children:[(0,r.jsxs)("div",{className:"shrink-0 grow",children:[(0,r.jsx)("h1",{children:null!==(P=b.name)&&void 0!==P?P:"Serene Farm"}),(0,r.jsxs)("div",{className:"flex flex-row gap-10",children:[(0,r.jsx)(c.Z,{icon:a.opg,text:null==b?void 0:b.location,style:"text-red"}),(0,r.jsx)(c.Z,{icon:a.OS1,text:"".concat(null==b?void 0:b.size," Acre"),style:"text-gray"})]}),(0,r.jsx)("div",{className:"my-10",children:E&&(0,r.jsx)(y.Z,{profile:E.profile})}),(0,r.jsxs)("div",{className:"flex flex-row gap-10 items-center mb-2",children:[(0,r.jsx)("h2",{className:"mb-0",children:"Crops"}),G&&(0,r.jsx)(l(),{href:"/farm/".concat(s,"/crop/add"),children:(0,r.jsx)(j.Z,{icon:a.r8p,styles:"!w-6 !h-6"})})]}),(null==S?void 0:S.length)>0?F:(0,r.jsx)(v.Z,{text:"No crops registered "})]}),(0,r.jsx)("div",{className:"hidden lg:flex shrink max-w-[30vw]",children:(0,r.jsx)(g.Z,{loop:!0,animationData:w,play:!0,className:"my-auto object-fill"})})]})})}):(0,r.jsx)(r.Fragment,{})}}},function(e){e.O(0,[296,185,748,774,888,179],function(){return e(e.s=24622)}),_N_E=e.O()}]);