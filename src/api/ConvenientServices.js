import request from "@/utils/request"

// 自助打印获取小程序二维码
export function smallProgramCode(data) {
    return request({
        url: '/machine/smzcPrint/smallProgramCode',
        method: 'post',
        header: {
            "responseRype": "arraybuffer"
        },
        data: data
    })
}
// 自助打印获取文件
export function filePrintDownload(data) {
    return request({
        url: '/machine/smzcPrint/filePrintDownload',
        method: 'post',
        header: {
            "content-type": "multipart/form-data"
        },
        data: data
    })
}
// 自助打印更新文件状态
export function filePrintUpdate(data) {
    return request({
        url: '/machine/smzcPrint/filePrintUpdate',
        method: 'post',
        header: {
            "content-type": "multipart/form-data"
        },
        data: data
    })
}