const Config = require('config');
const Sequelize = require('sequelize');
const ShipmentModel = require('../models/shipment');
//const CadetModel = require('../models/cadet');
//const ClientModel = require('../models/client');

module.exports = class Repository {
    constructor() {
        this.connection = null;
    }
    static async connect() {
        const databaseConfig = Config.get('repository');
        const dialectConfig = databaseConfig.mysql;
        this.connection = new Sequelize(dialectConfig.database, 
            dialectConfig.user, dialectConfig.password, dialectConfig.options);
    }
    static async loadModels() {
        const Shipment = ShipmentModel(this.connection, Sequelize);
        //const Cadet = CadetModel(this.connection, Sequelize);
        //const Client = ClientModel(this.connection, Sequelize);

       // Item.belongsTo(Order);
       // Order.hasMany(Item, { as: 'items' });
       //Cadet.hasOne(Shipment, { as: 'Shipment', foreignKey: 'cadetId' });
       //Cadet.hasOne(Shipment);

        module.exports.Shipment = Shipment;
       // module.exports.Cadet = Cadet;
     //   module.exports.Client = Client;

        return this.connection.sync();
    }
    static async initRepository() {
        try {
            await this.connect();
            await this.loadModels();
        } catch (err) {
            console.log(`Error trying to connect to database: ${err}`);
            throw err;
        }
    }
}