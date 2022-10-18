const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {
  listMessagesController,
  postMessageController,
  updateMessageController,
  getMessageByEmail,
  deleteMessageController,
} = require("../controllers/messageController");

const listMessagesRoute = router.get(
  "/messages",
  asyncHandler(listMessagesController)
);
const getMessageByEmailRoute = router.get(
  "/message",
  asyncHandler(getMessageByEmail)
);
const postMessageRoute = router.post(
  "/message",
  asyncHandler(postMessageController)
);
const updateMessageRoute = router.put(
  "/message/:id",
  asyncHandler(updateMessageController)
);
const deleteMessageRoute = router.delete(
  "/message/:id",
  deleteMessageController
);

module.exports = {
  listMessagesRoute,
  postMessageRoute,
  updateMessageRoute,
  getMessageByEmailRoute,
  deleteMessageRoute,
};
