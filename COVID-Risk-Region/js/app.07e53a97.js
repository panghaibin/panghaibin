(function(){"use strict";var e={8382:function(e,t,i){var l=i(9242),n=(i(451),i(9060),i(9200),i(7086),i(6570),i(970)),r=i(9740),a=(i(3189),i(5065)),d=i(3396);const o={class:"footer-section"},s=(0,d.Uk)(" 数据来自"),h=(0,d.Uk)("国家卫健委"),c=(0,d.Uk)(" | "),u=(0,d.Uk)("GitHub"),f=(0,d.Uk)(" | "),_=(0,d.Uk)("Api GitHub");function g(e,t,i,l,n,r){const g=a.E2;return(0,d.wg)(),(0,d.iD)("div",o,[s,(0,d.Wm)(g,{class:"link",href:"http://bmfw.www.gov.cn/yqfxdjcx/risk.html",target:"_blank"},{default:(0,d.w5)((()=>[h])),_:1}),c,(0,d.Wm)(g,{class:"link",href:"https://github.com/panghaibin/COVID-Risk-Region",target:"_blank"},{default:(0,d.w5)((()=>[u])),_:1}),f,(0,d.Wm)(g,{class:"link",href:"https://github.com/panghaibin/RiskLevelAPI",target:"_blank"},{default:(0,d.w5)((()=>[_])),_:1})])}var p={name:"FooterShow"},m=i(89);const w=(0,m.Z)(p,[["render",g],["__scopeId","data-v-e056256a"]]);var k=w,y=(i(8009),i(6710),i(6809),i(1430),i(172),i(94)),b=i(4477),v=i(6605),x=i(1902),S=i(5879),I=i(7139);const C=e=>((0,d.dD)("data-v-0680dfc3"),e=e(),(0,d.Cn)(),e),O={key:0},N={key:0},W={key:1},U={class:"high-risk"},j=(0,d.Uk)(" 高风险等级地区 "),A={class:"num"},D={class:"middle-risk"},T=(0,d.Uk)(" 中风险等级地区 "),E={class:"num"},z={key:1},$=C((()=>(0,d._)("p",null,"API 获取出错，请刷新重试",-1)));function R(e,t,i,l,n,r){const a=S.EZ,o=x.Ks,s=v.mi,h=b.y,c=y.vk;return n.err?((0,d.wg)(),(0,d.iD)("div",z,[$,(0,d._)("p",null,(0,I.zw)(n.err_msg),1)])):((0,d.wg)(),(0,d.iD)("div",O,[n.ok?((0,d.wg)(),(0,d.iD)("p",N,"以下信息截止自"+(0,I.zw)(n.raw.data.end_update_time),1)):((0,d.wg)(),(0,d.iD)("p",W,"加载中……")),(0,d.Wm)(a,{disabled:!n.ok,ref:"filter_input",modelValue:n.filter_text,"onUpdate:modelValue":t[0]||(t[0]=e=>n.filter_text=e),placeholder:"请输入区域名称，可用空格分隔多个关键词",clearable:"",onClear:t[1]||(t[1]=t=>r.tag_add(e.$refs.filter_input.input.value)),onChange:r.tag_add},null,8,["disabled","modelValue","onChange"]),(0,d._)("div",{class:(0,I.C_)(n.ok?"tag-list":["tag-list","tag-list-disabled"])},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(n.filter_history,((t,i)=>((0,d.wg)(),(0,d.j4)(o,{key:i,closable:!0,onClose:e=>r.tag_remove(i),onClick:i=>{e.$refs.filter_input.focus(),n.filter_text=t,r.tag_add(t)},class:"tag-item"},{default:(0,d.w5)((()=>[(0,d.Uk)((0,I.zw)(t),1)])),_:2},1032,["onClose","onClick"])))),128))],2),(0,d._)("h3",U,[j,(0,d._)("span",A,"("+(0,I.zw)(n.high.count)+")",1),(0,d.Wm)(s,{ref:"high_button",class:"expand-all",type:"primary",onClick:r.high_expand,disabled:!n.ok},{default:(0,d.w5)((()=>[(0,d.Uk)((0,I.zw)(n.high.expand_all_button),1)])),_:1},8,["onClick","disabled"])]),n.ok?((0,d.wg)(),(0,d.j4)(h,{key:n.high.key,data:n.high.tree,props:n.tree_props,"node-key":"id","default-expand-all":n.high.expand_all,"default-expanded-keys":n.high.default_id_list,"auto-expand-parent":!1,ref:"high_tree","filter-node-method":r.high_filter,"empty-text":"无数据"},null,8,["data","props","default-expand-all","default-expanded-keys","filter-node-method"])):((0,d.wg)(),(0,d.j4)(c,{key:3,rows:6,animated:""})),(0,d._)("h3",D,[T,(0,d._)("span",E,"("+(0,I.zw)(n.middle.count)+")",1),(0,d.Wm)(s,{class:"expand-all",type:"primary",onClick:r.middle_expand,disabled:!n.ok},{default:(0,d.w5)((()=>[(0,d.Uk)((0,I.zw)(n.middle.expand_all_button),1)])),_:1},8,["onClick","disabled"])]),n.ok?((0,d.wg)(),(0,d.j4)(h,{key:n.middle.key,data:n.middle.tree,props:n.tree_props,"node-key":"id","default-expand-all":n.middle.expand_all,"default-expanded-keys":n.middle.default_id_list,"auto-expand-parent":!1,ref:"middle_tree","filter-node-method":r.middle_filter,"empty-text":"无数据"},null,8,["data","props","default-expand-all","default-expanded-keys","filter-node-method"])):((0,d.wg)(),(0,d.j4)(c,{key:5,rows:6,animated:""}))]))}var F=i(6265),H=i.n(F),J=i(6693),M=(i(8742),{name:"RegionShow",props:{data_url:String},data(){return{raw:null,ok:!1,err:!1,err_msg:"",high:{key:0,tree:null,count:"-",province_id_list:[],city_id_list:[],county_id_list:[],default_id_list:[],expand_all:!1,expand_all_button:"展开"},middle:{key:0,tree:null,count:"-",province_id_list:[],city_id_list:[],county_id_list:[],default_id_list:[],expand_all:!1,expand_all_button:"展开"},tree_props:{label:"label",children:"children",class:"tree-node"},filter_text:"",filter_history:["北京","上海","江苏"]}},mounted(){let e="true"===localStorage.getItem("use_proxy");localStorage.getItem("latest_timestamp")&&localStorage.getItem("latest")?(this.raw=JSON.parse(localStorage.getItem("latest")),this.high_init(),this.middle_init(),this.ok=!0,(new Date).getTime()-localStorage.getItem("latest_timestamp")>3e5&&this.fetch_data(this.data_url+"?t="+(new Date).getTime(),e)):this.fetch_data(this.data_url+"?t="+(new Date).getTime(),e),localStorage.getItem("filter_history")&&""!==localStorage.getItem("filter_history")&&"[]"!==localStorage.getItem("filter_history")?this.filter_history=JSON.parse(localStorage.getItem("filter_history")):localStorage.setItem("filter_history",JSON.stringify(this.filter_history))},methods:{fetch_data:function(e,t){let i,l,n;n="https://gh.hbtech.workers.dev/",i=t?n+e:e,l=t?1e4:3e3;let r=H().CancelToken;const a=r.source(),d=setTimeout((()=>{a.cancel()}),l);let o=this;H().get(i,{cancelToken:a.token}).then((function(e){clearTimeout(d);let i,l=e.data,n=!1;o.ok?o.raw.data["end_update_time"]!==l.data["end_update_time"]?(i="数据更新成功",n=!0):i="已是最新数据":(i="数据加载成功",n=!0),J.bM.success({message:i,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item"}),n&&(o.raw=l,o.high_init(),o.middle_init(),o.ok=!0,localStorage.setItem("latest",JSON.stringify(l))),localStorage.setItem("latest_timestamp",(new Date).getTime().toString()),localStorage.setItem("use_proxy",t.toString())})).catch((function(i){if(clearTimeout(d),console.log(i),t)if(o.ok){let e="数据更新失败<br>已显示缓存数据";J.bM.info({message:e,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item",dangerouslyUseHTMLString:!0})}else o.err_msg=i,o.err=!0;else o.fetch_data(e,!0)}))},list2tree(e,t){let i=[],l=0,n=[],r=[],a=[];for(let d=0;d<e.length;d++){let t=e[d],o=t["province"],s=t.city,h=t["county"],c=t["communitys"],u=null,f=null,_=null,g=null;for(let e=0;e<i.length;e++){let t=i[e];if(t.label===o){u=t;break}}null===u&&(u={id:l++,pid:-1,label:o,children:[],expanded:!0},i.push(u),n.push(u.id));for(let e=0;e<u.children.length;e++){let t=u.children[e];if(t.label===s){f=t;break}}null===f&&(f={id:l++,pid:u.id,label:s,children:[],expanded:!0},u.children.push(f),r.push(f.id));for(let e=0;e<f.children.length;e++){let t=f.children[e];if(t.label===h){_=t;break}}null===_&&(_={id:l++,pid:f.id,label:h,children:[],expanded:!0},f.children.push(_),a.push(_.id));for(let e=0;e<_.children.length;e++){let t=_.children[e];if(t.label===c){g=t;break}}if(null===g){g=[];for(let e=0;e<c.length;e++)_.children.push({id:l++,pid:_.id,label:c[e]})}}t.tree=i,t.province_id_list=n,t.city_id_list=r,t.county_id_list=a,t.default_id_list=n.concat(a)},high_init(){this.list2tree(this.raw.data["highlist"],this.high),this.high.key++,this.high.count=this.raw.data["hcount"]},middle_init(){this.list2tree(this.raw.data["middlelist"],this.middle),this.middle.key++,this.middle.count=this.raw.data["mcount"]},high_expand(){if(this.high.expand_all=!this.high.expand_all,this.high.expand_all){let e=this.high.default_id_list.concat(this.high.city_id_list);for(let t=0;t<e.length;t++)this.$refs.high_tree.store.getNode(e[t]).expanded=!0}else for(let e=0;e<this.high.city_id_list.length;e++)this.$refs.high_tree.store.getNode(this.high.city_id_list[e]).expanded=!1;this.high.expand_all_button=this.high.expand_all?"收起":"展开"},middle_expand(){if(this.middle.expand_all=!this.middle.expand_all,this.middle.expand_all){let e=this.middle.default_id_list.concat(this.middle.city_id_list);for(let t=0;t<e.length;t++)this.$refs.middle_tree.store.getNode(e[t]).expanded=!0}else for(let e=0;e<this.middle.city_id_list.length;e++)this.$refs.middle_tree.store.getNode(this.middle.city_id_list[e]).expanded=!1;this.middle.expand_all_button=this.middle.expand_all?"收起":"展开"},high_filter(e,t){if(!e)return void 0===t.children&&this.high.count++,!0;let i=e.split(" ");for(let l=0;l<i.length;l++){let e=i[l];if(!e)continue;if(t.label.includes(e))return void 0===t.children&&this.high.count++,!0;let n=t.pid;while(-1!==n){let i=this.$refs.high_tree.store.getNode(n).data;if(i.label.includes(e))return void 0===t.children&&this.high.count++,!0;n=i.pid}}return!1},middle_filter(e,t){if(!e)return void 0===t.children&&this.middle.count++,!0;let i=e.split(" ");for(let l=0;l<i.length;l++){let e=i[l];if(!e)continue;if(t.label.includes(e))return void 0===t.children&&this.middle.count++,!0;let n=t.pid;while(-1!==n){let i=this.$refs.middle_tree.store.getNode(n).data;if(i.label.includes(e))return void 0===t.children&&this.middle.count++,!0;n=i.pid}}return!1},tag_add(e){if(e=e.trim(),""!==e){while(e.includes("  "))e=e.replace("  "," ");this.filter_history.unshift(e),this.filter_history=Array.from(new Set(this.filter_history)),localStorage.setItem("filter_history",JSON.stringify(this.filter_history))}},tag_remove(e){this.filter_history.splice(e,1),localStorage.setItem("filter_history",JSON.stringify(this.filter_history))}},watch:{filter_text(e){e=e.trim();while(e.includes("  "))e=e.replace("  "," ");this.high.count=0,this.$refs.high_tree.filter(e),this.middle.count=0,this.$refs.middle_tree.filter(e)}}});const P=(0,m.Z)(M,[["render",R],["__scopeId","data-v-0680dfc3"]]);var G=P;const L={class:"content-body"},V={class:"content"};function Z(e,t,i,l,a,o){const s=(0,d.up)("Head"),h=r.nZ,c=G,u=r.b2,f=k,_=r.F_,g=r.G4,p=n.Mr;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(s,null,{default:(0,d.w5)((()=>[(0,d._)("title",null,(0,I.zw)(a.title),1)])),_:1}),(0,d.Wm)(p,{height:"100vh"},{default:(0,d.w5)((()=>[(0,d._)("div",L,[(0,d._)("div",V,[(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Wm)(h,{class:"header"},{default:(0,d.w5)((()=>[(0,d._)("h1",null,(0,I.zw)(a.title),1)])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(c,{data_url:a.api_url},null,8,["data_url"])])),_:1}),(0,d.Wm)(_,{class:"footer"},{default:(0,d.w5)((()=>[(0,d.Wm)(f)])),_:1})])),_:1})])])])),_:1})],64)}var K=i(2350),q={data(){return{refreshing:!1,registration:null,updateExists:!1}},created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,window.location.reload())}))},methods:{updateAvailable(e){this.registration=e.detail,this.updateExists=!0,this.refreshApp()},refreshApp(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}};let Y="https://raw.githubusercontent.com/panghaibin/RiskLevelAPI/api/latest.json";var B={name:"App",components:{RegionShow:G,FooterShow:k,Head:K.Fb},data(){return{title:"全国疫情中高风险地区查询",api_url:Y}},mixins:[q]};const Q=(0,m.Z)(B,[["render",Z]]);var X=Q,ee=i(9907);(0,ee.z)("/COVID-Risk-Region/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered and now polling for updates."),setInterval((()=>{e.update()}),5e3)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const te=(0,l.ri)(X),ie=(0,K.G6)();te.use(ie),te.mount("#app")}},t={};function i(l){var n=t[l];if(void 0!==n)return n.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,l,n,r){if(!l){var a=1/0;for(h=0;h<e.length;h++){l=e[h][0],n=e[h][1],r=e[h][2];for(var d=!0,o=0;o<l.length;o++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](l[o])}))?l.splice(o--,1):(d=!1,r<a&&(a=r));if(d){e.splice(h--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[l,n,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,r,a=l[0],d=l[1],o=l[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(n in d)i.o(d,n)&&(i.m[n]=d[n]);if(o)var h=o(i)}for(t&&t(l);s<a.length;s++)r=a[s],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(h)},l=self["webpackChunkcovid_risk_region"]=self["webpackChunkcovid_risk_region"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(8382)}));l=i.O(l)})();
//# sourceMappingURL=app.07e53a97.js.map