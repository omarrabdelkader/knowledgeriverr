const errorController = (err, req, res, next) => {
  console.error("Uncaught Error:", err);
  res.sendStatus(500).send("Something went wrong! Please, try again!");
};

module.exports = { errorController };
