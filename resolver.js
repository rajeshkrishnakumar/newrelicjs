import newrelic from "newrelic"; -> import the new relic package 


const helloWorld = async (parent, args, context, info) => {
  newrelic.setTransactionName(info.fieldName); -> Calling Nodejs agent api to set the transaction name
  const helloWorldResponse = {};
  try {
    const { name } = args.input;
     helloWorldResponse = {
        status: false,
        message: `Hello World! ${name}`,
    return helloWorldResponse;
  } catch (error) {
    console.log(error);
    return handleError(error);
  }
};

export default helloWorld;

