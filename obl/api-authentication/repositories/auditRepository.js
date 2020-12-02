const Repository = require('../repositories/repository');

module.exports = class AuditRepository {
    constructor() {
        this.auditRepository = Repository.Audit;
    }
    async findAll(limit, offset) {
        var query = this.auditRepository.find();
        if (limit) {
            query.limit(limit);
        }
        if (offset) {
            query.skip(offset);
        }
        let audits = await query;
        return audits.map((audit) => audit.toObject());
    }
    async save(data) {
        let user = await this.auditRepository.create(data);
        return user.toObject();
    }
    async findById(id) {
        try {
            let audit = await this.auditRepository.findOne({ _id: id });
            return audit ? audit.toObject() : null;
        } catch (err) {
            return null;
        }
    }
}