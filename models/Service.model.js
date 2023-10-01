const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  serviceID: {
    type: String,
    required: true,
    unique: true,
  },
  serviceDesc: {
    type: String,
  },
  serviceLogo: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
