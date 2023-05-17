const route = express.Router();
const controller = require("./controller");

route.post("/api/register", controller.register);
route.get("/api/login", controller.login);
route.put("/api/user/:id", controller.update);
route.delete("/api/user/:id", controller.delete);

module.exports = route;
