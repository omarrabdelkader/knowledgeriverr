const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {
  listBookController,
  postBookController,
  updateBookController,
  deleteBookController,
  getBookByIdController,
} = require("../controllers/bookController");

const listBooksRoute = router.get("/books", asyncHandler(listBookController));
const getBookByIdRoute = router.get(
  "/book/:id",
  asyncHandler(getBookByIdController)
);
const postBookRoute = router.post("/book", asyncHandler(postBookController));
const updateBookRoute = router.put(
  "/book/:id",
  asyncHandler(updateBookController)
);
const deleteBookRoute = router.delete(
  "/book/:id",
  asyncHandler(deleteBookController)
);

module.exports = {
  listBooksRoute,
  postBookRoute,
  updateBookRoute,
  deleteBookRoute,
  getBookByIdRoute,
};
