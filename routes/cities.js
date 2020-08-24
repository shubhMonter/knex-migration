const express = require("express");
const router = express.Router();
const cities = require("../controller/cities")
router.get("/all",cities.getCities);
router.post("/add",cities.addCity);
router.put("/update/:id",cities.updateCity);
router.delete("/delete/:id",cities.deleteCity);
module.exports= router;