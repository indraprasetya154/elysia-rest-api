import { Elysia } from "elysia";

try {
  const app = new Elysia().
                  get("/", () => "Rest API with Elysia.js")
                  .get('/user/:id', ({ params: { id }}) => id)
                  .get('/category/:id', ({ params: { id }}) => id)
                  .listen({
                    port: 3000,
                    hostname: '0.0.0.0', // This allows external access, including from CapRover
                  });

  console.log(app)
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
} catch (error: any) {
  console.log(error.message)
}
