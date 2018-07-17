exports.up = function (knex) {
  return knex.schema.createTable('uploadHomeworkAssignment', function (t) {
    t.increments('id').primary()
    t.integer('title').notNullable()
    t.timestamps(true,knex.fn.now())
    t.integer('relatedTopicID').notNullable()
    t.integer('description').notNullable()
    t.string('fileData').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('uploadHomeworkAssignment')
}
