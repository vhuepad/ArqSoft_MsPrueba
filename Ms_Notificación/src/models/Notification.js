const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const Notification = new Schema({
    userId : { type: Number },
    conversationId : { type: Number },
    date: { type: Date, default: Date.now },
    message: { type: String },
    senderId: { type: Number}
})
module.exports = mongoose.model( 'Notification', Notification );