// external imports
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const { unlink } = require("fs");
const Service = require("../../models/Service.model");

// add user
const addServiceValidator = [
  check("serviceName")
    .isLength({ min: 1 })
    .withMessage("Service Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),

  check("serviceID")
    .isLength({ min: 1 })
    .withMessage("Service ID is required")
    .trim()
    .custom(async (value) => {
      try {
        const serviceID = await Service.findOne({ serviceID: value });
        if (serviceID) {
          throw createError("ServiceID already is use!");
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),

  check("serviceDesc").trim(),
];

const addServiceValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    // remove uploaded files
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../../public/uploads/logo/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }

    // response the errors
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  addServiceValidator,
  addServiceValidationHandler,
};
