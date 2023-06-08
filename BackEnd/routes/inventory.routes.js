const express = require("express");
const {
  allinventory,
  createInventory,
  deleteInventory,
  getInventoryByid,
} = require("../controller/inventory.controller");
const inventoryRouter = express.Router();

inventoryRouter.get("/", allinventory);
inventoryRouter.get("/:id", getInventoryByid);
inventoryRouter.post("/", createInventory);
inventoryRouter.delete("/:id", deleteInventory);

module.exports = inventoryRouter;
