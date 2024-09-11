import { Elysia } from "elysia";

const app = new Elysia().
                get("/", () => "Hello Elysia.js")
                .get('/user/:id', ({ params: { id }}) => id)
                .get('/category/:id', ({ params: { id }}) => id)
                .listen(3000);

console.log(app)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
