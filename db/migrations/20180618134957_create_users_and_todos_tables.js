
exports.up = function(knex, Promise) {
  return knex.schema.create.Table('users',function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .create.Table('todos',function(table){
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('title').notNullable();
      table.string('completed').notNullable().defaultTo(false);
      table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos').dropTable('users');


};
