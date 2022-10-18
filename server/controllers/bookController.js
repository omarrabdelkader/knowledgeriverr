const Book = require("../models/bookModel");

// @desc Get boots
// @route GET v1/api/books
// @acess Public

const listBookController = async (req, res) => {
  let { page, size } = req.query;

  if (!page && !size) {
    page = 1;
    size = 10;
  }

  const limit = parseInt(size);
  const skip = (page - 1) * size;
  const books = await Book.find().limit(limit).skip(skip);

  res.status(200).json({ books });
};

const getBookByIdController = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("This book does not exist!");
  }
  res.json(book);
};

// @desc Post books
// @route POST v1/api/book
// @acess Public

const postBookController = async (req, res) => {
  const { title, author, price, description, img } = req.body;

  const books = await Book.create({
    title: title,
    author: author,
    price: price,
    description: description,
    img: img,
  });

  res.status(200).json({ message: "Book has been posted sucessfully!" });
};

// @desc Put books
// @route PUT api/books/:id
// @acess Private

const updateBookController = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("This book does not exist!");
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: "Book has been updated" });
};

// @desc Delete boots
// @route DELETE api/boot/:id
// @acess Private
const deleteBookController = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("This book does not exist!");
  }

  await book.remove();

  res.status(200).json({ message: "Book has been deleted!" });
};

module.exports = {
  listBookController,
  postBookController,
  updateBookController,
  deleteBookController,
  getBookByIdController,
};
