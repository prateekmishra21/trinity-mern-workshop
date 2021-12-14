const express = require("express");
const router = express.Router();
const {
  RegisterAsARes,
  RegisterUser,
  LoginUser,
  getUserDetails,
  getAllHotels,
  deleteHotel,
} = require("../controllers/index");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/user-details", getUserDetails);
router.post("/create-new-res", RegisterAsARes);
router.post("/get-all-hotels", getAllHotels);
router.post("/delete-hotel", deleteHotel);

module.exports = router;
