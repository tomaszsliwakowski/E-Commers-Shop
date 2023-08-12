const mongoose = require("mongoose");
const merge = require("lodash");
const get = require("lodash");

const getUserBySessionToken = (sessionToken) =>
  User_DB.findOne({ "authentication.sessionToken": sessionToken });

const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id");
    if (!currentUserId) return res.send(403);
    if (currentUserId.toString() !== id) return res.status(403);
    next();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};

const isAuthenticated = async (req, res, next) => {
  try {
    const sessionToken = req.cookies["SHOP_AUTH"];
    if (!sessionToken) return res.status(403);
    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) return res.status(403);
    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
module.exports = { isAuthenticated, isOwner };
