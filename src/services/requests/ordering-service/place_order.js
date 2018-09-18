const Base = require('./$base')

class Request extends Base {
  constructor(body) {
    super()
    this.body = body
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/place'
  }
  get body() {
    return this.body
  }
}

module.exports = Request
