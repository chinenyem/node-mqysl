

exports.up = function (knex) {
  return knex.schema.createTable('course', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.integer('relatedUserID').notNullable()
    t.timestamps(true,true)
    t.integer('total_seats')
    t.integer('students_registered')
    t.integer('seats_available')
    
   
   
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('course')
}
