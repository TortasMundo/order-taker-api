const orderService = require('src/services/order_service')

module.exports = [
  {
    method: 'post',
    path: '/orders/place',
    action: async ctx => {
      ctx.body = {
        success: true,
        data: await orderService.place(ctx),
      }
    },
  },
]
