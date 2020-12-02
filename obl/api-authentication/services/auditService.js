const AuditRepository = require('../repositories/auditRepository');

module.exports = class AuditService {
    constructor() {
        this.auditRepository = new AuditRepository();
    }
    async findAll(limit, offset) {
        return await this.auditRepository.findAll(limit, offset);
    }
    async save(client, status) {
        const audit = {
            clientId: client,
            status: status  
        };     
        return await this.auditRepository.save(audit);
    }
    async findById(id) {
        return await this.auditRepository.findById(id);
    }
}