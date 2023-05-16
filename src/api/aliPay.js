// axios 发送ajax请求
import request from '@/utils/request'

export default {
    // 发起支付请求
    tradePagePay(productId) {
        return request({
            url: '/api/ali-web-pay/tradePage/' + productId,
            method: 'get'
        })
    },

    // 取消订单
    cancel(orderNo) {
        return request({
            url: '/api/ali-web-pay/cancel/' + orderNo,
            method: 'get'
        })
    },

    // 退款
    refunds(orderNo, reason) {
        return request({
            url: '/api/ali-web-pay/refund/' + orderNo + '/' + reason,
            method: 'get'
        })
    }
}
