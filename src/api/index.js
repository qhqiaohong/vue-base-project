import request from "@/utils/request"

// 获取定位
export function getAddress(data) {
    return request({
        url: "/machine/all/hqdw",
        method: "post",
        data: data,
        header: {}
    })
}
