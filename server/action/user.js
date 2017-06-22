var user = require("../models/user.js");
var moment = require('moment');
var crypto = require('crypto');

module.exports = function (app) {
    /**
     * 登录
     */
    app.post('/login', function (req, res, next) {
        var loginflag = true;
        user.getUsers(function (data) {
            if (data.status) {
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var ispwd = md5.digest('hex');
                for (let i = 0; i < data.data.length; i++) {
                    if ((req.body.username == data.data[i].username || req.body.username == data.data[i].phone) && ispwd == data.data[i].password) {
                        req.session.user = req.body.username;
                        res.send({status: data.status, data: {success: 1, msg: "登录成功"}});
                        loginflag = false;
                        break;
                    }
                }
                if (loginflag) {
                    res.send({status: data.status, data: {success: 0, msg: "用户名或密码错误"}});
                }
            }
            res.end();
        })
    });
    /**
     * 注册
     */
    app.post('/register', function (req, res, next) {
        console.log(req.body.phone)
        var userfalg = true;
        user.getUsers(function (data) {
            if (data.status) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.body.phone == data.data[i].phone) {
                        res.send({status: data.status, data: {id: data.id, success: 0, msg: "该手机号码已经注册了"}});
                        userfalg = false;
                        break;
                    }
                }
            }
            if (userfalg) {
                /*加密密码*/
                var md5 = crypto.createHash('md5');
                md5.update(req.body.password.toString());
                var pwd = md5.digest('hex');
                user.addUsers({
                    data: {
                        username: req.body.username,
                        password: pwd,
                        phone: req.body.phone,
                        time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
                    },
                    sql: "INSERT INTO `t_user` SET ?"
                }, function (data) {
                    console.log(data)
                    res.send({status: data.status, data: {id: data.id, success: 1, msg: "注册成功"}});
                });
            }
        })
    });
    /**
     * 获取session
     */
    app.post('/session', function (req, res, next) {
        user.getUsers(function (data) {
            if (req.session.user != undefined) {
                for (let i = 0; i < data.data.length; i++) {
                    if (req.session.user == data.data[i].username) {
                        res.send({session: req.session.user, status: true});
                        break;
                    }
                }
            } else {
                res.send({status: false});
            }
        })
    });

    /**
     * 清除session
     */
    app.post('/exit', function (req, res, next) {
        req.session.user = '';
        res.send({session: req.session.user, status: false});
        res.end();
    });

    /**
     * 获取注册用户
     */
    app.get('/page', function (req, res) {
        user.getUsers(function (data) {
            if (data.status) {
                res.send(data);
            } else {
                res.send(500);
            }
        });
    });

};
