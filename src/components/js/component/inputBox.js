import inputBox from './inputBox.vue'

export default function (Vue) {
    const input = Vue.extend(inputBox)
    const $inputbox = new input()
    $inputbox.$mount()
    document.body.appendChild($inputbox.$el)
    Vue.prototype.$inputbox = (data) => {
        $inputbox.show = true
        if (typeof (data) == "object") {
            $inputbox.title = data.title || "提示"
            $inputbox.content = data.content || ""
        } else {
            $inputbox.title = "提示"
            $inputbox.content = data
        }
        return new Promise((res, rej) => {
            $inputbox.confirm = function () {
                var text = ""
                if ($inputbox.input == null || $inputbox.input.length == 0) {
                    text = null
                } else {
                    text = $inputbox.input
                }
                res(text)
                $inputbox.show = false
            }
            $inputbox.cansole = function () {
                if (data.showCansole) {
                    rej()
                }
                $inputbox.show = false
            }
        })
    }
}

