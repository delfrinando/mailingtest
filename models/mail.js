var db = require('../connection');
var Mail = {

    getAllMails: function (callback) {
        return db.query("select * from mailing", callback);
    },

    getMailById: function (id, callback) {
        return db.query("select * from mailing where id=?", [id], callback);
    },

    addMail: function (Mail, callback) {
        return db.query("Insert into mailing values(?,?,?)", [Mail.id, Mail.email, Mail.status], callback);
    },

    deleteMail: function (id, callback) {
        return db.query("delete from mailing where id=?", [id], callback);
    },

    updateMail: function (id, Mail, callback) {
        return db.query("update mailing set email=?,status=? where id=?", [Mail.email, Mail.status, id], callback);
    },

    deleteAll: function (item, callback) {
        var delarr = [];
        for (i = 0; i < item.length; i++) {
            delarr[i] = item[i].id;
        }
        return db.query("delete from mailing where id in (?)", [delarr], callback);
    }
};
module.exports = Mail;