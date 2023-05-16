<template>
  <div class="bg-fa of">
    <section id="index" class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">微信账单申请</span>
        </h2>
      </header>

      <el-form :inline="true" >
        <el-form-item>
            <el-date-picker v-model="billDate_wxpay" value-format="yyyy-MM-dd" placeholder="选择账单日期" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="downloadBillWx('tradebill')">下载交易账单</el-button>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="downloadBillWx('fundflowbill')">下载资金账单</el-button>
        </el-form-item>
      </el-form>
    </section>

    <section id="index" class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">支付宝账单申请</span>
        </h2>
      </header>

      <el-form :inline="true" >
        <el-form-item>
            <el-date-picker v-model="billDate_alipay" value-format="yyyy-MM-dd" placeholder="选择账单日期" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="downloadBillAli('trade')">下载交易账单</el-button>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="downloadBillAli('signcustomer')">下载资金账单</el-button>
        </el-form-item>
      </el-form>
    </section>

  </div>
</template>

<script>
import billApi from '../api/bill'

export default {
  data () {
    return {
       billDate_wxpay: '', // 微信支付账单日期
       billDate_alipay: '' // 支付宝账单日期
    }
  },

  methods: {

    // 下载微信支付账单
    downloadBillWx(type) {
      // 获取账单内容
      billApi.downloadBillWxPay(this.billDate_wxpay, type).then(response => {
          if (response.code === 200) {
              const element = document.createElement('a');
              element.setAttribute('href', 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(response.data));
              element.setAttribute('download', this.billDate_wxpay + '-' + type);
              element.style.display = 'none';
              element.click();
          }
      });
    },

    // 下载支付宝账单
    downloadBillAli(type) {
        billApi.downloadBillAliPay(this.billDate_alipay, type).then(response => {
            if (response.code === 200) {
                const element = document.createElement('a');
                element.setAttribute('href', response.data);
                element.setAttribute('download', this.billDate_alipay + '-' + type);
                element.style.display = 'none';
                element.click();
            }
        })
    }
  }
}
</script>
