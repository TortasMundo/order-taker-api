const PlaceOrderRequest = require('src/services/requests/ordering-service/place_order')
const UpdateOrderRequest = require('src/services/requests/ordering-service/update')
const ListOrdersRequest = require('src/services/requests/ordering-service/list_orders')
const apiRequester = require('src/services/api_requester')

const place = async ctx => {
  const request = new PlaceOrderRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers)
}

const update = async ctx => {
  const request = new UpdateOrderRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers)
}

const list = async ctx => {
  const request = new ListOrdersRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers)
}

module.exports = {
  place,
  update,
  list,
}
