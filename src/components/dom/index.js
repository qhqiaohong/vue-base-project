// 顶部信息
import topInfo from './component/topInfo.vue'
// 中间信息
import centerInfo from './component/centerInfo.vue'
// 底部信息
import bottomInfo from './component/bottomInfo.vue'
// 进度条
import smProgress from './component/smProgress.vue'
// 日期选择器
import datePicker from './component/datePicker.vue'
// 业务容器
import ywBox from './component/ywBox.vue'
// 成功通用界面
import success from './component/success.vue'
// 成功通用界面1
import success1 from './component/success1.vue'
// 表格
import yjTable from './component/yjTable.vue'
// 表格列
import yjTableColumn from './component/yjTableColumn.vue'
// 下拉选择
import yjSelect from './component/yjSelect.vue'
const components = [
    topInfo,
    centerInfo,
    bottomInfo,
    smProgress,
    datePicker,
    ywBox,
    success,
    success1,
    yjTable,
    yjTableColumn,
    yjSelect,
]
const install = (Vue) => {
    if (!Vue) {
        window.Vue = Vue = _Vue
    }
    components.forEach((component, i) => {
        Vue.component(component.name, component);
    })
}
export default install
