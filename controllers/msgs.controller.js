const Msg = require("../models/msg");
const { v4: uuidv4 } = require("uuid");

module.exports.getMsgs = (req, res) => {
  const foundMsgs = Msg.getMsgs();
  res.status(200).send(foundMsgs);
};

module.exports.createMsg = (req, res) => {
  const { body } = req;

  const createdMsg = Msg.createMsg(body);

  res.status(201).send(createdMsg);
};

module.exports.updateMsg = (req, res) => {
  const { body } = req;
  const {
    params: { msgId },
  } = req;
  const indexOfUptMsg = Msg.msgs.findIndex((msg) => msgId === msg.id);
  if (indexOfUptMsg === -1) {
    res.status(404).send("Not found");
  } else {
    const updatedMsg = { ...Msg.msgs[indexOfUptMsg], ...body };
    res.status(200).send(updatedMsg);
  }
};

module.exports.deleteMsg = (req, res) => {
  const {
    params: { msgId },
  } = req;
  const indexOfMsg = Msg.msgs.findIndex((msg) => msgId === msg.id);
  if (indexOfMsg === -1) {
    res.status(404).send("Not found");
  } else {
    const [deletedMsg] = Msg.msgs.splice(indexOfMsg, 1);
    res.status(200).send(deletedMsg);
  }
};
