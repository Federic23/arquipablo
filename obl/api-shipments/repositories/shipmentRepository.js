const Repository = require('./repository');

module.exports = class ShipmentRepository {
    constructor() {
        this.shipmentRepository = Repository.Shipment;
        //this.relations = ['cadets'];
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
        let shipments = await this.shipmentRepository.findAll(query);
        return shipments;
    }
    async save(data) {
        //let shipment = await this.shipmentRepository.create(data, { include: this.relations });
        let shipment = await this.shipmentRepository.create(data);
        return shipment;
    }
    async findById(id) {
        try {
            let shipment = await this.shipmentRepository.findOne({ id: id, include: this.relations });
            return shipment;
        } catch (err) {
            return null;
        }
    }
}