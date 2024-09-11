import { Elysia } from "elysia";

const portString = process.env.APP_PORT;
if (!portString) {
  throw new Error("APP_PORT is not defined");
}

const port = parseInt(portString, 10);
if (isNaN(port)) {
  throw new Error("APP_PORT is not a valid number");
}

const app = new Elysia().
                get("/", () => "Hello Elysia.js")
                .get('/user/:id', ({ params: { id }}) => id)
                .get('/category/:id', ({ params: { id }}) => id)
                .listen(port);

console.log(
  `🦊 ${process.env.APP_NAME} is running at ${app.server?.hostname}:${app.server?.port}`
);
