const { Router } = require( "express" );
const router = Router( );

const {
    createMessage,
    createNotification,
    deleteAllNotifications,
    deleteNotification,
    getAllNotifications,
    getNotification 
} = require( "../controllers/notification.controller" );

router
    .route( '/notification' )
    .post( createMessage, createNotification );
router
    .route( '/notification/:userId' )
    .delete( deleteAllNotifications );
router
    .route( '/notification/:userId/:notificationId' )
    .delete( deleteNotification );
router
    .route( '/getAllNotifications/:userId' )
    .get( getAllNotifications );
router
    .route( '/notification/:userId/:notificationId' )
    .get( getNotification );

module.exports = router;