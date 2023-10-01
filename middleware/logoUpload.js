const uploader = require("../utils/singleUploader");

function logoUpload(req, res, next) {
  const upload = uploader(
    "logo",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          logo: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = logoUpload;
