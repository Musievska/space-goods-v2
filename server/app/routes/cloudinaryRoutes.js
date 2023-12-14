const express = require("express");
const router = express.Router();
const axios = require("axios"); // Using axios


router.get("/images", async (req, res) => {
  try {
    const cloudName = "dfgwspmge";
    const apiKey = "941778728811537";
    const apiSecret = "McoGN8ZEcovthGTD5s77x_m5mEs";
    const nextCursor = req.query.next_cursor; // Get next_cursor from query params

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;
    const authString =
      "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const params = {
      max_results: 20, // or any number you prefer
    };
    if (nextCursor) {
      params.next_cursor = nextCursor;
    }

    const response = await axios.get(url, {
      headers: { Authorization: authString },
      params: params,
    });

    res.json(response.data); // This will include both resources and the next_cursor
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    res.status(500).send("Error fetching images");
  }
});

module.exports = router;
