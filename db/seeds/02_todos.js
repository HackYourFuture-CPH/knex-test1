
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          id: 1,
          title: 'buses station',
          user_id:'4'
        },
        {
          id: 2,
          title: 'buses station',
          user_id:'4'
        },
        {
          id: 3,
          title: '',
          user_id:'4'
        },
        {
          id: 4,
          title: 'african music',
          user_id:'4'
        },
        {
          id: 5,
          title: 'artist',
          user_id:'4'
        },
        {
          id: 6,
          title: 'online shopping',
          user_id:'4'
        },
      ]);
    });
};
