const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.get("/api/products/Laptopy", controller.prod_NTB);
route.get("/api/products/Komputery", controller.prod_DSK);
route.get("/api/products/Smartphony", controller.prod_PHONE);
route.get("/api/products/Podzespoly-komputerowe", controller.prod_COM);
route.get("/api/products/Akcesoria", controller.prod_ACC);

module.exports = route;
