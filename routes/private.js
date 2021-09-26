const express = require("express");
const router = express.Router();
const {

  getPrivateData,
  getUserDashbourd,
  getAdminDashbourd,
  updateUser,
  findUser,
  getAllUsers,
  deleteUser,
  getUserStatistics,
} = require('../controllers/private')
const { protect,isAdmin } = require('../middleware/auth')


//manupulate user data
router.route("/updateuser/:id").put(protect,isAdmin,updateUser)
router.route("/finduser/:id").get(protect,findUser)
router.route("/getallusers").get(protect,getAllUsers)
router.route("/stats").get(protect,getUserStatistics)
router.route("/deleteuser/:id").delete(protect,isAdmin,deleteUser)

//home  page route
router.route("/").get(protect,getPrivateData);

//Admin dashboaud route
router.route("/adminDashbourd").get(protect,isAdmin,getAdminDashbourd);

//user dashboaud
router.route("/userDashbourd").get(protect,getUserDashbourd);


module.exports = router;
