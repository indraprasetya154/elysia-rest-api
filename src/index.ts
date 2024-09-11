import { Elysia } from "elysia";

try {
  const app = new Elysia().
                  get("/", () => "Hello Elysia.js")
                  .get('/user/:id', ({ params: { id }}) => id)
                  .get('/category/:id', ({ params: { id }}) => id)
                  .listen(3000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
} catch (error: any) {
  console.log(error.message)
}
