const RegistrationModel = require("../Models/RegistrationModel");

exports.Add = (req, res) => {
  var msg = "";
  try {
    const { data } = req.body;
    RegistrationModel.create(data);
    msg = "Record saved sucessfully!";
  } catch (err) {
    msg = "Error: " + err;
  }
  return res.json({ data: msg });
};

exports.List = async (req, res) => {
  var msg = "";
  try {
    const RegistrationList = await RegistrationModel.find();
    if (RegistrationList.length !== 0) msg = RegistrationList;
    else msg = "No record found :(";
  } catch (err) {
    msg = "Error: " + err;
  }
  return res.json({ data: msg });
};

exports.Login = async (req, res) => {
  var msg = "";
  try {
    const username = req.body.Username;
    const password = req.body.Password;

    const RegistrationList = await RegistrationModel.findOne({
      Username: username,
      Password: password,
    });

    if (RegistrationList !== null && RegistrationList.length !== 0)
      msg = RegistrationList;
    else msg = "Invalid";
  } catch (err) {
    msg = "Error: " + err;
  }
  return res.json({ data: msg });
};
