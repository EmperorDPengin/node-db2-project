exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.text('vin', 120)
      .unique()
      .notNullable();
    tbl.text('make', 120)
      .notNullable();
    tbl.text('model', 120)
      .notNullable();
    tbl.decimal('mileage')
      .notNullable();
    tbl.text('title');
    tbl.text('transmission');
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars');
};
