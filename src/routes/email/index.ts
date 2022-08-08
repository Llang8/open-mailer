const { Router } = require('express')

const EmailRouter = Router()

EmailRouter.route('/send')
    .get(require('./email.send'))
    .post(require('./email.send'))

EmailRouter.route('/test')
    .post(require('./test.view'))

module.exports = EmailRouter