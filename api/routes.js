const express = require("express");
const router = express.Router();

/**
 * API Info endpoint
 */
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      version: process.env.npm_package_version,
      stable: process.env.NODE_ENV === "production",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;