var connection = require('./connection.js');
//uses a callback to pass the result into the next file in the models folder
var orm = {
    all: function (tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    //adding in an UPDATE method to make the app devour the burgers_db
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    create: function (tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + "(burger_name) VALUES ('" + val + "');", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;