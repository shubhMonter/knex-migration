
exports.up = function(knex) {
    return knex.schema.createTable("cities",(table)=>{
        table.increments("id").primary();
        table.string("name").notNullable().unique();
        table.integer("zip_code").notNullable().unique();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("cities")
};
