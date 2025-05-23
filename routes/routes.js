const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const postCarousel = require("../controllers/carousel/postCarousel");
const getCarousel = require("../controllers/carousel/getCarousel");
const getCategories = require("../controllers/categories/getCategories");
const postCategories = require("../controllers/categories/postCategories");
const postproducts = require("../controllers/products/postProduct");
const getproducts = require("../controllers/products/getProducts");
const getProduct = require("../controllers/products/getProduct");
const signUp = require("../controllers/authorisation/signUp");
const login = require("../controllers/authorisation/login");
const guestToken = require("../controllers/authorisation/guestToken");
const resetPassword = require("../controllers/authorisation/resetPassword");
const getCategory = require("../controllers/categories/getCategory");
const updateProduct = require("../controllers/products/updateProduct");
const postOtp = require("../controllers/OTP/postOtp");
const addWishList = require("../controllers/wishList/addWishList");
const getWishList = require("../controllers/wishList/getWishList");
const deleteWishList = require("../controllers/wishList/deleteWishList");
const postCart = require("../controllers/cart/postCart");
const deleteCart = require("../controllers/cart/deleteCart");
const mergeCart = require("../controllers/cart/merge");
router.post("/carousel", postCarousel.postCarousel);
router.get("/carousel", getCarousel.getCarousel);
router.get("/categories", getCategories.getCategories);
router.post("/categories", postCategories.postCategories);

router.post("/products", postproducts.postProduct);
router.get("/products", getproducts.getProducts);
router.get("/Product/:_id", getProduct.getProduct);
router.put("/product", updateProduct.updateProduct); // Assuming you have an updateProduct function in postproducts

router.post("/signUp", signUp.signUp);
router.post("/login", login.login);
router.post("/guestToken", guestToken.guestToken);
router.post("/resetPassword", resetPassword.resetPassword);
router.get("/category/:_id", getCategory.getCategory); // Adjust the path as necessary
router.post("/otp", postOtp.postOtp); // Adjust the path as necessary

router.post("/wishList", verifyToken.verifyToken, addWishList.addWishList);
// Adjust the path as necessary
router.delete("/wishList", verifyToken.verifyToken, deleteWishList.deleteWishList); // Adjust the path as necessary
router.get("/wishList", verifyToken.verifyToken, getWishList.getWishList); // Adjust the path as necessary  

router.post("/cart", verifyToken.verifyToken, postCart.postCart); // Adjust the path as necessary
router.delete("/cart", verifyToken.verifyToken, deleteCart.deleteCart); // Adjust the path as necessary
router.post("/cart/merge", verifyToken.verifyToken, mergeCart.mergeCart);
// router.post("/cart/merge", mergeCart.mergeCart);



module.exports = router;