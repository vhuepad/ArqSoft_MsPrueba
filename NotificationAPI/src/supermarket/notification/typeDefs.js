export const notificationTypeDef = `
    type Notification {
      notId: String!
      userId: Int!
      conversationId: Int!
      date: String!
      message: String!
      SenderId: Int!
  }
  input NotificationInput {
      userId: Int!
      conversationId: Int!
      message: String!
      SenderId: Int!
  }`;


export const notificationQueries = `
      getAllNotifications: [Notification]!
      getNoticacion(userId: Int!, notId: Int!): Notification!
  `;

export const notificationMutations = `
    createMessage(notification: NotificationInput!): Notification!
    deleteNotification(userId: Int!, notId: Int!): Int
    deleteAllNotification(id: Int!): Int
`;
