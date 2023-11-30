const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const productRoute = require("./app/routes/productRoute");

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({ crossOriginEmbedderPolicy: false }));
app.use(cors("")); // Enables CORS for all routes
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with urlencoded payloads
app.use(morgan("dev")); // Logs HTTP requests
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Use routes
app.use("/api/products", productRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
