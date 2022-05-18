// STRETCH
exports.seed = function(knex, Promise) {
    // we want to remove all data before seeding
    // truncate will reset the primary key each time
    return knex('cars').truncate()
      .then(function () {
        // add data into insert
        return knex('cars').insert([
          { vin: "14WHW85WDFG",
            make: "Ford",
            model: "KAKA",
            mileage: 3652.12,
            title: "this ones",
            transmission: "auto" },
            { vin: "SGST8316QTJSG",
            make: "Nissan",
            model: "CRature",
            mileage: 32.2,
            title: "tes",
            transmission: "auto" },
            { vin: "W85WDFG",
            make: "FErr",
            model: "Fast",
            mileage: 36552.12,
            title: "fasts",
            transmission: "manual" },
            { vin: "F83SWWJ8DFG",
            make: "CAR",
            model: "THE CAR",
            mileage: 420.69,
            title: "The Car IS a car",
            transmission: "auto" },
        ]);
      });
  };