const ShipmentRepository = require('../repositories/shipmentRepository');

module.exports = class ShipmentService {
    constructor() {
        this.shipmentRepository = new ShipmentRepository();
    }
    async findAll(limit, offset) {
        return await this.shipmentRepository.findAll(limit, offset);
    }
    async save(data) {
        return await this.shipmentRepository.save(data);
    }
    async findById(id) {
        return await this.shipmentRepository.findById(id);
    }
}