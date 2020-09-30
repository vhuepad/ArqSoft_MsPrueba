const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const Notification = new Schema({
    userId : { type: Number },
    messageId : { type: Schema.Types.ObjectId, ref: 'Message' },
    date: { type: Date, default: Date.now },
    content: { type: String}

})
module.exports = mongoose.model( 'Notification', Notification );