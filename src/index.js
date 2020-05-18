const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const Knex = require("knex");
const knexConfig = require("../knexfile.js");

const pg = Knex(knexConfig.development);

// Create the router
const router = new Router();

// Configure the router
// Get all events
router.get("/events", async ctx => {
  ctx.response.body = await pg("events");
});

// Get one event
router.get("/events/:id", async ctx => {
  // const events = await pg("events").where({ id: ctx.params.id });
  // const event = events[0];

  // Destructuring an array
  const [event] = await pg("events").where({ id: ctx.params.id });

  if (event) {
    ctx.response.body = event;
  }
});

// Create one event
router.post("/events", async ctx => {
  // Extract the parsed request body
  const event = ctx.request.body;

  try {
    // insert event and return created event
    // look for returning
    const [createdEvent] = await pg("events")
      .insert(event)
      .returning("*");

    if (createdEvent) {
      ctx.status = 201;
      ctx.body = createdEvent;
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      message: "Couldn't create new entry, check your request body"
    };
  }
});

// Creating the server app
const app = new Koa();

// Configure the app
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

// Start listening on port 3000
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
