const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const db = {
  events: [
    {
      id: 1,
      title: "Challenge Session",
      details: "Please bring beer!",
      date: "04/07/2020 20:00",
      location: "https://zoom.us/j/861156*454"
    },
    {
      id: 2,
      title: "Study Group",
      details: "Please bring your laptop!",
      date: "06/19/2020 16:00",
      location: "Albertina"
    },
    {
      id: 3,
      title: "Pair Programming Session",
      details: "Please bring pizza!",
      date: "05/06/2020 15:15",
      location: "https://zoom.us/j/861156*454"
    },
    {
      id: 4,
      title: "Code & Cook",
      details: "Please bring creative recips",
      date: "12/07/2020 18:00",
      location: "Basislager Coworking, Peterssteinweg 14, Leipzig"
    },
    {
      id: 5,
      title: "Revising Sessions",
      details: "Please bring loads of questions",
      date: "06/02/2020 17:00",
      location: "Unter den Linden 6"
    },
    {
      id: 6,
      title: "Pair Programming Session",
      details: "We'll be programming together in pairs!!",
      date: "02/04/2020 16:00",
      location: "Seeburgstraße 11, 04103 Leipzig"
    }
  ]
};

// Create the router
const router = new Router();

// Configure the router
// Get all events
router.get("/events", ctx => {
  ctx.response.body = db.events;
});

// Get one event
router.get("/events/:id", ctx => {
  const event = db.events.find(event => event.id == ctx.params.id);
  if (event) {
    ctx.response.body = event;
  }
});

// Create one event
router.post("/events", ctx => {
  const event = ctx.request.body;
  event.id = db.events.length + 1; // Not safe if we allow deletion
  db.events.push(event);

  ctx.response.status = 201;
  ctx.response.body = event;
});

// Creating the server app
const app = new Koa();

// Configure the app
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

// Start listening on port 3001
app.listen(3001);
