const Notification = require( '../models/Notification' );
const Message = require( '../models/Message' );

const notificationCtrl = { };

notificationCtrl.createNotification = async ( req, res, next) => {
    try{
        const { userId, conversationId,  message, senderId} = req.body;
        if ( !userId || !conversationId || !message || !senderId)
            throw "The required data is incomplete";

        const notification = new Notification( req.body );
        await notification.save();
        console.log(notification.id);
        console.log(notification);
        return res.status( 201 ).json(notification);
    }catch ( err ) {
        if( !err.message ) {
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "There was a problem creating a notification"
            });
        }
    }
};
/*
notificationCtrl.createNotification = async ( req, res ) => {
    try{
        const { userId, messageId } = req.body;
        console.log(req.body);
        if ( !userId || !messageId )
            throw "The required data is incomplete";

        const notification = new Notification( req.body );
        await notification.save();

        return res.status( 201 ).json({
            message: "The Notification has been created successfully"
        });

    }catch ( err ) {
        if( !err.message ) {
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "There was a problem creating a notification"
            });
        }
    }
};*/

notificationCtrl.deleteNotification = async ( req, res ) => {
    try {
        const userId = req.params.userId;
        const notificationId = req.params.notificationId;
        if ( !userId )
            throw "The required data is incomplete";

        await Notification.findByIdAndDelete(notificationId);

        return res.status( 200 ).json({
            message: "Notification successfully removed"
        });
    } catch ( err ) {
         if( !err.message ){
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "The notification you are trying to delete does not exist"
            });
        }
    }
}

notificationCtrl.deleteAllNotifications = async ( req, res ) => {
    try {
        const userId = req.params.userId;
        if ( !userId )
            throw "Incomplete data";

        await Notification.deleteMany({userId: userId });
        return res.status( 200 ).json({
            message: "Notifications successfully removed"
        })
    } catch ( err ) {
         if( !err.message ){
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "The notifications you are trying to delete does not exist"
            });
        }
    }
}

notificationCtrl.getAllNotifications = async ( req, res ) => {
    try {
        const userId = req.params.userId;
        if ( !userId )
            throw "The required data is incomplete";

        const notification = await Notification.find({ userId: userId }).populate({
            path:'messageId',
            select: ['texto','senderId']
        });

        if ( !notification ) {
            return res.status( 200 ).json({
                message: "You have no notifications"
            });
        }
        return res.status( 200 ).json( notification );
    } catch ( err ) {
        if( !err.message ){
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "Could not retrieve notifications"
            });
        }
    }
}

notificationCtrl.getNotification = async ( req, res ) => {
    try {
        const userId = req.params.userId;
        const notificationId = req.params.notificationId;
        if ( !userId || !notificationId)
            throw "The required data is incomplete";

        const notification = await Notification.findById(notificationId).populate({
            path:'messageId',
            select: ['texto','senderId']
        });

        if ( !notification ) {
            return res.status( 200 ).json({
                message: "You have no notifications"
            });
        }
        return res.status( 200 ).json( notification );
    } catch ( err ) {
        if( !err.message ){
            return res.status( 400 ).json({ message: err });
        } else {
            return res.status( 400 ).json({
                message: "Could not retrieve notifications"
            });
        }
    }
}

module.exports = notificationCtrl;