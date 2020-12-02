const Config = require('config');
const Sequelize = require('sequelize');
const ReviewModel = require('../models/review');

module.exports = class Repository {
    constructor() {
        this.connection = null;
    }
    static async connect() {
        const databaseConfig = Config.get('repository');
        const dialectConfig = databaseConfig.mysql;
        this.connection = new Sequelize(dialectConfig.database, dialectConfig.user, dialectConfig.password, dialectConfig.options);
    }
    static async loadModels() {
        const Review = ReviewModel(this.connection, Sequelize);
        module.exports.Review = Review;
        return this.connection.sync();
    }
    static async createReviews(){
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