import loading from '@/components/js/component/loading'
import messageBox from '@/components/js/component/messageBox'
import tip from '@/components/js/component/tip'
import inputBox from '@/components/js/component/inputBox'

const components = [
    loading,
    messageBox,
    tip,
    inputBox
]


const install = (Vue) => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    components.forEach((item, i) => {
        Vue.use(item);
    })
}
export default install
