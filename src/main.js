import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

// 导入阿里巴巴矢量图标库
import "@/alibabaFont/font.css"
// 引入自定义js组件
import jsComponent from "@/components/js/index"
Vue.use(jsComponent)
// 引入自定义dom组件
import domComponent from "@/components/dom/index"
Vue.use(domComponent)
// 引入全局字体
import "@/fontFamily/index.css"
// 引入全局业务办理框样式
import "@/styles/HVversion/VocationalWork/index.less"
import { companyList } from './utils/data'
Vue.prototype.$companyList = companyList;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
