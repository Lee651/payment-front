import request from '@/utils/request'

export default{
  // 根据订单号查询订单状态
  queryOrderStatus(orderNo) {
    return request({
      url: '/api/order/orderStatus/' + orderNo,
      method: 'get'
    })
  },

  // 查询订单列表
  list() {
    return request({
      url: '/api/order/list',
      method: 'get'
    })
  }
}
