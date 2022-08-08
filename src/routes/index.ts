module.exports = function(app: any) {
    app.use('/email', require('./email'))
}