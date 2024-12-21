const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Handle POST, PUT, PATCH methods
server.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    req.body.createdAt = Date.now();
  }
  next();
});

// Use the router
server.use(router);

// Port setup
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
