import{r as u}from"./app.4eaf8dc0.js";import{a as n,b as h}from"./index.959372bf.js";function w(){const s=u([]),o=u(0),c=u([]),t=u([]),l=u([]),i=u(!1),p=async()=>{s.value=[],l.value=[];try{o.value=1;let e=await n.get("/categories");c.value=e.data.data,o.value=2;let a=0;c.value.forEach(r=>{l.value.push({id:r.id,value:!1,children:[]}),r.children.length!=0&&r.children.forEach(v=>{l.value[a].children.push({id:v.id,value:!1})}),a++})}catch(e){if(o.value=0,e.response.status==422)for(const a in e.response.data.errors)s.value.push(e.response.data.errors[a][0].replace("id",""));else e.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(e.response.data.message)}};return{chks:l,chkAll:i,errors:s,loading:o,checkAll:async()=>{i.value?l.value.forEach(e=>{e.value||(e.value=!0,t.value.push(e.id),e.children.length!=0&&e.children.forEach(a=>{a.value||(a.value=!0,t.value.push(a.id))}))}):(l.value.forEach(e=>{e.value=!1,e.children.length!=0&&e.children.forEach(a=>{a.value=!1})}),t.value=[])},cleanErrors:()=>{s.value=[]},categories:c,toogleIsTop:async e=>{s.value=[];try{await n.get(`/categories-is-top/${e}`),t.value=[]}catch(a){if(o.value=0,a.response.status==422)for(const r in a.response.data.errors)s.value.push(a.response.data.errors[r][0].replace("id",""));else a.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(a.response.data.message)}},getCategories:p,getTopCategories:async()=>{s.value=[],l.value=[];try{o.value=1;let e=await n.get("/categories-top");c.value=e.data.data,o.value=2}catch(e){if(o.value=0,e.response.status==422)for(const a in e.response.data.errors)s.value.push(e.response.data.errors[a][0].replace("id",""));else e.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(e.response.data.message)}},updateCategory:async(e,a)=>{s.value=[];try{o.value=1,await h.post(`/categories/${a}`,e),o.value=2}catch(r){if(o.value=0,r.response.status==422)for(const v in r.response.data.errors)s.value.push(r.response.data.errors[v][0].replace("id",""));else r.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(r.response.data.message)}},createCategory:async e=>{s.value=[];try{o.value=1,await h.post("/categories",e),o.value=2}catch(a){if(o.value=0,a.response.status==422)for(const r in a.response.data.errors)s.value.push(a.response.data.errors[r][0].replace("id",""));else a.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(a.response.data.message)}},deleteCategories:async()=>{s.value=[];try{await n.delete(`/categories/${JSON.stringify(t.value)}`),t.value=[],await p()}catch(e){if(o.value=0,e.response.status==422)for(const a in e.response.data.errors)s.value.push(e.response.data.errors[a][0].replace("id",""));else e.response.status==401?(localStorage.removeItem("user"),localStorage.removeItem("tokenUser"),localStorage.removeItem("recent_search"),location.href="/"):s.value.push(e.response.data.message)}},toogleDeleteArray:async e=>{if(l.value[e].value)t.value.push(l.value[e].id),l.value[e].children.length!=0&&l.value[e].children.forEach(a=>{t.value.push(a.id),a.value=!0});else{let a=t.value.indexOf(l.value[e].id);t.value.splice(a,1),l.value[e].children.length!=0&&l.value[e].children.forEach(r=>{a=t.value.indexOf(r.id),t.value.splice(a,1),r.value=!1})}},toogleChildDeleteArray:async(e,a)=>{if(l.value[e].children[a].value)t.value.push(l.value[e].children[a].id);else{let r=t.value.indexOf(l.value[e].children[a].id);t.value.splice(r,1)}console.log(t.value)}}}export{w as u};
