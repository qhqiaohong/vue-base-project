"use strict";(self["webpackChunknewsmzc"]=self["webpackChunknewsmzc"]||[]).push([[736],{5736:function(t,s,i){i.r(s),i.d(s,{default:function(){return l}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"ejBox"},[s("div",{staticClass:"top-info"},[t._m(0),s("div",{staticClass:"right"},[s("div",{staticClass:"time btnActive",on:{click:t.back}},[t._v("上一级")]),s("div",{staticClass:"address"},[t._m(1),s("div",{staticClass:"city"},[t._v(t._s(t.city))])])])]),s("div",{staticClass:"cen"},[t._m(2),s("div",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(t._s(t.titles))]),s("div",{staticClass:"cenbox"},t._l(t.btnlist,(function(i,n){return s("div",{key:n,staticClass:"img"},[s("img",{attrs:{src:i.btnurl,alt:""},on:{click:function(s){return t.next(i)}}})])})),0)]),1==t.show?s("div",{staticClass:"boxss"},[s("div",{staticClass:"boxs"},[s("div",{staticClass:"t"},[t._v("站点选择")]),s("div",{staticClass:"g btnActive",on:{click:t.close}},[s("img",{attrs:{src:i(3886),alt:""}})]),s("div",{staticClass:"x"},[t._v(" -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ")]),s("div",{staticClass:"listBox"},[s("div",{staticClass:"sj z"},[s("div",{staticClass:"name"},[t._v("省 级：")]),s("div",{staticClass:"p"},t._l(t.province,(function(i,n){return s("div",{key:n,staticClass:"dqBtn active"},[t._v(" "+t._s(i)+" ")])})),0)]),s("div",{staticClass:"sh z"},[s("div",{staticClass:"name"},[t._v("市 级：")]),s("div",{staticClass:"p"},t._l(t.cityc,(function(i,n){return s("div",{key:n,class:t.sColor==n?"active":"dqBtn",on:{click:function(s){return t.btns(i,n)}}},[t._v(" "+t._s(i)+" ")])})),0)]),s("div",{staticClass:"xj z"},[s("div",{staticClass:"name"},[t._v("县(市、区):")]),s("div",{staticClass:"p"},t._l(t.county,(function(i,n){return s("div",{key:n,class:t.activeColor==n?"active":"dqBtn",on:{click:function(s){return t.btnNext(i,n)}}},[t._v(" "+t._s(i)+" ")])})),0)])]),s("div",{staticClass:"btnBox"},[s("div",{staticClass:"btn left btnActive",on:{click:function(s){return t.nexts(t.one)}}},[t._v("跳过")]),s("div",{staticClass:"btn right btnActive",on:{click:function(s){return t.nexts(t.one)}}},[t._v("确认")])])])]):t._e()]),s("bottom-info")],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:i(5869),alt:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"icon"},[s("img",{attrs:{src:i(2608),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"left"},[s("img",{attrs:{src:i(921)}})])}],e={name:"NewsmzcMenu",data(){return{btnlist:[],city:"",title:"企业服务平台总窗口",titles:"",show:!1,province:["陕西省"],cityc:["西安","咸阳","榆林","安康"],sColor:0,county:["碑林","雁塔","新城","未央"],activeColor:0,one:{}}},mounted(){this.getback(),this.titles=sessionStorage.getItem("flName")},methods:{close(){this.show=!1},getback(){this.city=sessionStorage.getItem("city");let t=sessionStorage.getItem("flName");this.getbtnlist(t)},getbtnlist(t){"金融超市"==t?this.btnlist=[{sfdl:0,path:"/zxbg",name:"企业征信报告查询",btnurl:i(9194)},{sfdl:0,path:"/rzxqfb",name:"融资需求发布",btnurl:i(4001)},{sfdl:0,path:"/ppqydkcp",name:"匹配企业贷款产品",btnurl:i(1192)},{sfdl:0,path:"/menu2?type=dkcp",name:"贷款产品",btnurl:i(2497)}]:"企业服务"==t?this.btnlist=[{sfdl:1,path:"/qyzwsxbl",name:"企业政务事项办理",btnurl:i(6249)},{sfdl:0,path:"/tsq",name:"提诉求",btnurl:i(3613)},{sfdl:0,path:"/ssq",name:"搜陕企",btnurl:i(7741)}]:"便民利企"==t&&(this.btnlist=[{sfdl:1,path:"/menu2?type=zwfw",name:"个人政务服务",btnurl:i(6492)},{sfdl:0,path:"/menu2?type=swfw",name:"税务服务",btnurl:i(6494)},{sfdl:1,path:"/bmjf",name:"便民缴费",btnurl:i(3848)},{sfdl:1,path:"/zzdy",name:"自助打印",btnurl:i(2612)}])},next(t){0==t.sfdl?"融资需求发布"==t.name?(sessionStorage.setItem("FUNCTIONAL",JSON.stringify(t)),this.$router.push("/phoneLogin2")):"贷款产品"==t.name?this.$router.push(t.path):(sessionStorage.setItem("FUNCTIONAL",JSON.stringify(t)),this.$router.push("/idCardLogin")):1==t.sfdl&&"企业政务事项办理"==t.name?(this.show=!0,this.one=t):(sessionStorage.setItem("FUNCTIONAL",JSON.stringify(t)),this.$router.push(t.path))},nexts(){this.$router.push(this.one.path)},back(){this.$router.push({path:"/",name:"index"})},btns(t,s){this.sColor=s},btnNext(t,s){this.activeColor=s}}},o=e,c=i(1001),A=(0,c.Z)(o,n,a,!1,null,"a32ccd30",null),l=A.exports},3886:function(t){t.exports="data:image/png;base64,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"},3848:function(t,s,i){t.exports=i.p+"static/img/bmjf.14b1faf2.png"},1192:function(t,s,i){t.exports=i.p+"static/img/cp.f8b234f7.png"},2497:function(t,s,i){t.exports=i.p+"static/img/dkcp.a931e93e.png"},921:function(t,s,i){t.exports=i.p+"static/img/leftsqt.d4279f08.png"},6249:function(t,s,i){t.exports=i.p+"static/img/qyzwsxblbtn.a4fa8c98.png"},9194:function(t,s,i){t.exports=i.p+"static/img/qyzxbgbtn.5a44607b.png"},4001:function(t,s,i){t.exports=i.p+"static/img/rzxqfb.be4b51c8.png"},7741:function(t,s,i){t.exports=i.p+"static/img/ssq.8fdc5483.png"},6494:function(t,s,i){t.exports=i.p+"static/img/swbtn.310c3af4.png"},3613:function(t,s,i){t.exports=i.p+"static/img/tsq.7d8f77b7.png"},6492:function(t,s,i){t.exports=i.p+"static/img/zwbtn.b826b03e.png"},2612:function(t,s,i){t.exports=i.p+"static/img/zzdy.5cfa1e8e.png"}}]);