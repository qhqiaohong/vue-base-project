import request from "@/utils/request"


/*-----刷身份证-----*/
// 旧机器读取身份证
export function readIdCard(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#ReadIDCard/CVR100',
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/json"
        }
    })
}
// 获取身份证信息
export function getIdCard(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#GetIDCardInfo/CVR100',
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/json"
        }
    })
}
// 关闭设备
export function closeIdCard(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#CloseDevice/CVR100',
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/json"
        }
    })
}

// 新机器读取身份证
export function newReadCard(data) {
    return request({
        url: 'http://localhost:8889/sstruntime/device/IDCard/read',
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/json"
        }
    })
}


/*-----刷脸-----*/
// 人脸识别旧
// 开启摄像头
export function StartCamera(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#FaceDetectServiceId_StartCamera',
        method: 'post',
        data: data,
        header: {
            "Content-Type": "application/json"
        }
    })
}
// 检测进程
export function CheckProIsRun(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#FaceDetectServiceId_CheckProIsRun',
        method: 'post',
        data
    })
}
// 开启识别人像功能
export function ShowView(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#FaceDetectServiceId_ShowView',
        method: 'post',
        data
    })
}
// 获取结果
export function GetResult(data) {
    return request({
        url: `http://127.0.0.1:5005/Device#FaceDetectServiceId_GetResult`,
        method: 'post',
        data
    })
}
// 关闭设备
export function CloseDeviceFace(data) {
    return request({
        url: 'http://127.0.0.1:5005/Device#FaceDetectServiceId_CloseDevice',
        method: 'post',
        data
    })
}
/*-----手机登录-----*/
// 获取滑块验证码
export function hqtp() {
    return request({
        url: '/humanSociety/human/hqtp',
        method: 'post',
    })
}
// 发送滑块验证码
export function getTxyz(data) {
    return request({
        url: '/humanSociety/human/getTxyz',
        method: 'post',
        data: data
    })
}
// 发送短信验证码
export function smsCode(query) {
    return request({
        url: '/humanSociety/human/smsCode',
        method: 'get',
        params: query
    })
}
// 获取session
export function getTemCode(query) {
    return request({
        url: '/humanSociety/human/getTemCode',
        method: 'get',
        params: query
    })
}
// 登录
export function zwlogin(query) {
    return request({
        url: '/humanSociety/human/zwlogin',
        method: 'get',
        params: query
    })
}

// http://rszwfw.qinyunjiuye.cn:17007 登录
export function rszwfw(data) {
    return request({
        url: '/humanSociety/human/rszwfw',
        method: 'post',
        data: data
    })
}
export function getQhjqp(data) {
    return request({
      url: 'http://192.168.0.24:8080/machine/Qhj/qhjqp?sjh=' + data.sjh + '&sfzjhm=' + data.sfzjhm + '&xm=' + data.xm + '&ywId=' + data.ywId + '&qhjbh='+data.qhjbh,
      // url: '/machine/newQhj/Qhj/qhjqp?sjh=' + data.sjh + '&sfzjhm=' + data.sfzjhm + '&xm=' + data.xm + '&ywId=' + data.ywId + '&qhjbh='+data.qhjbh,//内公网同步
      method: 'post',
      data: data
    })
  }
// 图形验证码
export function getCaptchaCode(data) {
    return request({
        url: '/open/api/ytj/getCaptchaCode',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
// 发送验证码
export function sendSms(data) {
    return request({
        url: '/open/api/ytj/sendSms',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
// 验证码登录（POST）
export function loginByCode(data) {
    return request({
        url: '/open/api/ytj/loginByCode',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
// 获取信贷超市列表
export function findfinancePage(data) {
    return request({
        url: '/open/api/ytj/findfinancePage',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
//  产品详情（POST）
export function findfinanceDetailByCode(data) {
    return request({
        url: '/open/api/ytj/findfinanceDetailByCode',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
//  成功案例（POST）
export function successCase(data) {
    return request({
        url: '/open/api/ytj/successCase',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
export function findFinanceUseTo(data) {
    return request({
        url: '/open/api/ytj/findFinanceUseTo',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
export function publishFinance(data) {
    return request({
        url: '/open/api/ytj/publishFinance',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}
export function findMyDemand(data) {
    return request({
        url: '/open/api/ytj/findMyDemand',
        method: 'post',
        data: data,
        header: {"Content-Type": "application/x-www-form-urlencoded;" },
    })
}



