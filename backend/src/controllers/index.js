const { User, Res } = require("../models/index");

const RegisterUser = async (req, res) => {
  let user = await User(req.body);
  user = await user.save();

  return res.json(user);
};

const LoginUser = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });
  if (!user) {
    return res.json({ status: false });
  } else {
    return res.json({ status: true });
  }
};

const getUserDetails = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });
  let hotels = await Res.find({ user: user });
  user = JSON.parse(JSON.stringify(user));

  user = { ...user, hotel: hotels };
  return res.json(user);
};

const RegisterAsARes = async (req, res) => {
  const hotal = await Res(req.body);
  await hotal.save();

  return res.json({
    res: hotal,
    status: "Registered..",
  });
};

const getAllHotels = async (req, res) => {
  const { _id } = req.body;
  let user = await User.findById(_id);
  let hotels = await Res.find({ user: user });

  return res.json(hotels);
};

const deleteHotel = async (req, res) => {
  const { _id } = req.body;

  let hotels = await Res.findByIdAndDelete(_id);

  return res.json({ status: "Done" });
};

module.exports = {
  RegisterAsARes,
  deleteHotel,
  RegisterUser,
  LoginUser,
  getUserDetails,
  getAllHotels,
};
