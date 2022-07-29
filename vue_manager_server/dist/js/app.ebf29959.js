(function(){var e={47:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticClass:"home",attrs:{gutter:20}},[a("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"user"},[a("img",{attrs:{src:e.userImg}}),a("div",{staticClass:"userinfo"},[a("p",{staticClass:"name"},[e._v("Admin")]),a("p",{staticClass:"access"},[e._v("超级管理员")])])]),a("div",{staticClass:"login-info"},[a("p",[e._v("         上次登录事件:"),a("span",[e._v("2022-5-8")])]),a("p",[e._v("上次登录地点:"),a("span",[e._v("成都")])])])]),a("el-card",{staticStyle:{"margin-top":"20px",height:"460px"}},[a("el-table",{attrs:{data:e.tableData}},e._l(e.tableLabel,(function(e,t){return a("el-table-column",{key:t,staticStyle:{"margin-top":"20px",height:"460px"},attrs:{prop:t,label:e}})})),1)],1)],1),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"num"},e._l(e.countData,(function(t,n){return a("el-card",{key:n,attrs:{"body-style":{display:"flex",padding:0}}},[a("i",{staticClass:"icon",class:"el-icon-"+t.icon,style:{background:t.color}}),a("div",{staticClass:"detail"},[a("p",{staticClass:"num"},[e._v("￥"+e._s(t.value))]),a("p",{staticClass:"txt",staticStyle:{"text-align":"left"}},[e._v(e._s(t.name))])])])})),1),a("el-card",{staticStyle:{height:"280px"}},[a("div",{ref:"echarts",staticStyle:{height:"280px"}})]),a("div",{staticClass:"graph"},[a("el-card",{staticStyle:{height:"260px"}},[a("div",{ref:"userEcharts",staticStyle:{height:"240px"}})]),a("el-card",{staticStyle:{height:"260px"}},[a("div",{ref:"videoEcharts",staticStyle:{height:"240px"}})])],1),a("div")],1)],1)],1)},o=[],r=a(8085),s=a(1079),l={name:"theHome",data(){return{userImg:a(4353),tableData:[{name:"oppo",todayBuy:100,monthBuy:300,totalBuy:800},{name:"vivo",todayBuy:100,monthBuy:300,totalBuy:800},{name:"苹果",todayBuy:100,monthBuy:300,totalBuy:800},{name:"小米",todayBuy:100,monthBuy:300,totalBuy:800},{name:"三星",todayBuy:100,monthBuy:300,totalBuy:800},{name:"魅族",todayBuy:100,monthBuy:300,totalBuy:800}],tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}],echartData:{order:{xData:[],series:[]},user:{xData:[],series:[]},video:{series:[]}}}},mounted(){(0,r.Yu)().then((e=>{const{code:t,data:a}=e.data;if(200===t){this.tableData=a.tableData;const e=a.orderData,t=Object.keys(e.data[0]),n=[],o=e.date;t.forEach((t=>{n.push({name:t,data:e.data.map((e=>e[t])),type:"line"})}));const r={xAxis:{data:o},yAxis:{},legend:{data:t},series:n},l=s.S1(this.$refs.echarts);l.setOption(r);const i={textStyle:{color:"#333"},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.userData.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLable:{interval:0,color:"#333"}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}},color:["#2ec7c9","#b6a2de"],legend:{data:["新增用户","活跃用户"]},series:[{name:"新增用户",data:a.userData.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:a.userData.map((e=>e.active)),type:"bar"}]},u=s.S1(this.$refs.userEcharts);u.setOption(i);const c={series:{type:"pie",data:a.videoData},tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"]},m=s.S1(this.$refs.videoEcharts);m.setOption(c)}}))}},i=l,u=a(1001),c=(0,u.Z)(i,n,o,!1,null,null,null),m=c.exports},3079:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticClass:"login-container",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"100px"}},[a("h1",{staticClass:"title"},[e._v("系统登录")]),a("div",{staticClass:"total"},[a("el-form-item",{attrs:{label:"用户名","label-width":"80px",prop:"username"}},[a("el-input",{attrs:{type:"input","auto-complete":"off",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"密码","label-width":"80px",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),a("el-form-item",{staticClass:"login_submit"},[a("el-button",{staticClass:"login_submit",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1)},o=[],r=(a(3025),a(8085)),s={name:"theLogin",data(){return{form:{},rules:{username:[{require:!0,message:"请输入用户名",trigger:"blur"},{min:3,message:"用户长度不能小于三位",trigger:"blur"}],password:[{require:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login(){(0,r.r7)(this.form).then((({data:e})=>{2e4===e.code?(this.$store.commit("tab/clearMenu"),this.$store.commit("tab/setMenu",e.data.menu),this.$store.commit("user/setToken",e.data.token),this.$store.commit("tab/addMenu",this.$router),this.$router.push({name:"home"})):this.$message.warning(e.data.message)}))}}},l=s,i=a(1001),u=(0,i.Z)(l,n,o,!1,null,"08d728b3",null),c=u.exports},8859:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-aside",{attrs:{width:"auto"}},[a("Common",{directives:[{name:"show",rawName:"v-show",value:"login"!==this.$route.name,expression:"this.$route.name!=='login'"}]})],1),a("el-container",[a("el-header",{directives:[{name:"show",rawName:"v-show",value:"login"!==this.$route.name,expression:"this.$route.name!=='login'"}]},[a("CommonHeader",{directives:[{name:"show",rawName:"v-show",value:"login"!==this.$route.name,expression:"this.$route.name!=='login'"}]})],1),a("commonTag",{directives:[{name:"show",rawName:"v-show",value:"login"!==this.$route.name,expression:"this.$route.name!=='login'"}]}),a("el-main",[a("router-view")],1)],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1","background-color":"#5c5464",collapse:e.searchTrigger,"text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[a("h3",[e._v(e._s(e.theCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(t,n){return a("el-menu-item",{key:n+20,on:{click:function(a){return e.toNochild(t)}}},[a("i",{class:"el-icon-"+t.icon}),a("span",{style:e.$route.name==t.name?"color:#ffd04b":"color:#fff",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),e._l(e.haveChildren,(function(t,n){return a("el-submenu",{key:n+5,attrs:{index:"5"}},[a("template",{slot:"title"},[a("i",{class:"el-icon-"+t.icon}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),a("el-menu-item-group",e._l(t.children,(function(t,n){return a("el-menu-item",{key:n+10,staticStyle:{},style:e.$route.name==t.name?"color:#ffd04b":"color:#fff",attrs:{collapse:"false"},on:{click:function(a){return e.toHavechild(t)}}},[a("i",{class:"el-icon-"+t.icon}),e._v(e._s(t.label))])})),1)],2)}))],2)},s=[],l={name:"commonAside",data(){return{menu:[],searchTrigger:!1}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},toNochild(e){this.$router.push({name:e.name}),this.$store.dispatch("tab/selectMenu",e)},toHavechild(e){this.$router.push({name:e.name}),this.$store.dispatch("tab/selectMenu",e)}},computed:{noChildren(){return this.$store.state.tab.menu.filter((e=>!e.children))},haveChildren(){return this.$store.state.tab.menu.filter((e=>e.children))},theCollapse(){return this.searchTrigger=this.$store.state.tab.isCollapse,this.$store.state.tab.isCollapse},asyncMenu(){return this.$store.state.tab.menu}},mounted(){console.log(this.theCollapse)}},i=l,u=a(1001),c=(0,u.Z)(i,r,s,!1,null,"cee0ddbc",null),m=c.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"i-content"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-menu",size:"mini"},on:{click:e.changeCollapse}},[e._v("搜索")]),a("h3",{staticStyle:{color:"#fff"}},[a("el-breadcrumb",{staticStyle:{colr:"blue"},attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.tabList,(function(t,n){return a("el-breadcrumb-item",{key:n,staticClass:"myColor",attrs:{to:{path:t.path}}},[e._v(e._s(t.label))])})),1)],1)],1),a("div",{staticClass:"r-content"},[a("el-dropdown",{attrs:{size:"mini",trigger:"click"}},[a("span",{attrs:{type:"primary"}},[a("img",{staticClass:"user",attrs:{src:e.userImg,alt:"算了吧"}})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("个人中心")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.quit.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)])},p=[],f=a(4665),h={name:"CommonHeader",data(){return{userImg:a(4353)}},methods:{changeCollapse(){this.$store.commit("tab/changeCollapse")},quit(){this.$store.commit("user/clearToken"),this.$store.commit("tab/clearMenu"),this.$router.push({name:"login"})}},computed:{...(0,f.rn)("tab",["tabList"])},mounted(){}},g=h,b=(0,u.Z)(g,d,p,!1,null,"64413d36",null),v=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs"},e._l(e.tabList,(function(t,n){return a("el-tag",{key:n,attrs:{size:"small",closable:"首页"!=t.label,effect:e.$route.name===t.name?"dark":"plain"},on:{click:function(a){return e.changeMenu(t)},close:function(a){return e.handleClose(t,n)}}},[e._v(e._s(t.label))])})),1)},x=[],_={name:"commonTag",computed:{...(0,f.rn)("tab",["tabList"])},methods:{changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){if(this.$route.name!==e.name)this.tabList.splice(this.tabList.indexOf(e),1);else if(1!==t){this.tabList.splice(this.tabList.indexOf(e),1);const a=this.tabList[t-1];this.$router.push({name:a.name})}else if(this.tabList.splice(this.tabList.indexOf(e),1),this.tabList[t]){const e=this.tabList[t];this.$router.push({name:e.name})}else this.$router.push({name:"home"})}}},w=_,$=(0,u.Z)(w,y,x,!1,null,"29f25bf5",null),k=$.exports,C={name:"theHome",components:{Common:m,CommonHeader:v,commonTag:k}},S=C,L=(0,u.Z)(S,n,o,!1,null,"9e07653c",null),B=L.exports},9096:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage"},[a("el-dialog",{attrs:{title:"add"===e.operateType?"新增用户":"更新用户",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[a("common-form",{ref:"form",attrs:{formlabel:e.operateFormlabel,form:e.operateForm,inline:!0}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确认")])],1)],1),a("div",{staticClass:"dialog-header"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("+新增")]),a("common-form",{ref:"form",staticStyle:{"padding-top":"24px"},attrs:{formlabel:e.formlabel,form:e.searchForm,inline:!0}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList(e.searchForm.keyword)}}},[e._v("搜索")])],1)],1),a("CommomTable",{attrs:{tableData:e.tableData,tableLabel:e.tableLabel,config:e.config},on:{changePage:e.getList,edit:e.editUser,del:e.delUser}})],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticStyle:{"text-align":"left"},attrs:{"label-width":"100px",model:e.form2,inline:e.inline2}},[e._l(e.formlabel2,(function(t,n){return a("el-form-item",{key:n,attrs:{label:t.label}},["input"===t.type?a("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请输入"+t.label},model:{value:e.form2[t.model],callback:function(a){e.$set(e.form2,t.model,a)},expression:"form2[item.model]"}}):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form2[t.model],callback:function(a){e.$set(e.form2,t.model,a)},expression:"form2[item.model]"}}):e._e(),"date"===t.type?a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form2[t.model],callback:function(a){e.$set(e.form2,t.model,a)},expression:"form2[item.model]"}}):e._e(),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.label}})})),1):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)},s=[],l={name:"commomForm",props:{formlabel:Array,form:Object,inline:Boolean},data(){return{formlabel2:this.formlabel,form2:this.form,inline2:this.inline}},mounted(){console.log(this.formlabel,this.OFL)}},i=l,u=a(1001),c=(0,u.Z)(i,r,s,!1,null,null,null),m=c.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-table"},[a("el-table",{attrs:{data:e.tableData,height:"90%",stripe:""}},[e._l(e.tableLabel,(function(t){return a("el-table-column",{key:t.prop,attrs:{"show-overflow-tooltip":"",label:t.label,width:t.width?t.width:125},scopedSlots:e._u([{key:"default",fn:function(n){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(n.row[t.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],2),a("el-pagination",{staticClass:"pager",attrs:{layout:"prev,pager,next",total:e.config.total,"current-page":e.config.page,"page-size":20},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":function(t){return e.changePage()}}})],1)},p=[],f={name:"CommonTable",props:{tableData:Array,tableLabel:Array,config:Object},data(){return{}},methods:{handleEdit(e){this.$emit("edit",e)},handleDelete(e){this.$emit("del",e)},changePage(e){this.$emit("changePage",e)}}},h=f,g=(0,u.Z)(h,d,p,!1,null,"3687d7fa",null),b=g.exports,v=a(8085),y={name:"theUser",components:{CommonForm:m,CommomTable:b},data(){return{operateType:"add",isShow:!1,operateFormlabel:[{model:"name",label:"姓名",type:"input"},{model:"age",label:"年龄",type:"input"},{model:"sex",label:"性别",type:"select",opts:[{label:"男",value:1},{label:"女",value:0}]},{model:"birth",label:"出生日期",type:"date"},{model:"addr",label:"地址",type:"input"}],operateForm:{name:"",addr:"",age:"",birth:"",sex:""},formlabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""},tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期",width:200},{prop:"addr",label:"地址",width:320}],config:{page:1,total:30,loading:""}}},methods:{confirm(){"edit"===this.operateType?this.$http.post("/user/edit",this.operateForm).then((e=>{console.log(e),this.isShow=!1,this.getList()})):this.$http.post("/user/add",this.operateForm).then((e=>{console.log(e),this.isShow=!1,this.getList()}))},addUser(){this.isShow=!0,this.operateType="add",this.operateForm={name:"",addr:"",age:"",birth:"",sex:""}},editUser(e){this.operateType="edit",this.isShow=!0,this.operateForm=e},delUser(e){this.$confirm("此操作将永久删除该组件，是否继续？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{console.log(e);const t=e.id;this.$http.delete("/user/del",{params:{id:t}}).then((()=>{this.$message({type:"success",message:"删除成功"}),this.getList()}))}))},getList(e=""){this.config.loading=!0,e&&(this.config.page=1),(0,v.PR)({page:this.config.page,name:e}).then((({data:e})=>{console.log(e,"res"),this.tableData=e.list.map((e=>(e.sexLabel=0===e.sex?"女":"男",e))),this.config.total=e.count,this.config.loading=!1}))}},mounted(){this.getList()}},x=y,_=(0,u.Z)(x,n,o,!1,null,"5cab64f4",null),w=_.exports},506:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-carousel",{attrs:{"indicator-position":"outside",height:"980px",width:"1066.66px"}},e._l(e.img,(function(e,t){return a("el-carousel-item",{key:t},[a("el-image",{attrs:{src:e,alt:"",fit:"fill"}})],1)})),1)},o=[],r={name:"theMall",data(){return{img:{bcImg1:a(8026),bcImg2:a(8594),bcImg3:a(7226),bcImg4:a(3403)}}}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},808:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("我是第一页")])},o=[],r={},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},6704:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("我是第二页")])},o=[],r={},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},8085:function(e,t,a){"use strict";a.d(t,{Yu:function(){return c},r7:function(){return u},PR:function(){return m}});var n=a(6166),o=a.n(n),r={baseUrl:{dev:"/api/",pro:""}};const s=r.baseUrl.pro;class l{constructor(e){this.baseUrl=e}getInsideConfig(){const e={baseUrl:this.baseUrl,header:{}};return e}interceptors(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}request(e){const t=o().create();return e={...this.getInsideConfig(),...e},this.interceptors(t),t(e)}}var i=new l(s);const u=e=>i.request({url:"/permission/getMenu",method:"post",data:e}),c=()=>i.request({url:"api/home/getData"}),m=e=>i.request({url:"/user/getUser",method:"get",params:e})},276:function(e,t,a){"use strict";var n=a(8114),o=a.n(n),r=a(672),s=a.n(r),l=a(2244),i=a.n(l),u=a(5423),c=a.n(u),m=a(4412),d=a.n(m),p=a(4863),f=a.n(p),h=a(6668),g=a.n(h),b=a(8985),v=a.n(b),y=a(2711),x=a.n(y),_=a(4400),w=a.n(_),$=a(7227),k=a.n($),C=a(5263),S=a.n(C),L=a(2319),B=a.n(L),O=a(7677),E=a.n(O),M=a(5950),T=a.n(M),U=a(8782),D=a.n(U),Z=a(8807),N=a.n(Z),j=a(3711),P=a.n(j),R=a(9595),F=a.n(R),I=a(5040),H=a.n(I),A=a(7790),q=a.n(A),J=a(701),z=a.n(J),Y=a(9294),G=a.n(Y),K=a(5035),Q=a.n(K),V=a(7694),W=a.n(V),X=a(8012),ee=a.n(X),te=a(8538),ae=a.n(te),ne=a(9221),oe=a.n(ne),re=a(3388),se=a.n(re),le=a(5571),ie=a.n(le),ue=a(1031),ce=a.n(ue),me=a(1192),de=a.n(me),pe=a(2747),fe=a.n(pe),he=a(7349),ge=a.n(he),be=a(8935),ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},ye=[],xe={name:"App",components:{}},_e=xe,we=a(1001),$e=(0,we.Z)(_e,ve,ye,!1,null,null,null),ke=$e.exports,Ce=a(2809),Se=a(8859),Le=(a(9096),a(47),a(506),a(808),a(6704),a(3079)),Be=[{name:"Main",path:"/Main",component:Se["default"],meta:{show:!1},redirect:"/login",children:[]},{name:"login",path:"/login",component:Le["default"]}];be["default"].use(Ce.Z);var Oe=new Ce.Z({routes:Be});const Ee=Ce.Z.prototype.push;Ce.Z.prototype.push=function(e){return Ee.call(this,e).catch((e=>e))};var Me=a(4665),Te=a(329),Ue={namespaced:!0,state:{isCollapse:!1,tabList:[{path:"/",name:"home",label:"首页",icon:"home"}],currentMenu:null,menu:[]},actions:{selectMenu(e,t){"home"!==t.name?e.commit("SELECTMENU",t):e.commit("SELECTMENU2")}},mutations:{changeCollapse(e){e.isCollapse=!e.isCollapse,console.log(e.isCollapse)},SELECTMENU(e,t){e.currentMenu=t;const a=e.tabList.findIndex((e=>e.name===t.name));-1===a&&e.tabList.push(t)},SELECTMENU2(e){e.currentMenu=null},cleanTag(e,t){const a=e.tabList.findIndex((e=>e.name===t.name));e.tabList.splice(a,1)},setMenu(e,t){e.menu=t,Te.Z.set("menu",JSON.stringify(t))},clearMenu(e){e.menu=[],Te.Z.set("menu")},addMenu(e,t){if(!Te.Z.get("menu"))return;console.log(t);const n=JSON.parse(Te.Z.get("menu"));e.menu=n;const o=[];n.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>a(3333)(`./${e.url}`),e))),o.push(...e.children)):(e.component=()=>a(3333)(`./${e.url}`),o.push(e))})),o.forEach((e=>{t.addRoute("Main",e),console.log(333)}))}}},De={namespaced:!0,state:{token:""},actions:{},mutations:{setToken(e,t){e.token=t,Te.Z.set("token",t)},clearToken(e){e.token="",Te.Z.remove("token")},getToken(e){e.token=e.token||Te.Z.get("token")}}};be["default"].use(Me.ZP);var Ze=new Me.ZP.Store({modules:{tab:Ue,user:De}}),Ne=a(3025),je=a.n(Ne);let Pe=[];var Re={getStatisticalData:()=>{for(let e=0;e<7;e++)Pe.push(je().mock({"苹果":je().Random.float(100,8e3,0,0),vivo:je().Random.float(100,8e3,0,0),oppo:je().Random.float(100,8e3,0,0),"魅族":je().Random.float(100,8e3,0,0),"三星":je().Random.float(100,8e3,0,0),"小米":je().Random.float(100,8e3,0,0)}));return{code:200,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Pe},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};a(6699);function Fe(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let Ie=[];const He=200;for(let Ye=0;Ye<He;Ye++)Ie.push(je().mock({id:je().Random.guid(),name:je().Random.cname(),addr:je().mock("@county(true)"),"age|18-60":1,birth:je().Random.date(),sex:je().Random.integer(0,1)}));var Ae={getUserList:e=>{const{name:t,page:a=1,limit:n=20}=Fe(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+n);const o=Ie.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=o.filter(((e,t)=>t<n*a&&t>=n*(a-1)));return{code:2e4,count:o.length,list:r}},createUser:e=>{const{name:t,addr:a,age:n,birth:o,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),Ie.unshift({id:je().Random.guid(),name:t,addr:a,age:n,birth:o,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=Fe(e.url);return t?(Ie=Ie.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=Fe(e.url);return t=t.split(","),Ie=Ie.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:n,age:o,birth:r,sex:s}=JSON.parse(e.body),l=parseInt(s);return Ie.some((e=>{if(e.id===t)return e.name=a,e.addr=n,e.age=o,e.birth=r,e.sex=l,!0})),{code:2e4,data:{message:"编辑成功"}}}},qe={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home/index"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"mall"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User/index"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"other/pageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"other/pageTwo.vue"},{name:"login",path:"/login"}]}],token:je().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home/index"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"mall"}],token:je().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码或者账号错误"}}}};je().mock("api/home/getData",Re.getStatisticalData),je().mock(/user\/add/,"post",Ae.createUser),je().mock(/user\/edit/,"post",Ae.updateUser),je().mock(/user\/getUser/,"get",Ae.getUserList),je().mock(/user\/del/,"delete",Ae.deleteUser),je().mock(/permission\/getMenu/,"post",qe.getMenu);var Je=a(6166),ze=a.n(Je);be["default"].prototype.$message=ge(),be["default"].prototype.$confirm=fe().confirm,be["default"].use(de()),be["default"].use(ce()),be["default"].use(ie()),be["default"].use(se()),be["default"].use(oe()),be["default"].use(ae()),be["default"].use(ee()),be["default"].use(W()),be["default"].use(Q()),be["default"].use(G()),be["default"].use(z()),be["default"].use(q()),be["default"].use(H()),be["default"].use(F()),be["default"].use(P()),be["default"].use(N()),be["default"].use(D()),be["default"].use(T()),be["default"].use(E()),be["default"].use(B()),be["default"].use(S()),be["default"].use(k()),be["default"].use(w()),be["default"].use(x()),be["default"].use(v()),be["default"].use(g()),be["default"].use(f()),be["default"].use(d()),be["default"].use(c()),be["default"].use(i()),be["default"].use(s()),be["default"].use(o()),be["default"].config.productionTip=!1,be["default"].prototype.$http=ze(),Oe.beforeEach(((e,t,a)=>{Ze.commit("user/getToken");const n=Ze.state.user.token;n||"login"===e.name?n&&"login"===e.name?a({name:"home"}):a():a({name:"login"})})),new be["default"]({store:Ze,router:Oe,render:e=>e(ke),created(){this.$store.commit("tab/addMenu",this.$router)}}).$mount("#app")},3333:function(e,t,a){var n={"./Home":47,"./Home/":47,"./Home/index":47,"./Home/index.vue":47,"./Login/login":3079,"./Login/login.vue":3079,"./Main":8859,"./Main.vue":8859,"./User":9096,"./User/":9096,"./User/index":9096,"./User/index.vue":9096,"./mall":506,"./mall/":506,"./mall/index":506,"./mall/index.vue":506,"./other/pageOne":808,"./other/pageOne.vue":808,"./other/pageTwo":6704,"./other/pageTwo.vue":6704};function o(e){return Promise.resolve().then((function(){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var o=n[e];return a(o)}))}o.keys=function(){return Object.keys(n)},o.id=3333,e.exports=o},8026:function(e,t,a){"use strict";e.exports=a.p+"img/carton1.a5d7a9ff.jpg"},8594:function(e,t,a){"use strict";e.exports=a.p+"img/carton2.5c7d3a85.jpg"},7226:function(e,t,a){"use strict";e.exports=a.p+"img/carton3.5a3cdfb8.jpg"},3403:function(e,t,a){"use strict";e.exports=a.p+"img/carton4.6c581d9c.jpg"},4353:function(e,t,a){"use strict";e.exports=a.p+"img/user.c82a2060.png"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,r<s&&(s=r));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.e=function(){return Promise.resolve()}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var c=i(a)}for(t&&t(n);u<s.length;u++)r=s[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunkvue_manager"]=self["webpackChunkvue_manager"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(276)}));n=a.O(n)})();
//# sourceMappingURL=app.ebf29959.js.map