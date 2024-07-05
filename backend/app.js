require("dotenv/config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const api = process.env.API_URL;
const productsRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");
const orderRouter = require("./routers/orders");
const userRouter = require("./routers/users");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Routers
app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoryRouter);
app.use(`${api}/orders`, orderRouter);
app.use(`${api}/users`, userRouter);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  // console.log(api);
  // console.log("Connection String:", connectionString);

  console.log("Server is running http://localhost:3000");
});
