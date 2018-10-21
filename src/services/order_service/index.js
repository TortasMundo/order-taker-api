const PlaceOrderRequest = require('src/services/requests/ordering-service/place_order')
const UpdateOrderQuantitiesRequest = require('src/services/requests/ordering-service/update_quantities')
const apiRequester = require('src/services/api_requester')

const place = async ctx => {
  const request = new PlaceOrderRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers['is-test'])
}

const updateQuantities = async ctx => {
  const request = new UpdateOrderQuantitiesRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers['is-test'])
}

module.exports = {
  place,
  updateQuantities,
}
