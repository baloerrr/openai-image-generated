const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const imageRouter = require("./routes/imageRouter.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// static file
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', imageRouter);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
