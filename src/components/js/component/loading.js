import Vue from 'vue'
import loading from './loading.vue'  // loading加载组件
// 在 vue 中注册组件
let $app = Vue.extend(loading)
let $loading = new $app().$mount(document.createElement('div'))
// 创建组件实例并挂载 vue 实例上
document.body.appendChild($loading.$el)

export default {
    install(vm) {
        vm.prototype.$loading = {
            show: (e) => {
                if (e) {
                    $loading.text = e
                }
                $loading.show = true
            },
            hide: () => {
                $loading.show = false
            }
        }
    }
}