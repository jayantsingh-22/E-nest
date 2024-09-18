/* eslint-disable @typescript-eslint/no-var-requires */
const Review = require("../models/reviewModel");
const Mentor = require("../models/mentorModel");



const generateDummyData = async () => {
  try {
    await Review.deleteMany({});
    await Mentor.deleteMany({});

    await Review.create([
      {
        courseId: "1",
        reviewerName: "Raju Rastogi",
        reviewText:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
        rating: 4.8,
      },
      {
        courseId: "2",
        reviewerName: "Raju Rastogi",
        reviewText:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
        rating: 4.8,
      },
      {
        courseId: "3",
        reviewerName: "Raju Rastogi",
        reviewText:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
        rating: 4.8,
      },
    ]);

    await Instructor.create([
      {
        instructorId: "1",
        instructorName: "Chatur Ramlingam",
        instructorTitle: "Prof. at FSSAI",
        instructorDescription:
          "10+ years experience.",
        instructorImage: "/assets/Chatur.png",
      },
      {
        instructorId: "2",
        instructorName: "Chatur Ramlingam",
        instructorTitle: "Prof. at FSSAI",
        instructorDescription:
          "10+ years experience.",
        instructorImage: "/assets/Chatur.png",
      },
      {
        instructorId: "3",
        instructorName: "Chatur Ramlingam",
        instructorTitle: "Prof. at FSSAI",
        instructorDescription:
          "10+ years experience.",
        instructorImage: "/assets/Chatur.png",
      },
      {
        instructorId: "4",
        instructorName: "Chatur Ramlingam",
        instructorTitle: "Prof. at FSSAI",
        instructorDescription:
          "10+ years experience.",
        instructorImage: "/assets/Chatur.png",
      },
    ]);

    console.log("Dummy data generated successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateDummyData;
