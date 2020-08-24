
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotels').insert([
        {name: 'Moody Moon',city_id:2},
        {name: 'Mandarin Oriental',city_id:3},
        {name: 'Four Seasons Hotel',city_id:1}
      ]);
    });
};
