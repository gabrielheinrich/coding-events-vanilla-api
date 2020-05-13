const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const knex = require("knex");

const db = knex(require("../knexfile.js").development);

// Create the router
const router = new Router();

// Configure the router
// Get all events
router.get("/events", async ctx => {
  ctx.response.body = await db("events").select("*");
});

// Get one event
router.get("/events/:id", async ctx => {
  const event = await db("events")
    .select("*")
    .where({ id: ctx.params.id });
  if (event) {
    ctx.response.body = event;
  }
});

// Create one event
router.post("/events", async ctx => {
  try {
    const [event] = await db("events")
      .insert(ctx.request.body)
      .returning("*");
    ctx.response.status = 201;
    ctx.response.body = event;
  } catch (error) {
    ctx.response.body = {
      message: "Invalid input data"
    };
    ctx.status = 400;
  }
});

// Creating the server app
const app = new Koa();

// Configure the app
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

// Start listening on port 3001
app.listen(3001);
