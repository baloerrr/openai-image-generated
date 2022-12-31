const express = require("express");
const { generateImageRequest } = require("../controllers/imageController.js");

const router = express.Router();

router.post('/openai', generateImageRequest);

module.exports = router;