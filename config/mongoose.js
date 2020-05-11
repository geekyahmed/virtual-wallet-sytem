const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/wallet',{useNewUrlParser:true});

module.exports = {mongoose}
