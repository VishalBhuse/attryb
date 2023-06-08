const asyncHandler = require("express-async-handler");
const inventoryModel = require("../model/inventory.model");

const allinventory = asyncHandler(async (req, res) => {
  const findinventory = await inventoryModel.find();
  res.send(findinventory);
});

const getInventoryByid = async (req, res) => {
  try {
    const { id } = req.params;
    const inventoryItem = await inventoryModel.findById(id);

    if (!inventoryItem) {
      return res.status(404).send("Inventory not found");
    }

    res.send(inventoryItem);
  } catch (error) {
    res.status(500).send("Something went wrong " + error);
  }
};

const createInventory = async (req, res) => {
  try {
    const newInventory = await inventoryModel.create(req.body);
    res.send("Inventory created successfully: " + newInventory._id);
  } catch (error) {
    res.status(500).send("Something went wrong: " + error);
  }
};

const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInventory = await inventoryModel.findByIdAndDelete(id);

    if (!deletedInventory) {
      return res.status(404).send("Inventory not found");
    }

    res.send("Inventory deleted successfully");
  } catch (error) {
    res.status(500).send("Something went wrong: " + error);
  }
};

module.exports = {
  allinventory,
  createInventory,
  deleteInventory,
  getInventoryByid,
};
