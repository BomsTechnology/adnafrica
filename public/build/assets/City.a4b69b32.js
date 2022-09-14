import{s as k,r as T,I as q,b as I,c as r,a as e,d,f as s,O,v as u,z as C,W as V,X as R,F as W,q as X,j as Y,m as E,o as a,t as N}from"./app.4eaf8dc0.js";import{u as G}from"./cityServices.927aac2d.js";import{u as H}from"./countryServices.766f9053.js";import{_ as S}from"./SelectFilter.d9afc6a7.js";import{r as J}from"./TrashIcon.4c73878a.js";import"./index.959372bf.js";import"./index.62ff3478.js";import"./ChevronDownIcon.47424bbb.js";import"./ChevronUpIcon.8fc385af.js";const K={class:"h-full overflow-hidden p-8"},P=e("h1",{class:"text-3xl font-bold"},"City",-1),Q={class:"h-2/5 space-x-0 space-y-4 overflow-y-auto py-6 lg:flex lg:space-x-4 lg:space-y-0"},Z={class:"lg:w-[40%]"},ee={class:"w-full bg-white p-6 shadow-md sm:rounded-lg"},te={class:"text-xl font-semibold underline decoration-primary-color decoration-dotted decoration-2 underline-offset-2"},oe={key:0},se={key:1},le=Y(" City "),ne={class:""},re=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"City Name",-1),ae={class:"mt-2"},ie=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Country",-1),de={class:"mt-6"},ce={key:0,type:"button",disabled:"",class:"flex w-full transform items-center justify-center rounded-md bg-secondary-color px-4 py-2 tracking-wide text-white focus:outline-none"},ue={key:1,type:"submit",class:"w-full transform rounded-md bg-primary-color px-4 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-secondary-color focus:bg-primary-color focus:outline-none"},me={class:"h-full lg:w-[60%]"},pe={class:"relative w-full overflow-x-auto bg-white shadow-md sm:rounded-lg"},he={class:"w-full items-center justify-between p-4 lg:flex"},_e={class:"flex w-2/3 lg:space-x-2"},fe={class:"mt-1 w-full items-center space-y-1 lg:flex lg:w-1/2 lg:space-y-0 lg:space-x-2"},ye={class:"relative w-full"},ge=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),be={class:"h-full lg:w-1/2"},xe={class:"mt-1 flex justify-end lg:mt-0 lg:block"},we=e("span",{class:"hidden text-sm font-thin lg:block"},"Supprimer",-1),ve={class:"w-full text-left text-sm text-gray-500"},ke={class:"bg-gray-50 text-xs uppercase text-gray-700"},Ce={scope:"col",class:"p-4"},Ve={class:"flex items-center"},Ee=e("label",{for:"checkbox-all-search",class:"sr-only"},"checkbox",-1),Ne=e("th",{scope:"col",class:"px-6 py-3"},"City Name",-1),Se=e("th",{scope:"col",class:"px-6 py-3"},"Country",-1),Ue=e("th",{scope:"col",class:"px-6 py-3"},[e("span",{class:"sr-only"},"Edit")],-1),$e={key:0},je={colspan:"4"},Me={class:"flex w-full items-center justify-center p-3 text-center"},Ae={class:"w-4 p-4"},Le={class:"flex items-center"},Be=["onUpdate:modelValue","onChange"],ze=e("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),De={scope:"row",class:"whitespace-nowrap px-6 py-4 font-medium text-gray-900"},Fe={class:"px-6 py-4"},Te={class:"px-6 py-4 text-right"},qe=["onClick"],Ie={key:2},Oe=e("td",{colspan:"4",class:"p-3 text-center text-2xl font-bold"},[e("span",null,"NO CITY")],-1),Re=[Oe],et={__name:"City",setup(We){const{countries:f,getCountries:U}=H(),{chks:y,chkAll:m,errors:p,loading:g,checkAll:$,cities:b,cleanErrors:j,getCities:x,updateCity:M,createCity:A,deleteCities:L,toogleDeleteArray:B}=G(),l=k({name:"",country_id:""}),i=k({words:"",country_id:""}),c=T(!1),z=async()=>{c.value?(await M({...l},l.id),p.value.length==0&&(c.value=!1)):await A({...l}),p.value.length==0&&(await x(),l.country_id="",l.name="")},w=q(()=>i.country_id?b.value.filter(n=>n.name.toLowerCase().includes(i.words.toLowerCase())&&n.country.id==i.country_id):b.value.filter(n=>n.name.toLowerCase().includes(i.words.toLowerCase()))),D=async n=>{l.country_id=`${n.country.id}`,l.name=n.name,l.id=n.id,c.value=!0};return I(async()=>{await x(),await U()}),(n,o)=>{const F=E("Error"),v=E("Spin");return a(),r("div",K,[P,e("div",Q,[e("div",Z,[e("div",ee,[e("h1",te,[c.value?(a(),r("span",oe,"Edit")):(a(),r("span",se,"Add")),le]),d(F,{errors:s(p),onCleanErrors:s(j)},null,8,["errors","onCleanErrors"]),e("form",{class:"mt-4",onSubmit:o[2]||(o[2]=O(t=>z(),["prevent"]))},[e("div",ne,[re,u(e("input",{type:"text",id:"name",required:"","onUpdate:modelValue":o[0]||(o[0]=t=>l.name=t),autocomplete:"given-name",class:"mt-1 block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"},null,512),[[C,l.name]])]),e("div",ae,[ie,d(S,{modelValue:l.country_id,"onUpdate:modelValue":o[1]||(o[1]=t=>l.country_id=t),data:s(f),placeholder:"Select Country",className:"w-full mt-1 block rounded-md border bg-white  border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data"])]),e("div",de,[s(g)==1?(a(),r("button",ce,[d(v)])):(a(),r("button",ue," Save "))])],32)])]),e("div",me,[e("div",pe,[e("div",he,[e("div",_e,[e("div",fe,[e("div",ye,[ge,u(e("input",{type:"search",id:"table-search","onUpdate:modelValue":o[3]||(o[3]=t=>i.words=t),class:"block w-full rounded border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",placeholder:"Search for items"},null,512),[[C,i.words]])])]),e("div",be,[d(S,{modelValue:i.country_id,"onUpdate:modelValue":o[4]||(o[4]=t=>i.country_id=t),data:s(f),resetField:!0,placeholder:"Select Country",className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","className"])])]),e("div",xe,[e("button",{type:"button",title:"delete",onClick:o[5]||(o[5]=t=>s(L)()),class:"flex items-center justify-between space-x-2 rounded border border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white"},[d(s(J),{class:"h-6 w-6"}),we])])]),e("table",ve,[e("thead",ke,[e("tr",null,[e("th",Ce,[e("div",Ve,[u(e("input",{onChange:o[6]||(o[6]=t=>s($)()),"onUpdate:modelValue":o[7]||(o[7]=t=>R(m)?m.value=t:null),id:"checkbox-all-search",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"},null,544),[[V,s(m)]]),Ee])]),Ne,Se,Ue])]),e("tbody",null,[s(g)==1?(a(),r("tr",$e,[e("td",je,[e("div",Me,[d(v,{width:"w-10",height:"h-10",color:"text-primary-color"})])])])):s(w).length!=0?(a(!0),r(W,{key:1},X(s(w),(t,h)=>(a(),r("tr",{key:t.id,class:"border-b bg-white hover:bg-gray-50"},[e("td",Ae,[e("div",Le,[u(e("input",{"onUpdate:modelValue":_=>s(y)[h].value=_,onChange:_=>s(B)(h),id:"checkbox-table-search-1",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"},null,40,Be),[[V,s(y)[h].value]]),ze])]),e("th",De,N(t.name),1),e("td",Fe,N(t.country.name),1),e("td",Te,[e("button",{type:"button",onClick:_=>D(t),class:"font-medium text-blue-600 hover:underline"}," Edit ",8,qe)])]))),128)):(a(),r("tr",Ie,Re))])])])])])])}}};export{et as default};