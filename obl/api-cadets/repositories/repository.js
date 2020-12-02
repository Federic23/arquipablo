const Config = require('config');
const Sequelize = require('sequelize');
const CadetModel = require('../models/cadet');

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
        const Cadet = CadetModel(this.connection, Sequelize);
        module.exports.Cadet = Cadet;
        return this.connection.sync();
    }
    static async createCadets(){
        //await sequelize.sync();
        const Cadet = CadetModel(this.connection, Sequelize);
        let cadet1 = await Cadet.create({
            ci: '1',
            firstName: 'Luis',
            lastName: 'Suarez',
            email: 'ellucho@mail.com',
        });
        let cadet2 = await Cadet.create({
            ci: '2',
            firstName: 'Edinson',
            lastName: 'Cavani',
            email: 'elindio@mail.com',
        });
        let cadet3 = await Cadet.create({
            ci: '3',
            firstName: 'Diego',
            lastName: 'Godin',
            email: 'elfaraon@mail.com',
        });
        let cadet4 = await Cadet.create({
            ci: '4',
            firstName: 'Martin',
            lastName: 'Caceres',
            email: 'elpelado@mail.com',
        });
    }
    static async initRepository() {
        try {
            await this.connect();
            await this.loadModels();
            await this.createCadets();
        } catch (err) {
            console.log(`Error trying to connect to database: ${err}`);
            throw err;
        }
    }
}