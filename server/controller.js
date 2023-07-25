const ProdPCCOM_DB = require("./model/Schema.Com");
const ProdACC_DB = require("./model/Schema_Acc");
const ProdAll_DB = require("./model/Schema_All");
const ProdDSK_DB = require("./model/Schema_DSK");
const Add_Opinion = require("./model/Schema_Opinion");
const ProdPHONE_DB = require("./model/Schema_Phone");
const ProdNTB_DB = require("./model/schema_NTB");
const ProdQueue = require("./model/Schema_Sale");

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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
    console.log(error.message);
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
      console.log(err);
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
      console.log(err);
    });
};
