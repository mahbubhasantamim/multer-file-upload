const express = require("express");
const router = express.Router();
const {
  createService,
  getService,
} = require("../../../controllers/service.controller");
const logoUpload = require("../../../middleware/logoUpload");
const {
  addServiceValidator,
  addServiceValidationHandler,
} = require("../../../middleware/validators/validator");

router
  .route("/")
  .get(getService)
  .post(
    logoUpload,
    addServiceValidator,
    addServiceValidationHandler,
    createService
  );

module.exports = router;
