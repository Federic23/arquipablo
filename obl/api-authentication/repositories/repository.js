const Config = require('config');
const mongoose = require('mongoose');
const Audit = require('../models/audit');
const Schema = mongoose.Schema;

module.exports = class Repository {
    constructor() {
        this.connection = null;
    }
    static async connect() {
        this.connection = await mongoose.connect(this.getUrl(), { useNewUrlParser: true });
    }
    static async loadCollections() {
        const auditSchema = new Schema(Audit, { id: false });
        auditSchema.set('toObject', {
            transform: function (doc, ret) {
                ret.id = ret._id.toString();
                delete ret._id;
                delete ret.__v;
            }
        });
        module.exports.Audit = this.connection.model('Audit', auditSchema);
    }
    static getUrl() {
        let connectionUrl = Config.get('repository.url');
        return connectionUrl;
    }
    static async initRepository() {
        try {
            await this.connect();
            await this.loadCollections();
        } catch (err) {
            console.log(`Error trying to connect to database: ${err}`);
        }
    }
}