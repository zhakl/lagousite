var user = require("../action/user.js");
module.exports = function (app) {
    /**
     * 重定向首页
     */
    app.get('/', function (req, res) {
        res.redirect('index.html')
    });
    user(app);
};
