import newrelic from "newrelic";

          const processRequest = async (resolve, root, args, context, info) => {
  newrelic.setTransactionName(info.fieldName);
  return resolve(root, args, context, info);
           };

const graphqlMiddleware = {
  Query: processRequest,
  Mutation: processRequest,
};

export default graphqlMiddleware;

