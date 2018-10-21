const Base = require('./$base')

class Request extends Base {
  constructor(body) {
    super()
    this._body = body
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/update_quantities'
  }
  get body() {
    return this._body
  }
}

module.exports = Request
