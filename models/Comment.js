const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

    Comment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull : false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull : false,
                references: {
                    model: 'post',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'comment',
        }
    );

module.exports = Comment;
