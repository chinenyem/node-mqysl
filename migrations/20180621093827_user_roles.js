
exports.up = function(knex, Promise) {
   return knex.schema.createTable('roles', function (t) {
    t.increments('id').primary()
    t.string('role').notNullable()
  })
 .then(() => {
    return knex('roles').returning('id')
          .insert(
             [
               {role: 'AdminMaster'}, 
               {role: 'AdminTeacher'},
               {role: 'AdminAssitant'}, 
               {role: 'Student'}
             ])
  })
  .then(() => {
     return knex.schema.alterTable('user', (t) => {
        t.integer('relatedRoleID');
      })
   })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('roles')
  .then(() => {
     return knex.schema.table('user', t => {
         t.dropColumn('relatedRoleID')
      })
   })
};
