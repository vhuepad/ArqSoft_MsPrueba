const url_message = "http://ec2-18-206-238-199.compute-1.amazonaws.com:5000/graphql";
const url_notification = "http://ec2-3-236-86-171.compute-1.amazonaws.com:5000/graphql";

var opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: ""
  };

//_______________Message______________________
/*
async function createMessage(idUs,idConv,text){
    //Variable para guardar el destinatario
    var idDestinatario;
    //Fecha actual para creación de mensaje y notificación
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //QUERY Crear un mensaje con parametros
    var query = 
        ` mutation {
            createMessage(idUs: ${idUs},idConv: ${idConv}, message:{
                conversationId:${idConv},
                text: "${text}"
                sendDate:"${date}"
                remitenteId:${idUs}
            }){
            text
            }
            }`;
    //Hacer la peticion a GraphQL
    await fetch(url_message, {method: 'POST',  headers:  { "Content-Type": "application/json"}, body:JSON.stringify({query})})
    .then(res => res.json())
    .then(data =>{console.log(data.data)});
    
    //QUERY para obtener conversaciones de usuario
    var query =`query {
                    allConversations(idUs: ${idUs}){
                        id
                        usuario1Id
                        usuario2Id
                        } 
                    }`;
   //Hacer la peticion a GraphQL
    idDestinatario = await fetch(url_message, {method: 'POST', headers:  { "Content-Type": "application/json"}, body:JSON.stringify({query})})
    .then(res => res.json())
    .then(data =>{
        //Filtrar la respuesta a la conversación del mensaje que se creo
        let newArray = data.data.allConversations.filter(conversation => conversation.id === idConv );
        //Obtener el destinatario segun el ususario emisor del mensaje
        if (newArray[0].usuario1Id === idUs ){
            idDestinatario = newArray[0].usuario2Id;
        }else{
            idDestinatario = newArray[0].usuario1Id;
        }
        return idDestinatario
    });
    
    console.log(idDestinatario);
    //QUERY Crear un mensaje con parametros
    var query =`mutation {
                createNotification(notification: {
                    userId: ${idDestinatario},
                    conversationId: ${idConv},
                    message:"${text}",
                    senderId: ${idUs}
                    }) {
                    userId
                    conversationId
                    message
                    senderId
                    }
                    }`;
    //Crear la notificación
    await fetch(url_notification, {method: 'POST',  headers:  { "Content-Type": "application/json"}, body:JSON.stringify({query})})
    .then(res => res.json())
    .then(data =>{console.log(data.data)});
    
}*/

//_______________Notification______________________

async function getAllNotifications(userId){
    var allnotifications;
    var query =`query {
            getAllNotifications(userId: ${userId}){
                _id
                userId
                date
                message
                }
            }`;

    opts["body"] = JSON.stringify({ query });
    await fetch(url_notification, opts)
    .then(res => res.json())
    .then(data =>{
        console.log(data.data.getAllNotifications);
        allnotifications = data.data.getAllNotifications;
    });
    return allnotifications;
}

async function getNotification(userId,notId){
    var notification;
    console.log(notId)
    var query =`query {
            getNotification(userId: ${userId}, notId: "${notId}"){
                _id
                userId
                date
                message
                }
            }`;

    opts["body"] = JSON.stringify({ query });
    await fetch(url_notification, opts)
    .then(res => res.json())
    .then(data =>{
        console.log(data.data.getNotification);
        notification = data.data.getNotification;
    });
    return notification;
}

async function deleteNotification(userId, notId){
    var message;
    var query =`mutation {
        deleteNotification(userId: ${userId}, notId: "${notId}"){
            message
            }
        }`;

    opts["body"] = JSON.stringify({ query });
    await fetch(url_notification, opts)
    .then(res => res.json())
    .then(data =>{
        console.log(data.data);
        message = data.data;
    });
    return message;
}

async function deleteAllNotifications(userId){
    var message;
    var query =`query {
            deleteNotifications(userId: ${userId}){
                message
                }
            }`;

    opts["body"] = JSON.stringify({ query });
    await fetch(url_notification, opts)
    .then(res => res.json())
    .then(data =>{
        console.log(data.data.deleteNotifications);
        message = data.data.deleteNotifications;
    });
    return message;
}

// Pruebas message
//document.getElementById("createMessage").onclick = function(){createMessage(2,12,"Hola 12")};

//pruebas notification
document.getElementById("getAllNotifications").onclick = function(){getAllNotifications(1)};
document.getElementById("getNotification").onclick = function(){getNotification(1,"5f83c608f7a2ac0019847eb0")};
document.getElementById("deleteNotification").onclick = function(){deleteNotification(3,"5f83ce9af7a2ac0019847eb2")};
document.getElementById("deleteNotifications").onclick = function(){deleteAllNotifications(3)};