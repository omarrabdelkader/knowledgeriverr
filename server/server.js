const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const colors = require("colors");
const bodyParser = require("body-parser");

const { errorController } = require("./middleware/errorController");

const {
  postBookRoute,
  listBooksRoute,
  updateBookRoute,
  deleteBookRoute,
  getBookByIdRoute,
} = require("./routes/bookRoute");

const {
  postMessageRoute,
  listMessagesRoute,
  updateMessageRoute,
  getMessageByEmailRoute,
  deleteMessageRoute,
} = require("./routes/messageRoute");

const connectDB = require("./db/db");

const port = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//

// public end-points

// book route
app.use("/v1/api", listBooksRoute);
app.use("/v1/api", getBookByIdRoute);
app.use("/v1/api", postBookRoute);
app.use("/v1/api", updateBookRoute);
app.use("/v1/api", deleteBookRoute);

// message route
app.use("/v1/api", listMessagesRoute);
app.use("/v1/api", postMessageRoute);
app.use("/v1/api", updateMessageRoute);
app.use("/v1/api", getMessageByEmailRoute);
app.use("/v1/api", deleteMessageRoute);

//

// error controller
app.use(errorController);

app.listen(port, () => {
  console.log("Server has started..".yellow);
});
