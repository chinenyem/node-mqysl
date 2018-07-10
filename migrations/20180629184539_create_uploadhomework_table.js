exports.up = function (knex) {
  return knex.schema.createTable('uploadHomeworkAssignment', function (t) {
    t.increments('id').primary()
    t.integer('title').notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.integer('relatedTopicID')
    t.integer('description')
    t.string('fileData')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('uploadHomeworkAssignment')
}
