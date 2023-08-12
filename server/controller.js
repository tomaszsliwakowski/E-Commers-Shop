const mongoose = require("mongoose");
const ProdPCCOM_DB = require("./model/Schema.Com");
const ProdACC_DB = require("./model/Schema_Acc");
const ProdAll_DB = require("./model/Schema_All");
const ProdDSK_DB = require("./model/Schema_DSK");
const Add_Opinion = require("./model/Schema_Opinion");
const ProdPHONE_DB = require("./model/Schema_Phone");
const ProdNTB_DB = require("./model/schema_NTB");
const ProdQueue = require("./model/Schema_Sale");
const Order_DB = require("./model/Schema_Order");
const User_DB = require("./model/Schema_User");
const helpers = require("./helpers/index");
const crypto = require("crypto");

exports.prod_NTB = async (req, res) => {
  await ProdNTB_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};
exports.prod_PHONE = async (req, res) => {
  await ProdPHONE_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};
exports.prod_DSK = async (req, res) => {
  await ProdDSK_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};
exports.prod_COM = async (req, res) => {
  await ProdPCCOM_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};
exports.prod_ACC = async (req, res) => {
  await ProdACC_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};
exports.prod_All = async (req, res) => {
  await ProdAll_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get NTB` });
      throw err.message;
    });
};

exports.Single_prod = async (req, res) => {
  await ProdAll_DB.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(
          reasult[0].products.filter(
            (item) => item.id === parseInt(req.params["id"])
          )
        );
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get product` });
      throw err.message;
    });
};
exports.AddOpinion = async (req, res) => {
  try {
    const com = await Add_Opinion.create({
      uid: req.body.uid,
      email: req.body.email,
      name: req.body.name,
      content: req.body.content,
      date: req.body.date,
      prod_id: req.body.prod_id,
      opinionId: req.body.opinionId,
    });
    await com.save();
  } catch (error) {
    throw error.message;
  }
};
exports.GetOpinion = async (req, res) => {
  await Add_Opinion.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any opinion` });
      } else {
        res.send(reasult.filter((item) => item.prod_id === req.params["id"]));
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get opinion` });
      throw err.message;
    });
};

exports.DeleteOpinion = async (req, res) => {
  const id = req.params.id;
  await Add_Opinion.findByIdAndDelete(id)
    .then((res) => {
      if (!res) {
        res.status(404).send({ message: "Not delete opinion" });
      } else {
        res.send({ message: "Opinion was deleted succesfully" });
      }
    })
    .catch((err) => {
      res.send({ message: `Could not delete Opinion with id ${id}` });
      throw err.message;
    });
};

exports.SaleProduct = async (req, res) => {
  await ProdQueue.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult.filter((item) => item.queue === 1)[0]);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get Sale` });
      throw err.message;
    });
};

exports.AddOrder = async (req, res) => {
  try {
    const order = await Order_DB.create(req.body);
    await order.save();
    res.status(200).send({ message: "Order complete" });
  } catch (error) {
    res.status(500).send({ message: "Order fail" });
    throw error.message;
  }
};

// USER
const getUsers = () => User_DB.find();
const getUserByEmail = (email) => User_DB.findOne({ email });
const getUserById = (id) => User_DB.findById(id);
const createUser = (values) =>
  new User_DB(values).save().then((user) => user.toObject());
const deleteUserById = (id) => User_DB.findOneAndDelete({ _id: id });
const updateUserById = (id, values) => User_DB.findByIdAndUpdate(id, values);
const getUserBySessionToken = (sessionToken) =>
  User_DB.findOne({ "authentication.sessionToken": sessionToken });
//

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send({ message: "No data" });
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) return res.status(400).send({ message: "User not exist" });
    const expectedHash = helpers.authentication(
      user.authentication.salt,
      password
    );
    if (user.authentication.password !== expectedHash) return res.status(403);
    const salt = helpers.random();
    user.authentication.sessionToken = helpers.authentication(
      salt,
      user._id.toString()
    );
    await user.save();

    res.cookie("SHOP_AUTH", user.authentication.sessionToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Login fail" });
  }
};

exports.Register = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      return res.status(400).send({ message: "No data" });
    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(400).send({ message: "User exist" });
    const salt = helpers.random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: helpers.authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Register fail" });
  }
};

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail get users" });
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await deleteUserById(id);
    return res.json(deleteUser);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail delete user" });
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    if (!username) return res.status(400);
    const user = await getUserById(id);
    user.username = username;
    await updateUserById(id, user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail update user" });
  }
};

exports.Profile = async (req, res) => {
  try {
    const { SHOP_AUTH } = req.cookies;
    res.send(SHOP_AUTH);
    // if (!SHOP_AUTH) return res.json(null);
    // const user = await getUserBySessionToken(SHOP_AUTH);
    // res.send(user);
  } catch (error) {
    res.json(error);
  }
};
