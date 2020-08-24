const knex = require("../db/knex");

const getHotels= async(req,res)=>{
    try {
        const hotels = await knex.select().from("hotels");
        res.status(200).json({hotels});
    } catch (error) {
        res.status(400).json({message:"something went wrong!",error:{error}});
    }
};
const getHotelsByCity= async(req,res)=>{
    try {
        const hotels = await knex.select().from("hotels").where("city_id",req.params.cityid);
        res.status(200).json({hotels});
    } catch (error) {
        res.status(400).json({message:"something went wrong!",error:{error}});
    }
}
const addHotel = async(req,res)=>{
    try {
        const {name,cityid}=req.body;

        //use validation lib to validate field 
        const add = await knex("hotels").insert({
            name:name,city_id:cityid
        });

       if(add[0]>0){
            const hotels= await knex.select().from("hotels");
            res.status(200).json({message:"Added successfully",data:hotels});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
};
const updateHotel = async(req,res)=>{
    try {
        const {name,cityid}=req.body;
         //use validation lib to validate field 
        const update = await knex("hotels")
                                .where('id',req.params.id)
                                .update({
                                    name:name,
                                    city_id:cityid
                                });
        if(update===1){
            const hotels= await knex.select().from("hotels");
            res.status(200).json({message:"updated successfully",data:hotels});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
                                  
       
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}

const deleteHotel = async(req,res)=>{
    try {
        const del = await knex("hotels").where("id",req.params.id).del();
        if(del===1){
            const hotels= await knex.select().from("hotels");
            res.status(200).json({message:"updated successfully",data:hotels});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
    } catch (error) {
         console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}
module.exports={
    getHotels,
    getHotelsByCity,
    addHotel,
    updateHotel,
    deleteHotel,

}
