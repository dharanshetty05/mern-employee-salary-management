import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DataLembur = db.define(
    "data_lembur",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        },
        jam_lembur: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        alasan: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
        status: {
        type: DataTypes.STRING,
        defaultValue: "Pending",
        },
    },
    {
        freezeTableName: true,
    }
);

export default DataLembur;