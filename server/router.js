const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/api/products/NTB", controller.prod_NTB);
route.get("/api/products/DSK", controller.prod_DSK);
route.get("/api/products/PHONE", controller.prod_PHONE);
route.get("/api/products/COM", controller.prod_COM);
route.get("/api/products/ACC", controller.prod_ACC);

module.exports = route;
