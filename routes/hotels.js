const express = require("express");
const router = express.Router();
const hotels = require("../controller/hotels")
router.get("/all",hotels.getHotels);
router.get("/bycity/:cityid",hotels.getHotelsByCity);
router.post("/add",hotels.addHotel);
router.put("/update/:id",hotels.updateHotel);
router.delete("/delete/:id",hotels.deleteHotel);
module.exports= router;