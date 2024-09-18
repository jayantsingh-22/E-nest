import { Schema, model, models } from "mongoose";

const mentorSchema = new Schema({
  mentorId: {
    type: String,
    required: true,
  },
  mentorName: {
    type: String,
    required: true,
  },
  mentorTitle: {
    type: String,
    required: true,
  },
  mentorDescription: {
    type: String,
    required: true,
  },
  mentorImage: {
    type: String,
    required: true,
  },
});

const Mentor = models.Mentor || model("Mentor", mentorSchema);

export default Mentor;
