import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	notificationMutations,
	notificationQueries,
	notificationTypeDef,
	messageTypeDef
} from './supermarket/notification/typeDefs';

import notificationResolvers from './supermarket/notification/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		notificationTypeDef,
		messageTypeDef
	],
	[
		notificationQueries
	],
	[
		notificationMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		notificationResolvers
	)
});
