import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Page", default: null },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Page = mongoose.model("Page", PageSchema);
export default Page;
