import mongoose from 'mongoose';
import Restaurant from './restaurant';

let Schema = mongoose.Schema;

let reviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: String,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required:true
    }
});

module.exports = mongoose.model('Review', reviewSchema);