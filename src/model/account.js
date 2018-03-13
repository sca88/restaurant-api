import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

let account = new Schema({
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', account);