const mongoose = require( "mongoose" );

//mongoose.connect( 'mongodb://localhost/ms_notifications', {
mongoose.connect( 'mongodb+srv://admin:admin@cluster0.kuji3.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( db => console.log( "DB is connected" ) )
.catch( err => console.error( err ));