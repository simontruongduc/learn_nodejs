const homeRouters = require('./home')

function route(app) {
    app.use('/',homeRouters)
}

module.exports = route;