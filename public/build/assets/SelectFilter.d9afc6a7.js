import{r as v,s as S,I as _,w as q,o,c as d,a as i,h as $,f as y,n as p,v as B,x as D,z as F,t as h,g as L,F as m,q as x}from"./app.4eaf8dc0.js";import{o as N}from"./index.62ff3478.js";import{r as z}from"./ChevronDownIcon.47424bbb.js";import{r as A}from"./ChevronUpIcon.8fc385af.js";const E={class:"relative"},M=["value","required","placeholder"],I={class:"mt-4 h-48 w-full overflow-y-auto text-sm"},O={class:"block w-full bg-gray-50 px-3 py-2 font-bold text-gray-900"},T=["onClick"],U=["onClick"],j=["onClick"],G={key:3,class:"block w-full py-2 text-center font-bold"},W={__name:"SelectFilter",props:{placeholder:{type:String,default:"Select item"},required:{type:Boolean,default:!0},subCategory:{type:Boolean,default:!1},className:{type:String,default:""},data:{type:Array},modelValue:{type:String},resetField:{type:Boolean,default:!1}},emits:["update:modelValue","resetValue"],setup(u,{emit:C}){const r=u,s=v(!1),c=v(""),w=v(null),b=v(!1),l=S({id:"",name:""}),g=_(()=>{let a=r.data.filter(t=>t.name.toLowerCase().includes(c.value.toLowerCase()));if(a.length!=0)return b.value=r.subCategory,a;if(r.subCategory){if(b.value=!1,a=r.data.filter(t=>t.name.toLowerCase().includes(c.value.toLowerCase())),a.length!=0)return a;a=[];for(let t=0;t<r.data.length;t++)r.data[t].children.length!=0&&r.data[t].children.forEach(e=>{e.name.toLowerCase().includes(c.value.toLowerCase())&&a.push(e)});return a}else return[]});async function k(a){l.id=a.id,l.name=a.name,C("update:modelValue",`${a.id}`),s.value=!1}async function V(){C("update:modelValue",""),l.id="",l.name="",c.value="",s.value=!1}return q(r,async(a,t)=>{if(a.modelValue)if(r.subCategory)for(let e=0;e<a.data.length;e++)a.data[e].id==a.modelValue?(l.id=a.data[e].id,l.name=a.data[e].name,e=a.data.length):a.data[e].children.length!=0&&a.data[e].children.forEach(n=>{n.id==a.modelValue&&(l.id=n.id,l.name=n.name,e=a.data.length)});else{let e=a.data.find(n=>n.id==a.modelValue);l.id=e.id,l.name=e.name}else V()}),N(w,()=>{s.value=!1}),(a,t)=>(o(),d("div",E,[i("span",{onClick:t[0]||(t[0]=e=>s.value=!s.value),class:"absolute right-3 top-1/4 cursor-pointer"},[s.value?(o(),$(y(A),{key:1,class:"h-5 w-5 text-gray-400"})):(o(),$(y(z),{key:0,class:"h-5 w-5 text-gray-400"}))]),i("input",{readonly:"",value:l.name,required:u.required,class:p(u.className+" cursor-pointer"),placeholder:u.placeholder,onClick:t[1]||(t[1]=e=>s.value=!s.value)},null,10,M),B(i("div",{ref_key:"itemModal",ref:w,class:"absolute top-full z-50 w-full rounded-b bg-white shadow"},[B(i("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>c.value=e),class:"container mx-auto my-2 block w-[95%] border border-gray-300 py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none"},null,512),[[F,c.value]]),i("div",I,[u.resetField?(o(),d("span",{key:0,onClick:t[3]||(t[3]=e=>V()),class:"block w-full cursor-pointer py-2 px-3 text-gray-400 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"},h(u.placeholder),1)):L("",!0),y(g).length!=0&&b.value?(o(!0),d(m,{key:1},x(y(g),(e,n)=>(o(),d(m,{key:n},[i("span",O,h(e.name),1),i("div",null,[i("span",{onClick:f=>k(e),class:p([l.id==e.id?"block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900":"block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"])},h(e.name),11,T),e.children.length!=0?(o(!0),d(m,{key:0},x(e.children,f=>(o(),d("span",{key:f.id,onClick:H=>k(f),class:p([l.id==f.id?"block w-full cursor-pointer bg-blue-400 py-2 pr-3 pl-8 font-semibold text-white hover:bg-gray-100 hover:text-gray-900":"block w-full cursor-pointer py-2 pr-3 pl-8 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"])},h(f.name),11,U))),128)):L("",!0)])],64))),128)):y(g).length!=0?(o(!0),d(m,{key:2},x(y(g),(e,n)=>(o(),d("span",{key:e.id,onClick:f=>k(e),class:p([l.id==e.id||l.id==""&&n==0?"block w-full cursor-pointer bg-blue-400 px-3 py-2 font-semibold text-white hover:bg-gray-100 hover:text-gray-900":"block w-full cursor-pointer px-3 py-2 hover:bg-gray-100 hover:font-semibold hover:text-gray-900"])},h(e.name),11,j))),128)):(o(),d("span",G," NO DATA ! "))])],512),[[D,s.value]])]))}};export{W as _};