const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const productRoute = require("./app/routes/productRoute");
const userRoutes = require("./app/routes/userRoute");
const cloudinaryRoutes = require("./app/routes/cloudinaryRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000", // front-end origin
  credentials: true, // Allows cookies to be sent with requests
};

// Middleware
app.use(helmet({ crossOriginEmbedderPolicy: false }));
app.use(cors(corsOptions)); // Enables CORS for all routes
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlencoded payloads
app.use(morgan("dev")); // Logs HTTP requests
app.use(cookieParser()); // Parses cookies

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Use routes
app.use("/api/products", productRoute);
app.use("/api/auth", userRoutes);
app.use("/api/cloudinary", cloudinaryRoutes);

const { sequelize } = require("./db"); // Adjust the path to your db.js file

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// generates a random string of 64 characters
// const crypto = require('crypto');
// const sessionSecret = crypto.randomBytes(64).toString('hex');
// console.log(sessionSecret);
