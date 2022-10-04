class HomeController {
    index(req, res) {
        res.render('home')
    }
    show(req, res) {
        res.send('detail')
    }
}

module.exports = new HomeController;