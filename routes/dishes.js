const express = require("express");
const router = express.Router();
const dishes = require("../controller/food_dishes")
router.get("/all",dishes.getDishes);
router.get("/byhotel/:hotelid",dishes.getDishesByHotel);
router.post("/add",dishes.addDish);
router.put("/update/:id",dishes.updateDish);
router.delete("/delete/:id",dishes.deleteDish);
module.exports= router;