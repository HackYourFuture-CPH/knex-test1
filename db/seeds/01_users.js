
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ismail Yagoub',email:'ismail@gmail.com'},
        {id: 2, name: 'Ismail Yagoub',email:'ismail@gmail.com'},
        {id: 3, name: 'Ismail Yagoub',email:'ismail@gmail.com'},

      ]);
    });
};
