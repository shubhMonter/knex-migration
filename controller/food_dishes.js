const knex = require("../db/knex");

const getDishes= async(req,res)=>{
    try {
        const {limit,pageno}=req.query;
        const food_dishes = await knex.select().from("food_dishes").paginate({ perPage:limit, currentPage: pageno });
        res.status(200).json({food_dishes});
    } catch (error) {
        res.status(400).json({message:"something went wrong!",error:{error}});
    }
};
const getDishesByHotel= async(req,res)=>{
    try {
        const {limit,pageno}=req.query;
        const food_dishes = await knex.select().from("food_dishes").where("hotel_id",req.params.hotelid).paginate({ perPage:limit, currentPage: pageno });
        res.status(200).json({food_dishes});
    } catch (error) {
        res.status(400).json({message:"something went wrong!",error:{error}});
    }
}
const addDish = async(req,res)=>{
    try {
        const {name,hotelid,price}=req.body;

        //use validation lib to validate field 
        const add = await knex("food_dishes").insert({
            name:name,hotel_id:hotelid,price:price
        });

       if(add[0]>0){
            const food_dishes= await knex.select().from("food_dishes");
            res.status(200).json({message:"Added successfully",data:food_dishes});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
};
const updateDish = async(req,res)=>{
    try {
        const {name,hotelid,price}=req.body;
         //use validation lib to validate field 
        const update = await knex("food_dishes")
                                .where('id',req.params.id)
                                .update({
                                    name:name,
                                    hotel_id:hotelid,
                                    price:price
                                });
        if(update===1){
            const food_dishes= await knex.select().from("food_dishes");
            res.status(200).json({message:"updated successfully",data:food_dishes});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
                                  
       
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}

const deleteDish = async(req,res)=>{
    try {
        const del = await knex("food_dishes").where("id",req.params.id).del();
        if(del===1){
            const food_dishes= await knex.select().from("food_dishes");
            res.status(200).json({message:"updated successfully",data:food_dishes});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
    } catch (error) {
         console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}
module.exports={
    getDishes,
    getDishesByHotel,
    addDish,
    updateDish,
    deleteDish,
}
