const yup = require("yup");

module.exports.validateMsg = async (req, res, next) => {
  const { body } = req;

  const TEXT_SCHEMA = yup.string().trim().min(1).max(400).required();

  const MSG_VALIDATION_SCHEMA = yup.object().shape({
    textMsg: TEXT_SCHEMA,
    email: yup.string().email(),
  });

  // isValid;
  // isValidSync;

  // validate;
  // validateSync => validatedUser;

  try {
    const validatedMsg = await MSG_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMsg;
    next();
  } catch (e) {
    next(e);
  }

  // USER_VALIDATION_SCHEMA.validate(body)
  //   .then(validatedUser => {
  //     req.body = validatedUser;
  //     next();
  //   })
  //   .catch(e => {
  //     // res.status(500).send(e);
  //     next(e);
  //   });
};
