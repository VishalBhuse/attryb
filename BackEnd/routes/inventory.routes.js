const express = require("express");
const {
  allinventory,
  createInventory,
  deleteInventory,
  getInventoryByid,
  getInventroysearch,
} = require("../controller/inventory.controller");
const inventoryRouter = express.Router();

inventoryRouter.get("/", allinventory);
inventoryRouter.get("/search", getInventroysearch);
inventoryRouter.get("/:id", getInventoryByid);
inventoryRouter.post("/", createInventory);
inventoryRouter.delete("/:id", deleteInventory);

module.exports = inventoryRouter;
