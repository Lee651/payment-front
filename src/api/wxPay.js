// axios 发送ajax请求
import request from '@/utils/request'

export default{
  // 下单接口
  nativePay(productId) {
    return request({
      url: '/api/wx-native-pay/native/' + productId,
      method: 'get'
    })
  },
  // 取消订单接口
  cancel(orderNo) {
    return request({
      url: '/api/wx-native-pay/cancel/' + orderNo,
      method: 'get'
    })
  },
  // 退款接口
  refunds(orderNo, reason) {
    return request({
      url: '/api/wx-native-pay/refund/' + orderNo + '/' + reason,
      method: 'get'
    })
  }
}
