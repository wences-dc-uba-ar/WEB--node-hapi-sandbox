'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      searchable: {
        type: Sequelize.BOOLEAN
      },
      reference_id: {
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      loaded_date: {
        type: Sequelize.DATEONLY
      },
      original_title: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      aired_from: {
        type: Sequelize.DATEONLY
      },
      aired_to: {
        type: Sequelize.DATEONLY
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      subtitled: {
        type: Sequelize.STRING
      },
      translated: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      apsect_ration: {
        type: Sequelize.FLOAT
      },
      countries: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.INTEGER
      },
      episode: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.STRING
      },
      sub_categories: {
        type: Sequelize.STRING
      },
      audio_tracks: {
        type: Sequelize.STRING
      },
      operators: {
        type: Sequelize.STRING
      },
      ranking: {
        type: Sequelize.INTEGER
      },
      relevance: {
        type: Sequelize.INTEGER
      },
      credits_begin_end: {
        type: Sequelize.INTEGER
      },
      credits_end_begin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Contents');
  }
};