const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// connect to database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB database connection established successfully");
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
  }
}

// Server listening
function startServer() {
  const PORT = process.env.DB_PORT || 8001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Only start the server and connect to database if not in test environment
const isTest = process.argv.some((arg) => arg.includes("jest"));
console.log(isTest);
if (!isTest) {
  connectToDatabase();
  startServer();
}

// Export the app for testing purposes
module.exports = app;

const Schema = mongoose.Schema;
const GarbageItemSchema = new Schema({
  item: String,
  category: Boolean,
});

const FoodScrapsBin = mongoose.model(
  "Food_Scraps_Bin",
  GarbageItemSchema,
  "Food_Scraps_Bin"
);
const Recycling = mongoose.model("Recycling", GarbageItemSchema, "Recycling");
const Rubbish = mongoose.model("Rubbish", GarbageItemSchema, "Rubbish");

const getItems = async (model, category, res) => {
  try {
    const items = await model.find({ category: category });
    console.log("Items found:", items);
    res.json(items.map((item) => item.item));
  } catch (error) {
    console.log("Error fetching items:", error);
    res.status(400).json("Error: " + error);
  }
};

app.get("/food-scraps-bin/:category", (req, res) =>
  getItems(FoodScrapsBin, req.params.category, res)
);
app.get("/recycling/:category", (req, res) =>
  getItems(Recycling, req.params.category, res)
);
app.get("/rubbish/:category", (req, res) =>
  getItems(Rubbish, req.params.category, res)
);
