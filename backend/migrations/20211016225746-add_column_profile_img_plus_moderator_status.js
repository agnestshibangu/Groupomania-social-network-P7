'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.addColumn('Users', 'moderator', {
              type: Sequelize.BOOLEAN
          }, { transaction: t }),
          queryInterface.addColumn('Users', 'profileImgUrl', {
              type: Sequelize.STRING,
          }, { transaction: t })
      ])
  })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
            queryInterface.removeColumn('Users', 'moderator', { transaction: t }),
            queryInterface.removeColumn('Users', 'profileImgUrl', { transaction: t })
        ])
    })
}
};


  

