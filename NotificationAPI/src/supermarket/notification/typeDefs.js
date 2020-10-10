export const notificationTypeDef = `
  type Notification {
      id: String!
      userId: Int!
      messageId: Int
      conversationid: Int
      date: String!
      text: String!
      SenderId: Int!
  }
  input NotificationInput {
      userId: Int!
      messageIid: Int
      conversationid: Int
      date: String!
      text: String!
      SenderId: Int!
  }`;

export const notificationQueries = `
      getAllNotifications(userId: Int!): [Notification]!
      getNotification(userId: Int!, notId: String!): Notification!
  `;

export const notificationMutations = `
    createNotification(notification: NotificationInput!): Notification!
    deleteNotification(userId: Int!, notId: String!): Int!
    deleteAllNotifications(id: Int!): Int!
`;

