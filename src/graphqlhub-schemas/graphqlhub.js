import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import * as GITHUB from './github';

let FIELDS = {
  graphQLHub : {
    type : GraphQLString,
    description : 'About GraphQLHub',
    resolve() {
      return 'Use GraphQLHub to explore popular APIs with GraphQL! Created by Clay Allsopp @clayallsopp';
    }
  },
  github : {
    type : GITHUB.QueryObjectType,
    resolve() {
        return {};
    }
  }
};

export const QueryObjectType = new GraphQLObjectType({
  name   : 'GraphQLHubAPI',
  description : 'APIs exposed as GraphQL',
  fields : () => FIELDS,
});
