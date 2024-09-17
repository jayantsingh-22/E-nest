const express = require("express");
const cors = require("cors");
const db = require("./database/connection");
const next = require("next");
const dotenv = require("dotenv");

const generateDummyData = require("./utils/dummyDataGenerator");

const reviewRouter = require("./routes/reviewRouter");
const instructorRouter = require("./routes/instructorRouter");

dotenv.config();

db().then(() => {
  generateDummyData();
});

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  server.use("/api/reviews", reviewRouter);
  server.use("/api/instructors", instructorRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
