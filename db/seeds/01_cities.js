
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        { name: 'pune',zip_code:1111},
        { name: 'mumbai',zip_code:2222},
        { name: 'banglore',zip_code:3333}
      ]);
    });
};
