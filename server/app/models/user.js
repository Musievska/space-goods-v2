const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: { len: [8, 100] },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '<WILL BE REPLACED>'
    },
  }, { sequelize, modelName: 'user' });

  User.beforeSave(async (user, options) => {
    if (user.changed('password')) {
      user.passwordHash = await bcrypt.hash(user.password, 10);
    }
  });

  return User;
};


