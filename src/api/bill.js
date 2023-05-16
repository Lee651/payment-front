import request from '@/utils/request'

export default{

  downloadBillWxPay(billDate, type) {
    return request({
      url: '/api/wx-native-pay/download/' + billDate + '/' + type,
      method: 'get'
    })
  },

  downloadBillAliPay(billDate, type) {
    return request({
      url: '/api/ali-web-pay/download/' + billDate + '/' + type,
      method: 'get'
    })
  }
}
