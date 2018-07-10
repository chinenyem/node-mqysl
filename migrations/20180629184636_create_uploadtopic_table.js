exports.up = function (knex) {
  return knex.schema.createTable('uploadFilesTopic', function (t) {
    t.increments('id').primary()
    t.string('type').notNullable()
    t.integer('title').notNullable()
    t.integer('relatedTopicID')
    t.integer('description')
    t.string('fileData')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('uploadFilesTopic')
}
