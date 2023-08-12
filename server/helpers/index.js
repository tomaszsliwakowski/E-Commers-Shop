const crypto = require("crypto");

const SECRET = "SHOP-REST-API";

const random = () => crypto.randomBytes(128).toString("base64");
const authentication = (salt, password) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};

module.exports = {
  random,
  authentication,
  SECRET,
};
