const CadetRepository = require('../repositories/cadetRepository');

module.exports = class CadetService {
    constructor() {
        this.cadetRepository = new CadetRepository();
    }
    async findAll(limit, offset) {
        return await this.cadetRepository.findAll(limit, offset);
    }
    async save(data) {
        return await this.cadetRepository.save(data);
    }
    async findById(id) {
        return await this.cadetRepository.findById(id);
    }
}