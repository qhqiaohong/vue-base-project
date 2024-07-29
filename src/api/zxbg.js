import request from "@/utils/request"

// 本地服务
export function debug(data) {
    return request({
        url: 'http://127.0.0.1:18801/Service?' + Math.round(Math.random() * 1000),
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/x-www-form-urlencoded;charset:utf-8;"
        }
    })
}
//企业服务验证接口
export function qyfwyz(data) {
    console.log(data);
    return request({
        url: 'https://www.shaanxicredit.com/sxzxmh-api/auth/openInterfaceLogin',
        method: 'post',
        data: data,
        header: {
           
        }
    })
}
//企业服务征信预览接口
export function qyfwzxyl(data) {
    console.log(data);
    return request({
        url: 'https://www.shaanxicredit.com/sxzxmh-api/portal/company/product/preview?operateType='+data.operateType+'&productId='+data.productId+'&companyCode='+data.companyCode+'&companyName='+data.companyName,
        method: 'get',
        // data: data,
        header: {
            "Authorization":data.token
        }
    })
}

// 登录名下企业查询
export function qycx(query) {
    return request({
        url: '/tax/informationSelect/personalRealNameEnterprisequery',
        method: 'post',
        data: query
    })
}
// 自然人登录（新）
export function newzrrlogin(data) {
    return request({
        url: '/tax/personlogin/naturalPersonLoginNew',
        method: 'post',
        data: data
    })
}
