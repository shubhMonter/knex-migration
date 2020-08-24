
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food_dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_dishes').insert([
        { name: 'Paneer Butter Masala',price:190,hotel_id:3},
        { name: 'Shev Bhaji',price:120,hotel_id:3},
        { name: 'Anda Bhurji',price:120,hotel_id:3},
        { name: 'Chicken Kadai',price:200,hotel_id:3},
        { name: 'Soyabean Chilli',price:150,hotel_id:3},
        { name: 'Paneer Chilli',price:190,hotel_id:3},
        { name: 'Veg Pulao',price:150,hotel_id:3},
        { name: 'Mutton Dum Biryani',price:300,hotel_id:3},
        { name: 'Chicken Dum Biryani',price:200,hotel_id:3},
        { name: 'Paneer Bhurji',price:150,hotel_id:3},
        { name: 'Matar Paneer',price:180,hotel_id:2},
        { name: 'Palak Paneer',price:200,hotel_id:2},
        { name: 'Paneer Handi',price:160,hotel_id:2},
        { name: 'Paneer Kali Mirch',price:170,hotel_id:2},
        { name: 'Paneer Dechki',price:140,hotel_id:2},
        { name: 'Paneer Masala',price:170,hotel_id:2},
        { name: 'Paneer Butter Masala',price:200,hotel_id:2},
        { name: 'Crushed Paneer Butter Masala',price:200,hotel_id:2},
        { name: 'Paneer Do Pyaza',price:190,hotel_id:2},
        { name: 'Paneer Pahadi',price:185,hotel_id:2},
        { name: 'Paneer Tikka Masala',price:195,hotel_id:2}
      ]);
    });
};
