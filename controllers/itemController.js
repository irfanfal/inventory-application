const Item = require("../models/item");
const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const[numItems, numCategories] = await Promise.all([
        Item.countDocuments({}).exec(),
        Category.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Item Inventory",
        item_count: numItems,
        category_count: numCategories,
    });
  });

// Display list of all items.
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name category")
    .sort({title: 1})
    .populate("category")
    .exec();
res.render("item_list", {title: "Item List", item_list: allItems})
});

// Display detail page for a specific item.
exports.item_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Item detail: ${req.params.id}`);
});

// Display item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item create GET");
});

// Handle item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item create POST");
});

// Display item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item delete GET");
});

// Handle item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item delete POST");
});

// Display item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item update GET");
});

// Handle item update on POST.
exports.item_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item update POST");
});
