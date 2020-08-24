

exports.up = function(knex) {
    return knex.schema.createTable("food_dishes",(table)=>{
        table.increments('id').primary();
        table.string("name");
        table.integer("price");
        table.integer("hotel_id")
             .references("hotels.id")
             .unsigned()
             .onDelete("CASCADE")
             .notNullable()
             .index();
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("food_dishes")
};