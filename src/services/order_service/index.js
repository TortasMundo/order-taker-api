const PlaceOrderRequest = require('src/services/requests/ordering-service/place_order')
const apiRequester = require('src/services/api_requester')

const place = async ctx => {
  const request = new PlaceOrderRequest(ctx.request.body)
  return await apiRequester.send(request, ctx.request.headers['is-test'])
}

module.exports = {
  place
}
