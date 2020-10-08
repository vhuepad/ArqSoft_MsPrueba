export const notificationTypeDef = `
  type Notification {
      id: Int!
      userId: Int!
      messageIid: Int!
      date: String!
      content: String!
  }
  input NotificationInput {
      userId: Int!
      messageIid: Int!
      date: String!
      content: String!
  }`;

export const messageTypeDef = `
  type Message {
      id: Int!
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
      getAllNotifications: [Notification]!
      getNoticacion(userId: Int!, notId: Int!): Notification!
  `;

export const notificationMutations = `
    createMessage(message: MessageInput!): Message!
    deleteNotification(userId: Int!, notId: Int!): Int
    deleteAllNotification(id: Int!): Int
`;
