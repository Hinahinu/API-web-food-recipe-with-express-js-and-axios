import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Comment = db.define('comment', {
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
    id_recipe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'recipe',
            key: 'id',
        },
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true
});

export default Comment;

(async () => {
    await db.sync();
})();