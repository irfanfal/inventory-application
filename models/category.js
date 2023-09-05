const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: [{type: Schema.Types.ObjectId, ref: "Item"}],
    Description: [{type: Schema.Types.ObjectId, ref: "Item"}],
    url: {type: String, required: true},
});

CategorySchema.virtual("url").get(function() {
    return `/catalog/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);