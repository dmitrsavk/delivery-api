const db = require("../db");

import * as Sequelize from "sequelize";

const LeadModel = db.define("lead", {
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
  name: {
    type: Sequelize.STRING,
    field: "name"
  },
  phone: {
    type: Sequelize.STRING,
    field: "phone"
  },
  formId: {
    type: Sequelize.STRING,
    field: "form_id"
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

export default LeadModel;
