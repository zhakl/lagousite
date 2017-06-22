var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    getUsers: function (callback) {
        sql = "select * from `t_user`";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    addUsers: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    }
};
