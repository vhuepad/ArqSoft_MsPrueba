import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getAllNotifications: (_,{ userid }) =>
			generalRequest(`${URL}/${userid}`, 'GET'),
		getNotification: (_, { userId, notId }) =>
			generalRequest(`${URL}/${userId}/${notId}`, 'GET'),
	},
	Mutation: {
		createMessage: (_, { message }) =>
			generalRequest(`${URL}`, 'POST', message),
		deleteNotification: (_, { userId,notId }) =>
			generalRequest(`${URL}/${userId}/${notId}`, 'DELETE'),
		deleteAllNotifications: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
