const knex = require("../db/knex");

const getCities= async(req,res)=>{
    try {
        const cities = await knex.select().from("cities");
        res.status(200).json({cities});
    } catch (error) {
        res.status(400).json({message:"something went wrong!",error:{error}});
    }
};
const addCity = async(req,res)=>{
    try {
        const {name,zip_code}=req.body;

        //use validation lib to validate field 
        const add = await knex("cities").insert({
            name:name,zip_code:zip_code
        });
        res.status(200).json({message:"added successfully",data:add});
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
};
const updateCity = async(req,res)=>{
    try {
        const {name,zip_code}=req.body;
         //use validation lib to validate field 
        const update = await knex("cities")
                                .where('id',req.params.id)
                                .update({
                                    name:name,
                                    zip_code:zip_code
                                }).returning("name");
        if(update===1){
            const cities= await knex.select().from("cities");
            res.status(200).json({message:"updated successfully",data:cities});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
                                  
       
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}

const deleteCity = async(req,res)=>{
    try {
        const del = await knex("cities").where("id",req.params.id).del();
        if(del===1){
            const cities= await knex.select().from("cities");
            res.status(200).json({message:"updated successfully",data:cities});
        }else{
            res.status(400).json({message:"something went wrong!"});
        }
    } catch (error) {
         console.log(error);
        res.status(400).json({message:"something went wrong!",error:error});
    }
}
module.exports={
    getCities,
    addCity,
    updateCity,
    deleteCity
}
