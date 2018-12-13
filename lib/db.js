'use strict';

let mongoose = require('mongoose');

let db = function(){
    return{
        config: function(conf) {
            mongoose.connect('mongodb://localhost/bukshop');
            let db = mongoose.connection;
            db.on('error', console.error.bind(console, "Connection Error"));
            db.once('open',function(){
                console.log('DB Connection Open...');
            });
        }
    }
}

module.exports = db();