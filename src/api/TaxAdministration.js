import request from "@/utils/request"

// 自然人信息查询
export function zrrInfo(data) {
    return request({
        url: '/tax/personlogin/naturalPersonLoginNew',
        method: 'post',
        data: data
    })
}
// 名下企业查询
export function qyInfo(query) {
    return request({
        url: '/tax/informationSelect/personalRealNameEnterprisequery',
        method: 'post',
        data: query
        
    })
}
//查询欠税
export function qsxxcx(data) {
    return request({
        url: '/tax/informationSelect/qsxxcx',
        method: 'post',
        data
    })
}
//银行端缴款凭证
export function qsyhdjkpz(data) {
    return request({
        url: '/tax/informationSelect/qsyhdjkpz',
        method: 'post',
        data
    })
}
//缴款二维码
export function ewmjk(data) {
    return request({
        url: '/tax/autoPurchaseTax/ewmjk',
        method: 'post',
        data
    })
}
// 二维码交款结果
export function codePayRes(data) {
    return request({
        url: '/tax/autoPurchaseTax/paymentResult',
        method: 'post',
        data: data,
    })
}
// 办理地点
export function address(id) {
    return request({
        url: '/machine/smzcstationing/getBdid/' + id,
        method: 'get'
    })
}
// 契税缴款凭证表格式
export function qsFormInformation(query) {
    return request({
        url: '/tax/business/qsFormInformation',
        method: 'post',
        data: query
    })
}
// 盖章接口
export function seal(query) {
    return request({
        url: '/tax/img/wszm',
        method: 'get',
        params: query
    })
}
// 获取凭证pdf
export function qsPdf(data) {
    return request({
        url: '/tax/pdf/qsPdf',
        method: 'post',
        data: data
    })
}
// 设立登记信息查询（企业）接口
export function sldj(query) {
    return request({
        url: '/tax/informationSelect/enterpriseInformationQuery',
        method: 'post',
        data: query
    })
}
// 发票查询
export function fpcx(data) {
    return request({
        url: '/tax/autoPurchaseTax/jdcfpcc',
        method: 'post',
        data: data
    })
}
// 获取申报信息
export function getSb(query) {
    return request({
        url: '/tax/autoPurchaseTax/checkAndReturn',
        method: 'post',
        data: query
    })
}
// 保存申报
export function saveSb(query) {
    return request({
        url: '/tax/autoPurchaseTax/clgzsSaveSB',
        method: 'post',
        data: query
    })
}
// 车购税日志上传
export function savesblog(data) {
    return request({
        url: '/tax/taxcgssblog/insert',
        method: 'post',
        data: data
    })
}
// 欠税信息查询
export function qianshui(data) {
    return request({
        url: '/tax/autoPurchaseTax/clgzsApplyingTaxArrearsInformationSelect',
        method: 'post',
        data: data
    })
}
// 更新车购税日志
export function updatesblog(data) {
    return request({
        url: '/tax/taxcgssblog/updateById',
        method: 'post',
        data: data
    })
}
// 车购税缴款凭证表格式
export function carFormInformation(query) {
    return request({
        url: '/tax/business/carFormInformation',
        method: 'post',
        data: query
    })
}
// 车购税电子凭证
export function proof(query) {
    return request({
        url: '/tax/autoPurchaseTax/cxClgzswszmxxByClsbdhNew',
        method: 'post',
        data: query
    })
}
// 车购税电子凭证pdf
export function taxBuyPdf(query) {
    return request({
        url: '/tax/pdf/taxBuyPdf',
        method: 'post',
        data: query
    })
}
// 查询企业/个人登记信息
export function naturalPersonLoginNew(query) {
    return request({
        url: '/tax/personlogin/naturalPersonLoginNew',
        method: 'post',
        data: query
    })
}
// 年度评价结果查询
export function ndpjjg(data) {
    return request({
        url: '/tax/informationSelect/annualEvaluationResults',
        method: 'post',
        data
    })
}
// 资格认定信息查询
export function qualificationDeterminationInformation(data) {
    return request({
        url: '/tax/informationSelect/qualificationDeterminationInformation',
        method: 'post',
        data
    })
}
// 当前信用等级查询
export function xydj(query) {
    return request({
        url: '/tax/informationSelect/currentCreditRating',
        method: 'post',
        data: query
    })
}
// 税（费）种信息查询
export function taxFirmlyBelieveService(data) {
    return request({
        url: '/tax/informationSelect/taxFirmlyBelieveService',
        method: 'post',
        data
    })
}
// 企业申报情况查询
export function declarationDetailsSelect(data) {
    return request({
        url: '/tax/informationSelect/declarationDetailsSelect',
        method: 'post',
        data
    })
}
// 企业申报情况详情查询
export function enquiryDeclarationRecords(data) {
    return request({
        url: '/tax/informationSelect/enquiryDeclarationRecords',
        method: 'post',
        data
    })
}
// 违法违章查询
export function illegalInformationSelect(data) {
    return request({
        url: '/tax/informationSelect/illegalInformationSelect',
        method: 'post',
        data
    })
}
// 查询企业完税证明打印文书式
export function businessws(data) {
    return request({
        url: '/tax/business/queryBusinessWss',
        method: 'post',
        data
    })
}
// 查询企业完税证明打印文书式pdf
export function wsPdf(data) {
    return request({
        url: '/tax/pdf/wsPdf',
        method: 'post',
        data
    })
}
// 企业社保费补打
export function budadutyPaidQuery(data) {
    return request({
        url: '/tax/business/issuedBusinessSbfWszm',
        method: 'post',
        data
    })
}
// 查询纳税人未清缴(欠税费)信息
export function inquire(data) {
    return request({
        url: '/tax/informationSelect/inquire',
        method: 'post',
        data
    })
}

// 查询二维码(个人所得税)
export function getErwm(data) {
    return request({
        url: '/tax/PersonalCertificate/getEwm4LoginEA',
        method: 'post',
        data
    })
}
// 二维码登陆结果查询(个人所得税)
export function getErwmResult(data) {
    return request({
        url: '/tax/PersonalCertificate/loginByEwmEA',
        method: 'post',
        data
    })
}
// 获取自然人业务数据
export function wszmApp(data) {
    return request({
        url: '/tax/PersonalCertificate/wszmApp',
        method: 'post',
        data
    })
}
// 
export function selectNsjlId(data) {
    return request({
        url: '/tax/PersonalCertificate/selectNsjlId',
        method: 'post',
        data
    })
}
// 
export function downloadTaxRecord(data) {
    return request({
        url: '/tax/PersonalCertificate/downloadTaxRecord',
        method: 'post',
        data
    })
}
// 税案通报列表查询
export function getTaxList(data) {
    return request({
        url: '/humanSociety/commonService/getTaxList',
        method: 'get',
        // data
    })
}
// 税案通报列表查询详情
export function getTaxATBNews(data) {
    return request({
        url: '/humanSociety/commonService/getTaxATBNews',
        method: 'post',
        data:data
    })
}
/* 公共服务 */
// 智能咨询--智能推荐
export function zntj(data) {
    return request({
        url: '/humanSociety/znzx/zntj',
        method: 'post',
        data: data
    })
}
// 智能咨询--常见问题
export function cjwt(data) {
    return request({
        url: '/humanSociety/znzx/cjwt',
        method: 'post',
        data: data
    })
}
// 智能咨询--专题指引
export function ztzy(data) {
    return request({
        url: '/humanSociety/znzx/ztzy',
        method: 'post',
        data: data
    })
}
// 智能咨询--更多
export function gdlb(data) {
    return request({
        url: '/humanSociety/znzx/gdlb',
        method: 'post',
        data: data
    })
}
// 智能咨询--更多详情
export function gdlbxq(data) {
    return request({
        url: '/humanSociety/znzx/gdlbxq',
        method: 'post',
        data: data
    })
}
// 智能咨询--查询
export function getQaTalkResult(data) {
    return request({
        url: '/humanSociety/znzx/getQaTalkResult',
        method: 'post',
        data: data
    })
}
// 智能咨询--答案
export function getAnswer(data) {
    return request({
        url: '/humanSociety/znzx/getAnswer',
        method: 'post',
        data: data
    })
}
// 智能咨询--依据详情
export function getFlyj(data) {
    return request({
        url: '/humanSociety/znzx/getFlyj',
        method: 'post',
        data: data
    })
}
// 办税日历--按月
export function getCalendarListForMonth(data) {
    return request({
        url: '/humanSociety/bsrl/getCalendarListForMonth',
        method: 'post',
        data: data
    })
}
// 办税日历--按天
export function getCalendarListForDay(data) {
    return request({
        url: '/humanSociety/bsrl/getCalendarListForDay',
        method: 'post',
        data: data
    })
}
// 办税指南--获取目录
export function getMl(data) {
    return request({
        url: '/humanSociety/bszn/getMl',
        method: 'post',
        data: data
    })
}
// 办税指南--全局搜索
export function AllSearch(data) {
    return request({
        url: '/humanSociety/bszn/AllSearch',
        method: 'post',
        data: data
    })
}
// 办税指南--事项列表
export function getBt(data) {
    return request({
        url: '/humanSociety/bszn/getBt',
        method: 'post',
        data: data
    })
}
// 办税指南--事项搜索
export function searchTitle(data) {
    return request({
        url: '/humanSociety/bszn/searchTitle',
        method: 'post',
        data: data
    })
}
// 办税指南--详情
export function xq(data) {
    return request({
        url: '/humanSociety/bszn/xq',
        method: 'post',
        data: data
    })
}
// 办税指南--办理依据
export function yfyj(data) {
    return request({
        url: '/humanSociety/bszn/yfyj',
        method: 'post',
        data: data
    })
}
//纳税信用等级a级纳税人
export function isA(data) {
    return request({
        url: '/tax/selectA/isA',
        method: 'post',
        data: data
    })
}
//会填表列表
export function getHtbList(data) {
    return request({
        url: '/bigScreen/SmzcHtb/getHtbList',
        method: 'post',
        data: data
    })
}
//会填表模糊查询
export function getHtbKeyWord(data) {
    return request({
        url: '/bigScreen/SmzcHtb/getHtbKeyWord',
        method: 'post',
        data: data
    })
}
//会填表详情
export function gethtb(data) {
    return request({
        url: '/bigScreen/SmzcHtb/gethtb',
        method: 'get',
        params: data
    })
}
// 企业所得税申报

export function queryByFirstTitle(data) {
    return request({
        url: '/humanSociety/commonService/queryByFirstTitle',
        method: 'get',
        data: data
    })
}

export function querySecondFromFirstTitle(data) {
    return request({
        url: `/humanSociety/commonService/querySecondFromFirstTitle?firstTitle=`+data.firstTitle,
        method: 'get',
        // data: data
    })
}
export function queryItemList(data) {
    return request({
        url: `/humanSociety/commonService/queryItemList?firstTitle=`+data.firstTitle+`&secondTitle=`+data.secondTitle,
        method: 'get',
        // data: data
    })
}
// 减免税政策

export function queryDataByGroup(data) {
    return request({
        url: `/humanSociety/commonService/queryDataByGroup`,
        method: 'get',
        // data: data
    })
}
export function query(data) {
    return request({
        url: `/humanSociety/commonService/query?salaryType=`+data.salaryType+`&policyName=`+data.policyName,
        method: 'get',
        // data: data
    })
}
// 1.税费优惠政策指引 六个图片链接
export function taxYhPolicySix(data) {
    return request({
        url: `/humanSociety/commonService/taxYhPolicySix`,
        method: 'post',
        // data: data
    })
}
// 2.税费优惠政策指引

export function taxYhPolicy(data) {

    return request({
        url: `/humanSociety/commonService/taxYhPolicy`,
        method: 'post',
        data: data
    })
}
// 3.税费优惠政策指引 右侧的表格页面

export function taxYhPolicyTable(data) {

    return request({
        url: `/humanSociety/commonService/taxYhPolicyTable`,
        method: 'post',
        data: data
    })
}


// 4.税费优惠政策指引   小微企业、个体工商户税费优惠政策指引 右侧表格



export function xwqyTable(data) {

    return request({
        url: `/humanSociety/commonService/xwqyTable`,
        method: 'post',
        data: data
    })
}
// 税收政策图解
export function taxPolicyImg(data) {
    return request({
        url: `/humanSociety/commonService/taxPolicyImg`,
        method: 'post',
        // data: data
    })
}
// 税收政策图解详情

export function taxPolicyImgInfo(data) {

    return request({
        url: `/humanSociety/commonService/taxPolicyImgInfo`,
        method: 'post',
        data: data
    })
}
// 1.税收政策库--->初始化列表

export function allList(data) {

    return request({
        url: `/humanSociety/commonService/allList`,
        method: 'post',
        // data: data
    })
}
// 税收政策库--->税种名称
export function Aszcxlist(data) {

    return request({
        url: `/humanSociety/commonService/Aszcxlist`,
        method: 'post',
        // data: data
    })
}
// 税收政策库--->按税种查询的列表
export function TaxPolicyKu(data) {

    return request({
        url: `/humanSociety/commonService/TaxPolicyKu`,
        method: 'post',
        data: data
    })
}
// 税收政策库--->按年份
export function selectYear(data) {

    return request({
        url: `/humanSociety/commonService/selectYear`,
        method: 'post',
        data: data
    })
}
// 税收政策库--->规章
export function selectGz(data) {

    return request({
        url: `/humanSociety/commonService/selectGz`,
        method: 'post',
        // data: data
    })
}
// 6税收政策库--->规范性文件
export function selectGfxwj(data) {

    return request({
        url: `/humanSociety/commonService/selectGfxwj`,
        method: 'post',
        // data: data
    })
}
// 7. 税收政策库--->政策解读
export function selectZcjd(data) {

    return request({
        url: `/humanSociety/commonService/selectZcjd`,
        method: 'post',
        // data: data
    })
}
// 1.税收政策库--->详情列表


export function tax(data) {

    return request({
        url: `/humanSociety/commonService/tax`,
        method: 'post',
        data: data
    })
}

export function pdf(data) {

    return request({
        url: `/humanSociety/commonService/pdf`,
        method: 'post',
        data: data
    })
}
// 涉税专业服务机构公告栏
export function getggllist(data) {

    return request({
        url: `/humanSociety/commonService/taxBulletin?title=`+data.title+`&unitname=`+data.unitname+`&ywtj=`+data.ywtj+`&types=`+data.types+`&pageNum=`+data.pageNow+`&pageSize=`+data.pageSize,
        method: 'get',
        // data: data
    })
}
// 涉税专业服务机构公告栏详情
export function getXq(data) {

    return request({
        url: `/humanSociety/commonService/getXq`,
        method: 'post',
        data: data
    })
}
// 重大税收违法失信主体查询页面
export function zdssSelect(data) {

    return request({
        url: `/humanSociety/commonService/zdssSelect`,
        method: 'post',
        data: data
    })
}


// 2.重大税收违法失信主体(地区的编码) 


export function areaCode() {

    return request({
        url: `/humanSociety/commonService/areaCode`,
        method: 'post',
        // data: data
    })
}
// 3.重大税收违法失信主体--->地区查询 


export function zdsswfsxzt(data) {

    return request({
        url: `/humanSociety/commonService/zdsswfsxzt`,
        method: 'post',
        data: data
    })
}
// 4.重大税收违法失信主体(主体违法性质查询的编码) 


export function ztwfxzCode() {

    return request({
        url: `/humanSociety/commonService/ztwfxzCode`,
        method: 'post',
        // data: data
    })
}
// 重大税收违法失信主体--->主体违法性质查询


export function ztwfxzcx(data) {

    return request({
        url: `/humanSociety/commonService/ztwfxzcx`,
        method: 'post',
        data: data
    })
}
// 8.重大税收违法失信主体(咨询电话)



export function zdsswfsxztTel() {

    return request({
        url: `/humanSociety/commonService/zdsswfsxztTel`,
        method: 'post',
        // data: data
    })
}
// 6.重大税收违法失信主体(月份的编码) field_2410

export function ztwfxzYearCode() {

    return request({
        url: `/humanSociety/commonService/ztwfxzYearCode`,
        method: 'post',
        // data: data
    })
}
// .重大税收违法失信主体--->年份查询  

export function zdsssxztYear(data) {

    return request({
        url: `/humanSociety/commonService/zdsssxztYear`,
        method: 'post',
        data: data
    })
}