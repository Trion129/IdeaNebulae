'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("agreements", [
      {
        idea_id: 4,
        version: 12,
        agreement: "This is my own little agreement. Please honor it or there will be no empanadas for you!",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 1,
        version: 9,
        agreement: "Agree or it will be no empanadas for you!",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 9,
        version: 11,
        agreement: "This agreement binds you to Promise to worship Trion",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 10,
        version: 10,
        agreement: "Acceptance of this agreement certifies that you acknowledge Trion as the Supreme Overlord AI and you promise to hold empanadas created by him in reverence for all perpetuity.",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 8,
        version: 1,
        agreement: "You agree to 1) Eat more empanadas, 2) Refrain from eating, touching, or looking at any other batter coated food product, 3) Spread the good word about the beauty, quiet dignity, and general awesomeness of empanadas to your fellow Earthlings.",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 2,
        version: 8,
        agreement: "Agree or else!",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }, {
        idea_id: 5,
        version: 1,
        agreement: "This agreement is for the birds!",
        created_at: '2017-12-19 00:00:00',
        updated_at: '2017-12-19 00:00:00'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('agreements', null, {});
  }
};
