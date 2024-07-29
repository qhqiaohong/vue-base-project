import tips from './tip.vue'

export default function (Vue) {
    const tip = Vue.extend(tips)
    const $tip = new tip()
    $tip.$mount()
    document.body.appendChild($tip.$el)
    Vue.prototype.$tip = (data,e) => {
        $tip.title = data
        $tip.type = e || "success"
        $tip.showFun ()
    }
}

