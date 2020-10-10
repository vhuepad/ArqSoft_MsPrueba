const { Router } = require( "express" );
const router = Router( );

const {
    createNotification,
    deleteAllNotifications,
    deleteNotification,
    getAllNotifications,
    getNotification 
} = require( "../controllers/notification.controller" );

router
    .route( '/notification' )
    .post( createNotification );
router
    .route( '/notification/:userId' )
    .delete( deleteAllNotifications );
router
    .route( '/notification/:userId/:notificationId' )
    .delete( deleteNotification );
router
    .route( '/notification/:userId' )
    .get( getAllNotifications );
router
    .route( '/notification/:userId/:notificationId' )
    .get( getNotification );

module.exports = router;