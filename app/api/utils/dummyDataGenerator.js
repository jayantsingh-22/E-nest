/* eslint-disable @typescript-eslint/no-var-requires */
const Review = require("../models/reviewModel");


const generateDummyData = async () => {
  try {
    await Review.deleteMany({});
    await Instructor.deleteMany({});

    await Review.create([
      {
        courseId: "1",
        reviewerName: "Raju Rastogi",
        reviewText:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
        rating: 4.8,
      },
      {
        courseId: "2",
        reviewerName: "Raju Rastogi",
        reviewText:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make at”",
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
        instructorName: "Alice Johnson",
        instructorTitle: "Senior Developer",
        instructorDescription:
          "Expert in JavaScript and Node.js with over 10 years of experience.",
        instructorImage: "https://example.com/alice.jpg",
      },
      {
        instructorId: "2",
        instructorName: "Bob Brown",
        instructorTitle: "React Specialist",
        instructorDescription:
          "React specialist with extensive experience in front-end development.",
        instructorImage: "https://example.com/bob.jpg",
      },
      {
        instructorId: "3",
        instructorName: "Charlie Davis",
        instructorTitle: "Full Stack Developer",
        instructorDescription:
          "Experienced full stack developer with a passion for teaching.",
        instructorImage: "https://example.com/charlie.jpg",
      },
    ]);

    console.log("Dummy data generated successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateDummyData;
