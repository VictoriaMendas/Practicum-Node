import { model } from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    balance: { type: Number, default: 100 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
export const UserModel = model("User", UserSchema);
