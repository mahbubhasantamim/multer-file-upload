const Service = require("../models/Service.model");

const getService = async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json({
      status: "ok",
      service,
    });
  } catch (error) {
    if (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
};

const createService = async (req, res) => {
  let serviceObject;

  if (req.files && req.files.length > 0) {
    serviceObject = {
      ...req.body,
      serviceLogo: req.files[0].filename,
    };
  } else {
    serviceObject = {
      ...req.body,
    };
  }

  try {
    const service = await Service.create(serviceObject);
    res.status(201).json({
      status: "ok",
      service,
    });
  } catch (error) {
    if (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
};

module.exports = { getService, createService };
