import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  courseId: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = model("Review", reviewSchema);

export default Review;
