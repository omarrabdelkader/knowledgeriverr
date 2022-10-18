const Message = require("../models/messageModel");

// @desc Get boots
// @route GET v1/api/books
// @acess Public

const listMessagesController = async (req, res) => {
  const messages = await Message.find();
  res.status(200).json({ messages });
};

// ----

const getMessageByEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new Error("Provide us with the email");
  }
  const customerMessage = await Message.findOne({ email });

  if (!customerMessage) {
    throw new Error("This message does not exist, re-check the email!");
  }

  res.json(customerMessage);
};

// @desc Post Message
// @route POST v1/api/message
// @acess Public

const postMessageController = async (req, res) => {
  const { name, email, message } = req.body;
  const sentMessage = await Message.create({
    name: name,
    email: email,
    message: message,
  });
  res.status(200).json({ message: "Message has been sent!" });
};

const updateMessageController = async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (!message) {
    res.status(400);
    throw new Error("This book does not exist!");
  }

  const updatedMessage = await Message.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedMessage);
};

const deleteMessageController = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    throw new Error("Please provide us with the email!");
  }

  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(400);
    throw new Error("This message does not exist!");
  }

  await message.remove();

  res.status(200).json({ message: "Message has been deleted!" });
};

module.exports = {
  listMessagesController,
  postMessageController,
  updateMessageController,
  getMessageByEmail,
  deleteMessageController,
};
