import messageBox from './messageBox.vue'

export default function (Vue) {
    const msgbox = Vue.extend(messageBox)
    const $msgbox = new msgbox()
    $msgbox.$mount()
    document.body.appendChild($msgbox.$el)
    Vue.prototype.$msgbox = (data) => {
        $msgbox.show = true
        if (typeof (data) == "object") {
            $msgbox.title = data.title || "提示"
            $msgbox.content = data.content || ""
            $msgbox.showCansole = data.showCansole || false
            $msgbox.type = data.type || "success"
        } else {
            $msgbox.title = "提示"
            $msgbox.content = data
            $msgbox.type = "success"
        }
        return new Promise((res, rej) => {
            $msgbox.confirm = function () {
                res()
                $msgbox.show = false
            }
            $msgbox.cansole = function () {
                if (data.showCansole) {
                    rej()
                }
                $msgbox.show = false
            }
        })
    }
}

