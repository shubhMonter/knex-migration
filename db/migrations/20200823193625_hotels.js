exports.up = function(knex) {
    return knex.schema.createTable("hotels",(table)=>{
        table.increments("id");
        table.string("name").notNullable();
        table.integer("city_id")
             .references("cities.id")
             .unsigned()
             .onDelete("CASCADE")
             .notNullable()
             .index();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("hotels")
};
