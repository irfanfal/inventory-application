#! /usr/bin/env node



// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Item = require("./models/item");
const Category = require("./models/category");

const items = [];
const categories = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");

   await createCategories();
  await createItems();
 
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}


async function categoryCreate(index, name, description) {
  const category = new Category({ name: name, description: description });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function itemCreate(index, name, description, category, price, stock) {
  const itemdetail = {
    name: name,
    description: description,
    category: category,
    price: price,
    stock: stock,
  };

  const item = new Item(itemdetail);
  await item.save();
  items[index] = item;
  console.log(`Added item: ${name}`);
}





async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Elektronik", "Alat-alat Elektronik"),
    categoryCreate(1, "Non-Elektronik", "Alat-alat Non-Elektronik"),
  ]);
}

async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(0, "Laptop","Laptop dengan prosessor terbaru", categories[0], "10,000,000",10),
    itemCreate(1, "Handphone","Hp dengan teknologi terbaru", categories[0], "3,000,000", 10),
    itemCreate(2, "Buku", "Novel best seller", categories[1], "100,000", 100),
  ]);
}
