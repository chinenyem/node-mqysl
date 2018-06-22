
exports.up = function(knex, Promise) {
 return knex.schema.alterTable('user', (t) => {
    t.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user', t => {
    t.dropColumn('email')
  })
};