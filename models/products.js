

const products = (connection, Sequelize) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    yearIntroduced: { type: Sequelize.DATEONLY },
    manufacturerId: { type: Sequelize.INTEGER }
  }, { paranoid: true })
}

module.exports = products
