const mongoose = require( 'mongoose' );
const { Schema, model } = mongoose;

const Message = new Schema({
    userId: { type: Number},
    texto: { type: String},
    senderId : { type: Number}
});
module.exports = mongoose.model( 'Message', Message );