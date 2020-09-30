const { Router } = require( "express" );
const router = Router( );

const {
    addMessage,
    addNotification,
    removeAllNotifications,
    removeNotification,
    getAllNotifications,
    getNotification 
} = require( "../controllers/notification.controller" );

router
    .route( '/notification' )
    .post( addMessage, addNotification );
router
    .route( '/:userId/notification' )
    .delete( removeAllNotifications );
router
    .route( '/:userId/notification/:notificationId' )
    .delete( removeNotification );
router
    .route( '/:userId/allnotification' )
    .get( getAllNotifications );
router
    .route( '/:userId/notification/:notificationId' )
    .get( getNotification );

module.exports = router;