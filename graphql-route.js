import express from "express";
import graphqlHTTP from "express-graphql";
import { expressPlayground } from "graphql-playground-middleware";
import { applyMiddleware } from "graphql-middleware";
import graphqlMiddleware from "../utils/middlewares/graphqlMiddleware.js"; -> import file of the above code snippet 
import Schema from "../schema/index.js"; 

const schemaWithMiddleware = applyMiddleware(Schema, graphqlMiddleware); -> Apply the middleware 

const router = express.Router();

router.use(
  "/graphql",
  graphqlHTTP((req) => ({
    context: req.headers.context ? req.headers.context : "{}",
    schema: schemaWithMiddleware, -> Registering the SchemaWithMiddlware 
    rootValue: global,
    graphiql: process.env.NODE_ENV !== "production",
    formatError(err) {
      return {
        code: false,
        message:
          "Oh no! Looks like we're facing an issue. :( Please try again in a few moments!",
        exactMessage: err.message,
      };
    },
  }))
);
export default router;

