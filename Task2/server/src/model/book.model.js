import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    bookUniqeNo: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
    },
    publishedYear: {
      type: Number,
    },
    totalCopies: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
