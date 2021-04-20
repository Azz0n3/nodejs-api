
exports.seed = function(knex) {
  return knex('user_data').del()
    .then(function () {
      return knex('user_data').insert([
        {id: 1, username: 'Gabriel', password: "1234", email: "gabriel.azzone@gmail.com"},
      ]);
    });
};
