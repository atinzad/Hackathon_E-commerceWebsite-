const { Schema, model } = require("mongoose");
URLSlugs = require("mongoose-url-slugs");

const ShoeSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: String,
    image: String,
    color: String,
    size: Number,
    price: Number,
    category: String,
    availability: Boolean,
  },
  { timestamps: true }
);

ShoeSchema.plugin(URLSlugs("name"));
module.exports = model("Shoe", ShoeSchema);
