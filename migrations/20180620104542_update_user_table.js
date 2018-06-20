
exports.up = function(knex, Promise) {
 return knex.schema.alterTable('user', (t) => {
    t.timestamp('updated_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user', t => {
    t.dropColumn('updated_at')
  })
};
