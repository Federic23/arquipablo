const Repository = require('./repository');

module.exports = class CadetRepository {
    constructor() {
        this.cadetRepository = Repository.Cadet;
        this.relations = [];
    }
    async findAll(limit, offset) {
        var query = { include: this.relations };
        if (limit) {
            query.limit = limit;
        }
        if (offset) {
            query.skip = offset;
        }
        let cadets = await this.cadetRepository.findAll(query);
        return cadets;
    }
    async save(data) {
        let cadet = await this.cadetRepository.create(data);
        return cadet;
    }
    async findById(id) {
        try {
            let cadet = await this.cadetRepository.findOne({ id: id, include: this.relations });
            return cadet;
        } catch (err) {
            return null;
        }
    }
}