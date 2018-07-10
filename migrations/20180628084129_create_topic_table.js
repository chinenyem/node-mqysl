

exports.up = function (knex) {
  return knex.schema.createTable('topic', function (t) {
    t.increments('id').primary()
    t.string('title').notNullable()
    t.string('description').notNullable()
    t.integer('relatedCourseID').notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('topic')
}
