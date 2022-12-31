const express = require("express");

/**
 * 
 * @param {express.Error} err 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
module.exports = function (err, req, res, next) {
  if (err.status_code && err.message) {

    if (err.msg_array) {
      return res.status(err.status_code).json({
        status: err.status_code,
        message: err.message,
        msg_array: err.msg_array
      });
    }

    return res.status(err.status_code).json({
      status: err.status_code,
      message: err.message,
    });

  }

  return res.status(500).json({
    status: 500,
    message: "Something went wrong",
  });
}