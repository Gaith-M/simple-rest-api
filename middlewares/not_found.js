module.exports = (req, res) => {
  res.send(`404: ${req.path} does not exist`);
};
