"use strict";(self["webpackChunknewsmzc"]=self["webpackChunknewsmzc"]||[]).push([[478],{8478:function(t,s,i){i.r(s),i.d(s,{default:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[t._m(0),s("div",{staticClass:"citybox"},[s("div",{staticClass:"city",on:{click:t.dkxz}},[t._m(1),s("div",[t._v(" "+t._s(t.city)+" ")]),s("div",{staticClass:"jt"},[1==t.xz?s("div",{staticClass:"b"},[s("img",{attrs:{src:i(204),alt:""}})]):0==t.xz?s("div",{staticClass:"r"},[s("img",{attrs:{src:i(179),alt:""}})]):t._e()])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.xz,expression:"xz"}],staticClass:"xz"},t._l(t.cityc,(function(i,e){return s("div",{key:e,staticClass:"city cityc btnActive",on:{click:function(s){return t.chosecity(i)}}},[t._v(" "+t._s(i.cityName)+" ")])})),0),s("div",{staticClass:"sbbh"},[t._v("设备编号："+t._s(this.sbbh))])]),s("div",{staticClass:"topBanner"},t._l(t.list,(function(i,e){return s("img",{directives:[{name:"show",rawName:"v-show",value:e==t.lbIndex,expression:"index == lbIndex"}],key:e,attrs:{src:i.imgUrl},on:{click:function(s){return t.golunbo(i)}}})})),0),s("div",{staticClass:"center"},[s("div",{staticClass:"home-PopularServices"},[s("div",{staticClass:"popularBusiness"},[t._v("热门业务")]),s("div",{staticClass:"popularBusiness-right"},[s("div",{staticClass:"imgHight"},t._l(t.TopList,(function(i,e){return s("div",{key:e,staticClass:"hot btnActive",on:{click:function(s){return t.hotnext(i)}}},[s("img",{attrs:{src:i.btnurl}})])})),0)])]),s("div",{staticClass:"classificationOfService"},t._l(t.menulist,(function(i,e){return s("img",{key:e,staticClass:"btnActive",attrs:{src:i.url},on:{click:function(s){return t.TaxServices(i,e)}}})})),0)]),s("div",{staticClass:"foot"},[s("div",{staticClass:"left"},[t._v(t._s(t.time))]),s("div",{staticClass:"con"},[t.footlogo&&t.footlogo.length>0?s("img",{attrs:{src:t.footlogo,alt:""}}):t._e()]),s("div",{staticClass:"right"},[t._v("产品热线："+t._s(t.cptel))])])])},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"dlogo"},[s("div",{staticClass:"biglogo"},[s("img",{attrs:{src:i(5869),alt:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"i"},[s("img",{attrs:{src:i(8361),alt:""}})])}],a={name:"NewsmzcIndex",data(){return{cptel:"400-654-1666",footlogo:i(7795),sbbh:"020001",xz:!1,cityc:[{cityName:"西安"},{cityName:"咸阳"},{cityName:"榆林"},{cityName:"安康"}],city:"西安",timeInterval:null,TopList:[{sfdl:0,path:"/zxbg",name:"企业征信报告查询",btnurl:i(7747)},{sfdl:0,path:"/tsq",name:"提诉求",btnurl:i(3853)},{sfdl:0,path:"/ppqydkcp",name:"匹配企业贷款产品",btnurl:i(2328)},{sfdl:0,path:"/qydkedcs",name:"企业贷款额度测算",btnurl:i(9840)},{sfdl:1,path:"/qyzwsxbl",name:"企业政务事项办理",btnurl:i(9736)},{sfdl:0,path:"/ssq",name:"搜陕企",btnurl:i(5970)},{sfdl:1,path:"/bmjf",name:"便民缴费",btnurl:i(1051)},{sfdl:0,path:"/menu2?type=dkcp",name:"贷款产品",btnurl:i(9197)},{sfdl:1,path:"/zzdy",name:"自助打印",btnurl:i(3217)},{sfdl:0,path:"/rzxqfb",name:"融资需求发布",btnurl:i(8002)},{sfdl:0,path:"/qsjn",name:"契税缴纳",btnurl:i(3189)},{sfdl:0,name:"职工养老待遇支付明细查询",path:"/zgyldyzfmx",btnurl:i(612)}],lbIndex:0,list:[{imgUrl:i(5115)},{imgUrl:i(7291)}],bottomAuto:null,menulist:[{name:"金融超市",url:i(2003)},{name:"企业服务",url:i(734)},{name:"政策服务",url:i(2289)},{name:"公共服务",url:i(6135)},{name:"便民利企",url:i(6214)}],time:""}},created(){this.getTime(),this.timeInterval=setInterval((()=>{this.getTime()}),1e3)},mounted(){this.autoBottom()},beforeDestroy(){clearInterval(this.bottomAuto),this.bottomAuto=null,clearInterval(this.timeInterval),this.timeInterval=null},methods:{dkxz(){this.xz=!this.xz},chosecity(t){this.city=t.cityName,this.xz=!this.xz},hotnext(t){0==t.sfdl?"融资需求发布"==t.name?(sessionStorage.setItem("FUNCTIONAL",JSON.stringify(t)),this.$router.push("/phoneLogin2")):"贷款产品"==t.name?this.$router.push(t.path):(sessionStorage.setItem("FUNCTIONAL",JSON.stringify(t)),this.$router.push("/idCardLogin")):(sessionStorage.setItem("cplist",JSON.stringify(t)),this.$router.push(t.path))},getAddress(t){},autoBottom(){this.bottomAuto=setInterval((()=>{this.lbIndex<this.list.length-1?this.lbIndex++:this.lbIndex=0}),5e3)},TaxServices(t,s){sessionStorage.setItem("flName",t.name),sessionStorage.setItem("city",this.city),"金融超市"==t.name||"企业服务"==t.name||"便民利企"==t.name?this.$router.push("/menu"):"政策服务"!=t.name&&"公共服务"!=t.name||this.$router.push("/menu2")},getTime(){let t=new Date;var s=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,e=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getHours()<10?"0"+t.getHours():t.getHours(),a=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),c=s+"年"+i+"月"+e+"日 "+n+":"+a;this.time=c}}},c=a,o=i(1001),r=(0,o.Z)(c,e,n,!1,null,"69338641",null),l=r.exports},8361:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAAAAXNSR0IArs4c6QAABDpJREFUWEetmY9RVDEQxrMViBWoFQgVKBUoFQgVCBUIFYgVqBUIFSgVCBUIFQgVrPO72bzJy9tN8u7MzM1xXN7my/758m1O0pZDVfdSSu9SSm9TSi9TSnzeN3P3KaX8+pVSuhaRx22WkrUPqSqAPhmwNY8D9EJEeB8ewwBVFS993QJYDQaAZyJyO4JyCKCqvjdwhPF/DMINyG89Y12Aqnps4Hq2tvn+m4ictB5sAhwE95BSImwUBWHDO7lweH/RQX7S8mQI0IrhZ8M4wM57YTI7lyml1w1bh1HxtAD+Lmijtv1FRE7XxFRVz636vcfuReSV94ULsBNaqILFFsMqfS+q0G3sRgAj70G4VPQ0DBS8SDGV48p4b0Ynqkq4Pzr7c724AGgL/gnC90pEKIbNMI98tlMkivisCOwEwsYz54GD2vseQHKLRevxXUQmL9lG8PQIN84WVlX474OzxiJ9PIBRMh+JCGHL3otC5Xmy3hz04zHEbB6GPIBw2htnlRkVqGo0zwM4y68Ghd2ICOCnsQtAkr/FbeU6TyIypYKqonpIj3oMARwNcZRHngdn1d/w4FCIo7N3NI88gHX+RoWIgCC3myEmFH+dVThjoZlJeHZOh2xi4RVVjXh2RmNukfDPBg1cichRCd6kGLuuRQFn9WlZ+WY7itCdiGRFHnvQjEQ0wNeu+rDEz9Kfql0oZ5sDvXjc6dptiYUWjVyKyJmXbNH/OuCe6Gu8vqUFsCdUoRmSutlj2NHG2esKDNtQKEB6gpUzsyc4AQpIThnyjiKCHwk3qYK4aB2HoffCIslhGhCta6IczQ291wVoBbPmSFsL+EFE8HQ4RpomDETyay2gen6zHxnyoHlxjXIZBb04d70Hux40gCQ5xdArmFFwzFuI060BGkiq8ccaBI25zcIonxvyYFHVUAkXRrsMqGh/9DJpLUBCHfUTo6DDHninEBde3CXUq/vpVR7cMdSuWum5PeqL4T5yDW8hgZBZ0yVPp3WM1qw7O1QN6+SjEtU9tbTZyAygqtIKonYXuqyWWaYDR6t6ppRVNVLUi0vODUDrcVnMA8aUO4rDuVUYIfAFIVtHyFpe88569Dts6lGCBhyFAaUQ2qkXrmNnoWbXUXfXVCqmEVE8SLvaxka9A7Duzi5SSgjSoUtvWwSQnjeGKcUcRURKnj0AoBaeWXRVvSorThk2mkHiueOW9yO71eXSIQDLBpy/aREX1TQINN8K3I5GoLRr+pN7oVwLzwHoES95x/3x9QiwXeZYaLlqqdljE81cxSQp8ffyiPzKL8h2KDcbIcQ7FATveLxmDtKDdnXzC8DEg7YTGhvvWqxcD4D5srz+rYPPufXMz/C5/iXKww8wnDQrUO/yCEFA2Hmxw4irdolsfhZ+ZVMhnXXP4oKrAJ5/XthGuN4Uv99tjreRdOkCbLnJwLdayq2quVzzH6IG9LXAsYMNAAAAAElFTkSuQmCC"},7291:function(t,s,i){t.exports=i.p+"static/img/banne1.914d0e94.png"},5115:function(t,s,i){t.exports=i.p+"static/img/banner1.20e19c67.png"},6214:function(t,s,i){t.exports=i.p+"static/img/bmlqbtn.11eb8458.png"},179:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABQCAYAAAC3dkP2AAAABHNCSVQICAgIfAhkiAAAAeFJREFUeF7t2DFOw0AURdFYQqJhQ1CnoKRhOewHiYKGAlGzJCiowo+UIgVK7Ov5Mz/oRrJsKX6ZycmLPfK08YUEJpQytBEOlkA44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNk44aAAjNm43nC73e4hxnyJ7QqOXSn2HpN5mKbpZ+6kVjXun+AtRtvjroLbf8CF4yG0JnAXjIfRmsEd4T3H8fXc68TA81ahNYU74G1j/1YcbzVac7gLwGuClgJXGK8ZWhpcQbzPmNN2yTrt3PV39XLk1ACxVKlwzduj3Qfa9zmMJe+nwhVoXgpa6l/1+Ncb1Lw0tG5wA5qXitYVriNeOlp3uA54XdCGwCXidUMbBpeA1xVtKFxDvO5ow+Ea4A1BKwF3hPcaxzcLVu/D0MrAHfBuY/8xE28oWim4BXjD0crBzcArgVYS7gReGbSycH/glUIrDXfAu4v9U2yP8Tzta8EdN/3U9Odx6d9g0ADCQXjhhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMGbjhIMCMPYLX3ubUQ1/X6wAAAAASUVORK5CYII="},7795:function(t,s,i){t.exports=i.p+"static/img/botomlogo.fa81f2c1.png"},9840:function(t,s,i){t.exports=i.p+"static/img/dkedcs.1aef23fa.png"},6135:function(t,s,i){t.exports=i.p+"static/img/ggfwbtn.d24e3490.png"},7747:function(t,s,i){t.exports=i.p+"static/img/hot.05db3c78.png"},2003:function(t,s,i){t.exports=i.p+"static/img/jrcsbtn.2b07a3da.png"},2328:function(t,s,i){t.exports=i.p+"static/img/ppqydkcp.2f0adba6.png"},3189:function(t,s,i){t.exports=i.p+"static/img/qsjn.9c52aa23.png"},734:function(t,s,i){t.exports=i.p+"static/img/qyfubtn.5aeeacdc.png"},9736:function(t,s,i){t.exports=i.p+"static/img/qyzwsxblbtn.cb1136d8.png"},8002:function(t,s,i){t.exports=i.p+"static/img/rzxqfb.4fe45697.png"},1051:function(t,s,i){t.exports=i.p+"static/img/sdfjn.5aeba039.png"},5970:function(t,s,i){t.exports=i.p+"static/img/ssq.a44c3247.png"},204:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAABHNCSVQICAgIfAhkiAAAAbtJREFUeF7t2EFKw1AURuFG3JY7cCaCU7suR47EiQtwZ4LEO0hBhEI8ee/dm3AKgQ7yF/L1pLSdTj6QwIRWjk7CwQiEEw4KwJnFCQcF4MzihIMCcGZxwkEBOLM44aAAnFmccFAAzixOOCgAZxYnHBSAM4sTDgrAmcUJBwXgzOKEgwJwZnFHhJvn+RzXdRfHeZqmGV5jl1nZ4gLtOa74JY6bOF4XvO8uCuBFS8L9Qbtc1kc8eYzySuCVg7uCVg6vFFygPYTQ+3J7XruBSpRXBm5Bewut2xUfOel4JeD+iVbitk2Hg2jpeKlwG9FS8dLgGqGl4aXANUZLwRsO1wltON5QuM5oQ/GGwQ1CG4Y3BG4w2hC87nBJaN3xusIlo/3Ge4p/Vb5W/JRbfUo3uCJoF4jPeHLfEq8LXDG0LnjN4YqiNcdrClccrSleM7idoDXDawK3M7QmeJvhdoq2GW8T3M7RNuFhuIOgYTwMt/or9kFPFA6+scIJBwXgzOKEgwJwZnHCQQE4szjhoACcWZxwUADOLE44KABnFiccFIAzixMOCsCZxQkHBeDM4oSDAnBmccJBATizOOGgAJz9AOxVm0/aPYzjAAAAAElFTkSuQmCC"},3853:function(t,s,i){t.exports=i.p+"static/img/tsq.7abad79a.png"},9197:function(t,s,i){t.exports=i.p+"static/img/xdcs.30d9a1ec.png"},2289:function(t,s,i){t.exports=i.p+"static/img/zcfubtn.8a7ec723.png"},612:function(t,s,i){t.exports=i.p+"static/img/zgyl.e3aaaacf.png"},3217:function(t,s,i){t.exports=i.p+"static/img/zzdy.d9835ac2.png"}}]);