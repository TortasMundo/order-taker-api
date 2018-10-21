const orderService = require('src/services/order_service')

module.exports = [
  {
    method: 'post',
    path: '/orders/place',
    action: async ctx => {
      ctx.body = await orderService.place(ctx)
    },
  },
  {
    method: 'post',
    path: '/orders/update_quantities',
    action: async ctx => {
      ctx.body = await orderService.updateQuantities(ctx)
    },
  },
]
