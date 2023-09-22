import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const {DataTypes} = Sequelize;

const User = db.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();