
exports.up = function (knex) {
  return knex.schema.createTable('topic', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.string('description').notNullable()
    t.integer('relatedCourseID')
    //t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamps(true,true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('topic')
}