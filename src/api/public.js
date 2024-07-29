import request from "@/utils/request"
// 示例
export function getxxx(data) {
    return request({
        url: "/xxx/xxx/getxxx",
        method: "post",
        data: data,
        header: {}
        
    })
}
// 职工养老待遇支付明细查询
export function zgyldyzfmxcx(data) {
    return request({
        url: "/humanSociety/staffpension/zgyldyzfmxcx",
        method: "post",
        data: data,
        header: {}
    })
}
