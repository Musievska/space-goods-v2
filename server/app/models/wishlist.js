const Sequelize = require('sequelize');


module.exports = (sequelize) => {
    const Wishlist = sequelize.define('Wishlist', {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // 'Users' refers to table name
                key: 'id',
            },
        },
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Products', // 'Products' refers to table name
                key: 'id',
            },
        },
    }, {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    });

    return Wishlist;
};
