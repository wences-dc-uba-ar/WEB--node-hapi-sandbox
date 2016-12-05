'use strict';
module.exports = function(sequelize, DataTypes) {
  var Content = sequelize.define('Content', {
    uuid: DataTypes.STRING,
    searchable: DataTypes.BOOLEAN,
    reference_id: DataTypes.INTEGER,
    class: DataTypes.STRING,
    type: DataTypes.STRING,
    loaded_date: DataTypes.DATEONLY,
    original_title: DataTypes.STRING,
    tags: DataTypes.STRING,
    keywords: DataTypes.STRING,
    aired_from: DataTypes.DATEONLY,
    aired_to: DataTypes.DATEONLY,
    runtime: DataTypes.INTEGER,
    subtitled: DataTypes.STRING,
    translated: DataTypes.STRING,
    original_language: DataTypes.STRING,
    apsect_ration: DataTypes.FLOAT,
    countries: DataTypes.STRING,
    season: DataTypes.INTEGER,
    episode: DataTypes.STRING,
    genres: DataTypes.STRING,
    categories: DataTypes.STRING,
    sub_categories: DataTypes.STRING,
    audio_tracks: DataTypes.STRING,
    operators: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    relevance: DataTypes.INTEGER,
    credits_begin_end: DataTypes.INTEGER,
    credits_end_begin: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Content;
};