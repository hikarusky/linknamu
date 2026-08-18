import mongoose, { Schema } from "mongoose";

export interface IClick {
  linkId: string;
  count: number;
}

const ClickSchema = new Schema<IClick>({
  linkId: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

export const Click =
  mongoose.models.Click || mongoose.model<IClick>("Click", ClickSchema);
