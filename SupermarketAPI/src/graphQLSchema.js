import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './supermarket/categories/typeDefs';

import {
	notificationMutations,
	notificationQueries,
	notificationTypeDef,
	messageTypeDef
} from './supermarket/notification/typeDefs';

import categoryResolvers from './supermarket/categories/resolvers';
import notificationResolvers from './supermarket/notification/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
		notificationTypeDef,
		messageTypeDef
	],
	[
		categoryQueries,
		notificationQueries
	],
	[
		categoryMutations,
		notificationMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers,
		notificationResolvers
	)
});
