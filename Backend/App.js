require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("Mongo connected!"));

const RegistrationRoute = require("./Routes/RegistrationRoute");
const ProductRoute = require("./Routes/ProductRoute");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/Registration", RegistrationRoute);
app.use("/Product", ProductRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
