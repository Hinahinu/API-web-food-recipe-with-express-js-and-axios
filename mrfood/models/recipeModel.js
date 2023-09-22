import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Recipe = db.define('recipe', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    tittle: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descriptions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    freezeTableName: true
});

export default Recipe;

(async () => {
    await db.sync();
})();