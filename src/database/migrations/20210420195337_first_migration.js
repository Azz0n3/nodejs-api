
exports.up = async function(knex) {
    await knex.schema.createTable('user_data', table => {
        table.increments('id').primary().unsigned();
        table.string('username', 10).notNullable().unique();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.raw('current_timestamp'));
        table.timestamp('updated_at').defaultTo(knex.raw('current_timestamp'));
    });

    
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('user_data');
};
