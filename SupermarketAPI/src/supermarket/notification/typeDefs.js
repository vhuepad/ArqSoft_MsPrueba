export const notificationTypeDef = `
  type Notification {
      id: String!
      userId: Int!
      messageIid: Int!
      date: String!
      content: String!
  }
  input NotificationInput {
      userId: Int!
      messageIid: Int!
      content: String!
  }`;

export const messageTypeDef = `
  type Message {
      id: String!
      userId: Int!
      texto: String!
      senderId: Int!
  }
  input MessageInput {
      userId: Int!
      texto: String!
      senderId: Int!
  }`;

export const notificationQueries = `
      getAllNotifications(userId: Int!): Notification!
      getNotification(userId: Int!, notId: Int!): Notification!
  `;

export const notificationMutations = `
    createMessage(message: MessageInput!): Message!
    deleteNotification(userId: Int!, notId: Int!): Int
    deleteAllNotifications(id: Int!): Int
`;

