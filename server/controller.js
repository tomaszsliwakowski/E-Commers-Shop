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
      console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
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
    return res.status(200).json(com).end();
  } catch (error) {
    console.log(err.message);
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
      console.log(err.message);
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
      console.log(err.message);
    });
};

exports.SaleProduct = async (req, res) => {
  await ProdQueue.find()
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any products` });
      } else {
        res.send(reasult[0]);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get Sale` });
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
exports.GetOrders = async (req, res) => {
  const { id } = req.params;
  await Order_DB.find({ UserId: id })
    .then((reasult) => {
      if (!reasult) {
        res.status(404).send({ message: `Not found any orders` });
      } else {
        res.send(reasult);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error get Orders` });
    });
};

// USER
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
      return res.status(400).send({ message: "Brak danych" });
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) return res.status(400).json("Użytkownik nie istnieje");

    const expectedHash = helpers.authentication(
      user.authentication.salt,
      password
    );
    if (user.authentication.password !== expectedHash)
      return res.status(403).json("Niepoprawne hasło");
    const salt = helpers.random();
    user.authentication.sessionToken = helpers.authentication(
      salt,
      user._id.toString()
    );
    await user.save();

    res.cookie("SHOP_AUTH", user.authentication.sessionToken, {
      sameSite: "None",
      secure: true,
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json("Błąd logowania");
  }
};

exports.Register = async (req, res) => {
  try {
    const { email, password, username, orderData } = req.body;

    if (!email || !password || !username)
      return res.status(400).json("Brak danych");
    const existingUser = await getUserByEmail(email);
    if (existingUser)
      return res.status(400).json("Podany użytkownik już istnieje");
    const salt = helpers.random();
    const user = await createUser({
      email,
      username,
      orderData,
      authentication: {
        salt,
        password: helpers.authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json("Błąd rejestracji");
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

exports.UpdateUsername = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (!data) return res.status(400);
    const user = await getUserById(id);
    user.username = data;
    await updateUserById(id, user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail update username" });
  }
};
exports.UpdateEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (!data) return res.status(400);
    const user = await getUserById(id);
    user.email = data;
    await updateUserById(id, user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail update email" });
  }
};
exports.UpdatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (!data) return res.status(400);
    const salt = helpers.random();
    const newAuth = {
      salt,
      password: helpers.authentication(salt, data),
    };
    const user = await getUserById(id);
    user.authentication = newAuth;
    await updateUserById(id, user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail update user" });
  }
};
exports.UpdateOrderData = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    console.log(data);
    if (!data) return res.status(400);
    const user = await getUserById(id);
    user.orderData = data;
    await updateUserById(id, user);
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Fail update user" });
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
    if (!SHOP_AUTH) return res.json(null);
    const user = await getUserBySessionToken(SHOP_AUTH);
    return res.status(200).json(user).end();
  } catch (error) {
    res.json(error);
  }
};
