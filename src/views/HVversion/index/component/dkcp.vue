<template>
  <div class="box">
    <div class="topBox">
      <!-- <div class="title" v-if="btnshow == -1">银行产品</div> -->
      <div class="titles">
        <div class="t1">
          <div class="ljt"></div>
          <div class="nr">{{ "信贷超市" }}</div>
          <div class="rjt"></div>
        </div>
        <div class="t2">
          <div class="ljt"></div>
          <div class="nr">{{ "产品列表" }}</div>
          <div class="rjt"></div>
        </div>
      </div>
      <div class="xz">
        排序方式：
        <el-select v-model="px" @change="changePx(px)" clearable placeholder="排序">
          <el-option
            v-for="item in pxlist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        &nbsp;&nbsp;&nbsp; 融资金额：
        <el-select v-model="rz" @change="changeRz(rz)" clearable placeholder="融资金额">
          <el-option
            v-for="item in rzje"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        &nbsp;&nbsp;&nbsp;融资期限：
        <el-select
          v-model="rztime"
          @change="changerztime(rztime)"
          clearable
          placeholder="融资期限"
        >
          <el-option
            v-for="item in rztimelist"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="HotBusiness_TaxServices_img" ref="hd">

        <div
          class="TaxServicesImgs"
          v-for="(item, index) in hotxlist"
          :key="index"
          style="margin-bottom: 40px"
          @click="hotnexs(item)"
        >
          <div class="TaxServicesImgsName">
            <span
              ><img
                style="width: 35px; height: 35px"
                :src="item.agencyIcon"
                alt="" /></span
            ><span
              v-if="item.productName.length <= 11"
              style="position: absolute; margin-left: 20px"
              >{{ item.productName }}</span
            >

            <span style="position: absolute; margin-left: 20px"
              ><marquee v-if="item.productName.length > 11"
                >{{ item.productName }}
              </marquee></span
            >
          </div>
          <div class="TaxServicesImgsbox">
            <span style="width: 150px">
              <div
                style="
                 =
                  font-size: 16px;
                  font-family: PingFang SC, PingFang SC-Regular;
                  font-weight: 400;
                  
                  color: #f35656;
                "
              >
                {{ item.yearInterestLow }}%~{{ item.yearInterestHigh }}%
              </div>
              <div
                style="
                  font-size: 12px;
                  font-family: PingFang SC, PingFang SC-Regular;
                  font-weight: 400;
                  color: #666666;
                "
              >
                年息范围
              </div> </span
            ><span
              ><div>{{ item.loanDurationShort }}~{{ item.loanDurationLong }}</div>
              <div
                style="
                  font-size: 12px;
                  font-family: PingFang SC, PingFang SC-Regular;
                  font-weight: 400;
                  color: #666666;
                "
              >
                期限范围(月)
              </div></span
            ><span
              ><div>{{ item.loanAmountLow }}~{{ item.loanAmountHigh }}</div>
              <div
                style="
                  font-size: 12px;
                  font-family: PingFang SC, PingFang SC-Regular;
                  font-weight: 400;
                  color: #666666;
                "
              >
                额度范围(万)
              </div></span
            >
          </div>
        </div>
        <!-- 分页 -->
        <!-- <div
          class="TaxServicesSign"
          style="position: absolute; left: 50%"
          v-if="allPage > 1"
        >
          <button
            class="btn1 btnActive"
            :style="nowPage == 0 ? '' : 'background:#DCDCDC'"
            @click="left"
          >
            &lt;
          </button>
          <p class="TaxServicesSignInfo">
            <span
              v-for="(item, index) in allPage"
              :key="index"
              :style="nowPage == index ? 'background:#cdcdcd' : ''"
            ></span>
          </p>
          <button
            class="btnActive"
            :style="allPage == 1 || allPage == nowPage + 1 ? '' : 'background:#cdcdcd'"
            @click="right"
          >
            &gt;
          </button>
        </div> -->
      </div>
    </div>
    <!-- <div class="bottomBox">
      <div class="title">担保方式</div>

      <div class="listbox">
        <div class="listboxs">
          <div
            class="btnbox"
            v-for="(item, index) in btnlist"
            @click="listnext(item,index)"
            :key=index
          >
            <img :src="btnshow == index ? img2 : img1" alt="" />
            <div class="btnname">{{ item }}</div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import md5 from "js-md5";
// import yhlist from "@/assets/yhdata.json";
import { findfinancePage } from "@/api/login";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      //热门列表
      hotxs: [],
      //显示的列表数组
      hotxlist: [],
      btnlist: [],
      img1: require("@/assets/menu/xy1.png"),
      img2: require("@/assets/menu/xy2.png"),
      // 切换列表图标表示
      btnshow: -1,
      allPage: 0, //全部页码
      nowPage: 0, //当前页码
      img: require("@/assets/menu/backbtn.png"),
      pxlist: [
        {
          value: "0",
          label: "不限",
        },
        {
          value: "1",
          label: "利率由低到高",
        },
        {
          value: "2",
          label: "融资金额由高到低",
        },
        {
          value: "3",
          label: "融资期限由长到短",
        },
      ],
      px: "",
      rzje: [
        {
          value: "0",
          label: "不限",
        },
        {
          value: "1",
          label: "30万以下",
        },
        {
          value: "2",
          label: "30-50万",
        },
        {
          value: "3",
          label: "50-100万",
        },
        {
          value: "4",
          label: "100-300万",
        },
        {
          value: "5",
          label: "300-500万",
        },
        {
          value: "6",
          label: "500万以上",
        },
      ],
      rz: "",
      rztimelist: [
        {
          value: "0",
          label: "不限",
        },
        {
          value: "1",
          label: "12个月以下",
        },
        {
          value: "2",
          label: "12-36个月",
        },
        {
          value: "3",
          label: "36-60个月",
        },
        {
          value: "4",
          label: "60个月以上",
        },
      ],
      rztime: "",
    };
  },

  mounted() {
    this.getfl();
    this.getlist()
    this.fy();
  },

  created() {},

  methods: {
    // 排序
    changePx(e) {
      if (e == 0) {
        this.getlist();
      } else if (e == 1) {
        for (let i = 0; i < this.hotxlist.length; i++) {
          let m = i;
          for (let j = i + 1; j < this.hotxlist.length; j++) {
            //如果第j个元素比第m个元素小，将j赋值给m
            if (this.hotxlist[j].yearInterestLow < this.hotxlist[m].yearInterestLow) {
              m = j;
            }
          }
          if (i != m) {
            let t = this.hotxlist[i];
            this.hotxlist[i] = this.hotxlist[m];
            this.hotxlist[m] = t;
          }
        }
      } else if (e == 2) {
        for (let i = 0; i < this.hotxlist.length; i++) {
          let m = i;
          for (let j = i + 1; j < this.hotxlist.length; j++) {
            //如果第j个元素比第m个元素小，将j赋值给m
            if (this.hotxlist[j].loanAmountHigh > this.hotxlist[m].loanAmountHigh) {
              m = j;
            }
          }
          if (i != m) {
            let t = this.hotxlist[i];
            this.hotxlist[i] = this.hotxlist[m];
            this.hotxlist[m] = t;
          }
        }
      } else if (e == 3) {
        for (let i = 0; i < this.hotxlist.length; i++) {
          let m = i;
          for (let j = i + 1; j < this.hotxlist.length; j++) {
            //如果第j个元素比第m个元素小，将j赋值给m
            if (this.hotxlist[j].loanDurationLong > this.hotxlist[m].loanDurationLong) {
              m = j;
            }
          }
          if (i != m) {
            let t = this.hotxlist[i];
            this.hotxlist[i] = this.hotxlist[m];
            this.hotxlist[m] = t;
          }
        }
      }
    },
    changeRz(e) {
      this.getlist();
      if (e == 0) {
      } else if (e == 1) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (this.hotxlist[i].loanAmountLow < 30) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 2) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanAmountLow >= 30 &&
            this.hotxlist[i].loanAmountLow < 50
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 3) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanAmountLow >= 50 &&
            this.hotxlist[i].loanAmountLow < 100
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 4) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanAmountLow >= 100 &&
            this.hotxlist[i].loanAmountLow < 300
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 5) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanAmountLow >= 300 &&
            this.hotxlist[i].loanAmountLow < 500
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 6) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (this.hotxlist[i].loanAmountLow >= 500) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      }
    },
    changerztime(e) {
      this.getlist();
      if (e == 0) {
      } else if (e == 1) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (this.hotxlist[i].loanDurationShort < 12) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 2) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanDurationShort >= 12 &&
            this.hotxlist[i].loanDurationShort < 36
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 3) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (
            this.hotxlist[i].loanDurationShort >= 36 &&
            this.hotxlist[i].loanDurationShort < 60
          ) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      } else if (e == 4) {
        let a = [];
        for (let i = 0; i < this.hotxlist.length; i++) {
          if (this.hotxlist[i].loanDurationShort >= 60) {
            a.push(this.hotxlist[i]);
          }
        }
        this.hotxlist = a;
      }
    },
    getlist() {
      this.$loading.show("正在查询...");
     // let a = JSON.parse(sessionStorage.getItem("inch"));
     // alert(a)
      let times = new Date().getTime();
      let from = {
        // appId: "YtjTest819",
        // requestTime: times,
        // sign: md5(
        //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
        // ),
          appId: "Ytqx873Hgd",
        requestTime: times,
        sign: md5(
          `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
        ),
      };
      from.amountFrom = "";
      from.amountTo = "";
      from.loanDurationFrom = "";
      from.loanDurationTo = "";
      from.pageNum = "1";
      from.pageSize = "99999";
      from.keyword = "";
      //from.ticket = a.ticket;

      findfinancePage(from).then((res) => {
        this.$loading.hide();
         this.hotxlist=[{
           agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
           productName: "阳光e抵贷",
           yearInterestLow:3.45,
           yearInterestHigh:4.5,
           loanDurationShort:1,
           loanDurationLong:36,
           loanAmountLow:0.1,
           loanAmountHigh:1000,
           payDayLow:20,
           payDayHigh:60,
           productDesc:'阳光e抵贷是针对以普通住宅为抵押物的一款融资产品',
           productFeature:'线下抵押，线上审批，快速便捷',
           productLabel:'适用于符合国家产业政策和光大银行信贷政策，能够提供光大银行认可的合格抵押物，有流动资金贷款需求的优质小微企业',
           applyCondition:'在光大银行开立对公结算账户、企业正常纳税、能够提供足值、有效的房产作为抵押物、企业及其法定代表人信用良好，通过中国人民银行企业征信系统查询无不良贷款记录、企业须满足打分卡评分要求',
           materialNeeded:'需与客户经理联系，提供相应申请材料',
           additionalExplanation:''
         },
           {
             agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
             productName: "网贷易/阳光e微贷",
             yearInterestLow:3.45,
             yearInterestHigh:4.5,
             loanDurationShort:1,
             loanDurationLong:12,
             loanAmountLow:0.1,
             loanAmountHigh:200,
             payDayLow:20,
             payDayHigh:60,
             productDesc:'阳光e微贷是针对已在光大银行开户的优质小微客户推出的一款线上化融资产品',
             productFeature:'灵活方便、成本可控，手续简单、省时高效，随借随还循环使用',
             productLabel:'适用于已在光大银行开立结算账户，历史结算交易正常，资信状况良好，符合光大银行授信政策要求，有补充短期流动资金需求的优质小微企业',
             applyCondition:'能企业法定代表人其他企业在光大银行无授信额度、企业/企业法定代表人无重大工商处罚、司法涉诉案件、企业/企业法定代表人人民银行征信无不良信用记录',
             materialNeeded:'需与客户经理联系，提供相应申请材料',
             additionalExplanation:''
           },
           {
             agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
             productName: "专精特新企业贷",
             yearInterestLow:3.45,
             yearInterestHigh:4.5,
             loanDurationShort:1,
             loanDurationLong:12,
             loanAmountLow:0.1,
             loanAmountHigh:1000,
             payDayLow:20,
             payDayHigh:60,
             productDesc:'专精特新企业贷是主要基于国家级"专精特新"企业名单，结合”专精特新“企业申报数据及其它外部数据，自动审批、线上提款、随借随还，' +
                 '为国家级”专精特新“企业提供用于日常生产经营周转的融资服务',
             productFeature:'无需抵质押物，额度高，全自动审批，自主线上提款、线上还款，按日计息、随借随还，后续可根据企业实际需求，提供一篮子综合金融服务',
             productLabel:'专精特新企业贷',
             applyCondition:'适用客户：国家级”专精特新“企业',
             materialNeeded:'需与客户经理联系，提供相应申请材料',
             additionalExplanation:'客户可通过企业网银/普惠金融云/中国光大银行普惠金融微信公众号发起在线授信申请'
           },
           {
             agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
             productName: "抵押融易贷",
             yearInterestLow:3.45,
             yearInterestHigh:4.5,
             loanDurationShort:1,
             loanDurationLong:36,
             loanAmountLow:0.1,
             loanAmountHigh:3000,
             payDayLow:30,
             payDayHigh:90,
             productDesc:'抵押融易贷业务是针对以不动产作抵押物的一款融资产品',
             productFeature:'抵押率高，授信期限长，流程简便',
             productLabel:'该业务适用于能够提供不动产作抵押担保的小微企业客户',
             applyCondition:'能够提供光大银行认可的不动产作抵押；企业成立一年以上且满足光大银行信用评级要求',
             materialNeeded:'需与客户经理联系，提供相应申请材料',
             additionalExplanation:''
           },
           {
             agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
             productName: "节能融易贷",
             yearInterestLow:3.45,
             yearInterestHigh:4.5,
             loanDurationShort:1,
             loanDurationLong:36,
             loanAmountLow:0.1,
             loanAmountHigh:1000,
             payDayLow:20,
             payDayHigh:60,
             productDesc:'节能融易贷是针对节能服务企业推出的以未来节能收益作为主要还款来源的一款融资产品',
             productFeature:'贷款用途特定，还款来源特定，贷款期限较长，贷款封闭运行',
             productLabel:'该业务适用于在国家发改委、财政部备案，或在国家工信部推荐的企业服务公司名单内的小微企业客户',
             applyCondition:'节能服务商在光大银行开立资金监管账户；确保该账户为节能项目收益分享的唯一回款账户，销售回款优先归还光大银行借款；' +
                 '企业正常运营一年以上并处于盈利状况',
             materialNeeded:'需与客户经理联系，提供相应申请材料',
             additionalExplanation:'根据项目实际投资需求或授信期限内未来预期收益确定，不得超过实际投资需求的70%或授信期限内未来预期收益的70%'
           },
           {
             agencyIcon:require('@/assets/dkcp/qsyh-xian.png'),
             productName: "阳光政采贷",
             yearInterestLow:3.45,
             yearInterestHigh:4.5,
             loanDurationShort:1,
             loanDurationLong:12,
             loanAmountLow:0.1,
             loanAmountHigh:1000,
             payDayLow:20,
             payDayHigh:60,
             productDesc:'阳光政采贷是光大银行与中征应收账款融资服务平台或各地政府采购网进行系统对接，根据政府采购中标通知书，' +
                 '以政府财政支付资金为主要还款来源，为政府采购网上中标的小微企业提供的”高效、便捷、在线“的贷款服务',
             productFeature:'实现全国多数省市的广覆盖、实现客户在线融资申请、在线签约、在线提款、在线还款的在线化操作。随借随还，' +
                 '按日结息，无抵押担保，最大可能满足客户用款需求',
             productLabel:'主要适用客户：在中征平台或政府采购网上中标的供应商',
             applyCondition:'中标供应商满足光大银行评级要求',
             materialNeeded:'需与客户经理联系，提供相应申请材料',
             additionalExplanation:'单笔提款期限与政府采购合同中约定的结算周期、付款方式匹配'
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "小额极速贷",
             yearInterestLow:3.25,
             yearInterestHigh:5.75,
             loanDurationShort:1,
             loanDurationLong:120,
             loanAmountLow:1,
             loanAmountHigh:1000,
             payDayLow:1,
             payDayHigh:5,
             productDesc:'"极速贷"是指中国邮政储蓄银行向具备良好线上数据信息、信用状况优质的个人客户提供的小额经营性贷款',
             productFeature:'支持手机银行、微信银行、微信H5线上申请，3分钟给出预审额度',
             productLabel:'经营半年以上，信用良好',
             applyCondition:'1、年龄在18周岁（含18周岁）至65周岁（含65周岁）之间；\n' +
                 ' 2、人民银行个人征信报告等级不为禁入类；\n' +
                 ' 3、借款人不属于失信被执行人；\n' +
                 ' 4、借款人未处于正在被法院执行状态；\n ' +
                 '5、从事正当的生产经营活动。',
             materialNeeded:'联系客户提供以下材料中的至少两项： （1）营业执照（若有必须提供）；(2)近三个月的进货或销货单据；(3)近三个月的订单、业务合同或协议；（4）近三个月的银行交易流水；',
             additionalExplanation:'极速贷一键申请\n' +
                 'https://precredit.psbc.com/cbcbp/fastloan/#/home?promoChannel=610103'
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "科创e贷",
             yearInterestLow:3.85,
             yearInterestHigh:5.95,
             loanDurationShort:1,
             loanDurationLong:24,
             loanAmountLow:1,
             loanAmountHigh:1000,
             payDayLow:1,
             payDayHigh:15,
             productDesc:'为了进一步支持科创企业发展，我行专门向科创小企业发放的，用于企业生产经营的人民币贷款业务',
             productFeature:'纯线上信用贷款，放款快额度高，最高可达1000万',
             productLabel:'科创企业、信用良好、专精特新、拥有核心专利',
             applyCondition:'1、拥有处于有效期内的相关资质认证\n' +
                     ' 2、产品或服务属于国家重点支持领域\n '+
                 '3、企业连续正常经营1年以上\n' +
                 ' 4、企业、实际控制人及其配偶（如有）信用状况良好',
             materialNeeded:'经营证照、法人身份证、公司章程、企业简介、近两年财务报表、近两年银行流水、投资机构入股证明材料（如有），' +
                 '知识产权证书（如有），资质认证（必须，如高新技术企业证书等），经营场地使用证明材料（如在园区的企业，需要提供企业与园区的租赁合同），' +
                 '政府部门的科技资金奖励证明、财政资金补助资料（如有），企业及其实际控制人财产线索清单和相关资产证明',
             additionalExplanation:''
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "民生资源贷",
             yearInterestLow:3.85,
             yearInterestHigh:5,
             loanDurationShort:1,
             loanDurationLong:120,
             loanAmountLow:1,
             loanAmountHigh:10000,
             payDayLow:5,
             payDayHigh:15,
             productDesc:'民生资源贷是邮政储蓄银行面向民生资源行业中小微企业研发的专属信贷产品。民生资源行业包括热力、自来水、燃气的生产' +
                 '和供应及成品油供应等子行业',
             productFeature:'抵押率高，授信期限长，流程简便',
             productLabel:'“有固定经营场所” “企业正常经营2年及以上”“企业商业及银行信用良好”',
             applyCondition:'借款企业正常经营2年以上（含2年）、取得特许经营授权、生产经营项目产品符合国家标准、有环评相关手续',
             materialNeeded:'1.营业执照2.公司章程或成立文件（最新版）3董事会股东会合伙人决议*4特种行业许可证、特殊行业资质证书（若有）5企业变更登记说明（若有）6近两年年度财务报告（经营年限不足两年，提供自成立财务报告）7最近一期的财务报表8自贷款申请日近2年（或24个月）增值税与所得税完税凭证（授权我行查询纳税信息的可不提供）9近一年主要银行账户对账单或流水 10生产型企业且用电（或煤、气、水）作为主要能耗的，提供近一年经营场所电（或煤、气、水）费凭证，若无明显淡旺季，可分别提供3、6、9、12四个月电（或煤、气、水）费缴纳凭证11近一年的工资单，若无明显淡旺季，可每季度提供1个月工资单12企业（或企业主）资产（货币、房产土地、动产、应收账款）清单及证明 14经营场所证明材料 15金融信用信息基础数据库企业信息查询及报送授权书',
             additionalExplanation:'燃气供应企业、供热企业、加油站、自来水生产与供应企业 还需提供 其经营指标相关资料以及政府对企业的相关考核'
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "抵押担保贷款",
             yearInterestLow:3.85,
             yearInterestHigh:5,
             loanDurationShort:1,
             loanDurationLong:120,
             loanAmountLow:1,
             loanAmountHigh:10000,
             payDayLow:5,
             payDayHigh:15,
             productDesc:'邮政储蓄银行向中小微企业法人发放的，以符合我行准入条件的房地产（含国有建设用地性质房产所有权）抵押或者以' +
                 '符合我行准入的担保公司提供担保为主要担保方式的本外币授信业务。',
             productFeature:'有房就能贷，商品房、商业房、工业厂房都可抵押，或者担保公司提供连带责任保证担保。额度高、利率低、' +
                 '期限长、还款灵活。一次性抵押5年循环额度。',
             productLabel:'“有固定经营场所” “企业正常经营6个月及以上”“企业商业及银行信用良好” “提供近一年银行流水',
             applyCondition:'1、合法经营（营业执照、特许行业资格证书、环保达标等）；\n' +
                 ' 2、经营要求——有固定场所、产品有市场、实际控制人在本地有固定住址；\n' +
                 ' 3、企业商业及银行信用良好，企业主要投资人、实际控制人和管理人员遵纪守法；\n' +
                 ' 4、经营年限——企业正常经营6个月及以上；\n' +
                 ' 5、企业股权结构清晰，不存在无法有效分析的复杂持股关系；\n' +
                 ' 6、企业主业（或围绕主业进行相关业务）突出；\n' +
                 ' 7、从事行业——符合我行小微企业重点行业授信政策指引；\n' +
                 ' 8、企业的资产负债水平（包括企业实际控制人及其配偶名下的资产、负债）应控制在合理范围',
             materialNeeded:'1、营业执照\n 2、公司章程或成立文件（最新版）\n 3、董事会股东会合伙人决议 \n ' +
                 '4、特种行业许可证、特殊行业资质证书（若有）\n 5、企业变更登记说明（若有）\n' +
                 ' 6、近两年年度财务报告（经营年限不足两年，提供自成立财务报告）\n' +
                 ' 7、最近一期的财务报表 \n 8、自贷款申请日近2年(或24个月)增值税与所得税完税凭证（授权我行查询纳税信息的可不提供)\n ' +
                 '9、近一年主要银行账户对账单或流水\n 10、生产型企业且用电（或煤、气、水）作为主要能耗的，提供近一年经营场所电（或煤、气、水）费凭证，' +
                 '若无明显淡旺季，可分别提供3、6、9、12四个月电（或煤、气、水）费缴纳凭证11近一年的工资单，' +
                 '若无明显淡旺季，可每季度提供1个月工资单12企业（或企业主）资产（货币、房产土地、动产、应收账款）清单及证明14经营场所证明材料15金融信用信息基础数据库企业信息查询及报送授权书',
             additionalExplanation:''
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "科创小企业贷款",
             yearInterestLow:3.45,
             yearInterestHigh:5.95,
             loanDurationShort:1,
             loanDurationLong:120,
             loanAmountLow:1,
             loanAmountHigh:5000,
             payDayLow:1,
             payDayHigh:30,
             productDesc:'1、为了进一步支持科创企业发展，我行专门向科创小企业发放的，用于企业生产经营的人民币贷款业务，含流动资金贷款、固定资产贷款\n' +
                 ' 2、科创型企业包括：专精特新企业、专精特新小巨人企业、创新性中小企业等纳入《优质中小企业梯度培育管理暂行办法》的各类企业，' +
                 '军民融合企业，主板及新三板上市企业，纳入市级科技金融等风险补偿范围内科技型企业',
             productFeature:'可采用信用的方式向申请企业发放最高不超过5000万元的贷款，同时可包括设备质押、股权质押、在建工程抵押、' +
                 '知识产权质押等多种担保方式',
             productLabel:'专精特新及科创企业、信用良好、专精特新、拥有核心专利',
             applyCondition:'1、拥有处于有效期内的相关资质认证\n' +
                 ' 2、产品或服务属于国家重点支持领域\n '+
                 '3、企业连续正常经营1年以上\n' +
                 ' 4、企业、实际控制人及其配偶（如有）信用状况良好',
             materialNeeded:'经营证照、法人身份证、公司章程、企业简介、近两年财务报表、近两年银行流水、投资机构入股证明材料（如有），' +
                 '知识产权证书（如有），资质认证（必须，如高新技术企业证书等），经营场地使用证明材料（如在园区的企业，需要提供企业与园区的租赁合同），' +
                 '政府部门的科技资金奖励证明、财政资金补助资料（如有），企业及其实际控制人财产线索清单和相关资产证明',
             additionalExplanation:''
           },
           {
             agencyIcon:require('@/assets/dkcp/yzyh.png'),
             productName: "快捷贷",
             yearInterestLow:3.85,
             yearInterestHigh:4.9,
             loanDurationShort:1,
             loanDurationLong:36,
             loanAmountLow:1,
             loanAmountHigh:1500,
             payDayLow:1,
             payDayHigh:5,
             productDesc:'经国家工商行政管理机关核准登记的，符合我行准入条件，融合线上数据分析与线下人工调查技术，为小企业客户' +
                 '提供快速授信、便捷用信的流动资金贷款业务（分为抵押模式、信用模式、保证模式）',
             productFeature:'办理速度快、手续简便（500万以内申贷申请免于提供财务报表等资料），审批实行绿色通道，业务流程按照邮政' +
                 '储蓄银行信贷工厂模式，通过邮政银行审核后最快3天可放款。',
             productLabel:'”正常经营6个月以上“ ”有固定经营场所及住所“ ”信用记录良好“ ”股权结构清晰“',
             applyCondition:'1、连续正常经营6个月以上的中型、小型、微型企业\n' +
                 ' 2、企业或实际控制人（或其配偶）在贷款行所在一级分行辖区内有自有房产或3年社保缴纳\n' +
                 ' 3、有固定的经营场所',
             materialNeeded:'1、借款企业的基础证件\n' +
                 ' 2、实际控制人基础证件\n' +
                 ' 3、经营相关资料\n' +
                 ' 4、担保抵押相关资料（如有）',
             additionalExplanation:''
           }
         ]
      //  this.hotxlist = res.data.results;
      });
    },
    // 分页方法
    fy() {
      if (this.hotxs.length % 6 == 0) {
        this.allPage = parseInt(this.hotxs.length / 6);
      } else {
        this.allPage = parseInt(this.hotxs.length / 6) + 1;
      }
      this.hotxlist = this.hotxs.slice(0 + 6 * this.nowPage, 6 + 6 * this.nowPage);
    },
    // 获取分类
    getfl() {
      let b = [
        "信用",
        "抵押",
        "保证",
        "质押",
        "连带责任保证",
        "一般保证",
        "信用",
        "抵押",
      ];
      let a = [];
      for (let i = 0; i < b.length; i++) {
        const element = b[i];
        a.push(element);
      }
      var newarr = [];
      for (var i = 0; i < a.length; i++) {
        if (this.btnlist.indexOf(a[i]) == -1) {
          this.btnlist.push(a[i]);
        }
      }
    },

    // 分页器左
    left() {
      if (this.nowPage > 0) {
        this.nowPage = this.nowPage - 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 分页器右
    right() {
      if (this.nowPage < this.allPage - 1) {
        this.nowPage = this.nowPage + 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 列表下一步
    listnext(e, a) {
      this.$refs["hd"].scrollTop = 0;
      this.btnshow = a;
      this.rjt = e;
      this.hotxlist = [];
      for (let i = 0; i < yhlist.length; i++) {
        const element = yhlist[i];
        if (element.guarantyWay != null && element.guarantyWay.indexOf(e) != -1) {
          this.hotxlist.push(element);
        }
      }
    },
    // 箭头返回
    jt() {
      this.btnshow = -1;
      this.hotxlist = yhlist;
      console.log(this.hotxlist);
      this.getfl();
    },
    //热门，详细功能下一步
    hotnexs(e) {
      sessionStorage.setItem("cplist", JSON.stringify(e));
      sessionStorage.setItem("cpxqlist", JSON.stringify(e));
      this.$router.push("/dkcp");
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .topBox {
    width: 100%;
    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
    }
    .titles {
      display: flex;

      .t1 {
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
      .t2 {
        margin-left: -35px;
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .xz {
      padding-top: 20px;
    }
    .HotBusiness_TaxServices_img {
      // width: 100%;
      padding-top: 28px;
      display: flex;
      height: 670px;
      // background-color: #caddfd;
      display: flex;
      justify-content: flex-start;
      overflow: auto;

      flex-wrap: wrap;
      position: relative;

      .TaxServicesImgs {
        animation-name: run;
        animation-duration: 1s;

        margin-right: 21.5px;
        margin-left: 21.5px;

        position: relative;

        width: 375px;
        height: 110px;
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.16);
        padding: 11px;
        .TaxServicesImgsName {
          width: 100%;
          height: 40px;
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 500;
          text-align: left;
          color: #000000;
          padding: 8px 0;
          border-bottom: 1px solid #cecece;
        }
        .TaxServicesImgsbox {
          width: 100%;
          height: 40px;
          padding: 15px 0;
          span {
            display: inline-block;
            width: 100px;
            height: 38px;

            text-align: center;
            border-right: 1px solid #cecece;
          }
          span:nth-child(3n) {
            border-right: none;
          }
        }

        img {
          width: 430px;
          height: 178px;
        }
        .name {
          width: 300px;
          position: absolute;
          text-align: right;

          right: 5px;
          bottom: 25px;
          font-size: 30px;
          /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          display: -webkit-box;
          /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
          -webkit-box-orient: vertical;
          /*要显示的行数*/
          -webkit-line-clamp: 1;
          /* 溢出部分隐藏 */
          overflow: hidden;
        }
        .yhname {
          position: absolute;
          top: 5px;
          left: 5px;

          img {
            height: 50%;
            width: 50%;
          }
        }
        // img:active {
        //   opacity: 0.7;
        // }
      }
      // .TaxServicesImgs:nth-child(3n) {
      // margin-right: 0;
      // margin-left: 22.6px;
      // }
      // .TaxServicesImgs:nth-child(3n + 1) {
      //   margin-left: 3px;
      // }
      //分页器
      .TaxServicesSign {
        // position: absolute;
        bottom: -40px;
        // left: 50%;
        transform: translate(-50%);

        width: 408px;
        height: 42px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        // margin-top: 30px;

        button {
          width: 83px;
          height: 100%;
          font-size: 34px;
          background: #eeeeee;
          border: 0;
          border-radius: 10px;
        }

        .TaxServicesSignInfo {
          margin: auto;

          span {
            display: inline-block;
            width: 17px;
            height: 17px;
            background: #ffffff;
            border: 1px solid #cdcdcd;
            border-radius: 50%;
            margin-right: 14px;
          }
        }
      }
    }
  }
  .bottomBox {
    width: 100%;

    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
      margin-top: 10px;
    }
    .listbox {
      width: 100%;
      height: 100%;
      overflow: auto;

      .listboxs {
        display: flex;
        justify-content: flex-start;
        .btnbox {
          margin-right: 30px;
          img {
            width: 145px;
            height: 145px;
          }
          .btnname {
            width: 100%;
            font-size: 26px;
            font-weight: 400;
            text-align: center;
            color: #000000;
            /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
            display: -webkit-box;
            /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
            -webkit-box-orient: vertical;
            /*要显示的行数*/
            -webkit-line-clamp: 2;
            /* 溢出部分隐藏 */
            overflow: hidden;
          }
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
