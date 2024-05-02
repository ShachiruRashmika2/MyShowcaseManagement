const express=require("express");
const Router=express.Router();

const shwoCart=require("../controllers/cart");

Router.post('/addtocart/:uid',shwoCart.addToCart);
Router.get("/fetchcart/:id",shwoCart.getAllCartItems);
Router.delete("/clearCart/:id",shwoCart.clearCart);
Router.put("/removePro/:id",shwoCart.removeProducts);

module.exports = Router;