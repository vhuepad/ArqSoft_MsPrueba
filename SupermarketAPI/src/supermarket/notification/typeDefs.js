export const notificationTypeDef = `
  type Notification {
      userId: Int!
      messageIid: Message!
      date: Date!
      content: String!
  }
  input NotificationInput {
      userId: Int!
      messageIid: Message!
      date: Date!
      content: String!
  }`;

export const messageTypeDef = `
  type Message {
      userId: Int!
      texto: String!
      senderId: Int!
  }
  input MessageInput {
      userId: Int!
      messageIid: Message!
      date: Date!
      content: String!
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
