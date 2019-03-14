const db = require("../db");

import * as Sequelize from "sequelize";

const Statistics = db.define("statisctics_show", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
    field: "id"
  },
  uid: {
    type: Sequelize.STRING,
    field: "uid"
  },
  landName: {
    type: Sequelize.STRING,
    field: "land_name"
  },
  offerId: {
    type: Sequelize.STRING,
    field: "offer_id"
  },
  isMobile: {
    type: Sequelize.BOOLEAN,
    field: "is_mobile"
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE
  }
});

export default Statistics;
