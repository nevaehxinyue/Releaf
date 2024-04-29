const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("../server");

// Add dotenv to the server.test.js file to ensure environment variables are loaded.

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log(process.env.DB_url);

// const dotenv = require("dotenv");
// dotenv.config();

let mongod;
let Food_Scraps_Bin, Recycling, Rubbish;

// One time definition model
const defineModels = () => {
  const schema = new mongoose.Schema({ category: String, items: String });
  Food_Scraps_Bin =
    mongoose.models.Food_Scraps_Bin ||
    mongoose.model("Food_Scraps_Bin", schema);
  Recycling = mongoose.models.Recycling || mongoose.model("Recycling", schema);
  Rubbish = mongoose.models.Rubbish || mongoose.model("Rubbish", schema);
};

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log("MongoDB URI:", uri); // Log the URI for debugging

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  defineModels(); // definition model
});

beforeEach(async () => {
  // clear database
  await mongoose.connection.db.dropDatabase();

  // insert test data
  await Food_Scraps_Bin.insertMany([
    { item: "item1", category: true },
    { item: "item2", category: true },
  ]);
  await Recycling.insertMany([
    { item: "item3", category: false },
    { item: "item4", category: false },
  ]);
  await Rubbish.insertMany([
    { item: "item5", category: true },
    { item: "item6", category: true },
  ]);
  console.log(process.env.NODE_ENV);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongod.stop();
});

test("Database should connect and disconnect without error", async () => {
  const connectionState = mongoose.connection.readyState;
  expect(connectionState).toBe(1); // 1 for connected
});

describe("GET /food-scraps-bin/:category", () => {
  it("should return items by category", async () => {
    const response = await request(app).get("/food-scraps-bin/true");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(["item1", "item2"]));
  });
});

describe("GET /recycling/:category", () => {
  it("should return items by category", async () => {
    const response = await request(app).get("/recycling/false");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(["item3", "item4"]));
  });
});

describe("GET /rubbish/:category", () => {
  it("should return items by category", async () => {
    const response = await request(app).get("/rubbish/true");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(["item5", "item6"]));
  });
});
