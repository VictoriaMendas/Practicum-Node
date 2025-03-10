import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ProductModel = model("Product", productSchema);
