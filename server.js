require("dotenv").config();
const { default: mongoose } = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//database connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
});

//routes
const movieRouter = require("./routes/movies");
app.use("/api/movies", movieRouter);

//port listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
