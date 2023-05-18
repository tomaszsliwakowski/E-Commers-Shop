const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.post("/api/register", controller.register);
route.post("/api/login", controller.login);
route.get("/api/user", controller.user);
route.put("/api/user/:id", controller.update);
route.delete("/api/user/:id", controller.delete);

module.exports = route;
