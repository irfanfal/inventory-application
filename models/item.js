const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {type: String, required: true, maxLength:100},
    description: {type: String, required: true},
    category: [{type: Schema.Types.ObjectId, ref: "Category"}],
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    url: {type: String, required: true},
});

ItemSchema.virtual("url").get(function() {
    return `/catalog/book/${this._id}`;
});

module.exports = mongoose.model("Item", ItemSchema);