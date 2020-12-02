const ShipmentStatus = require('./shipmentStatus');

const Shipment = (schema, types) =>  { 
    return schema.define('shipment', {
        status: { type: types.INTEGER, validate: { len: Object.values(ShipmentStatus) }, defaultValue: ShipmentStatus.PENDING },
        description: { type: types.TEXT, allowNull: true },
        locationClientSender: { type: types.TEXT, allowNull: true },
        locationClientReciver: { type: types.TEXT, allowNull: true },
        paymentMethods: { type: types.TEXT, allowNull: true },
        commission: { type: types.TEXT, allowNull: true },
        picture: { type: types.TEXT, allowNull: true },
        idClientSender: { type: types.INTEGER, allowNull: true },
        idClientReciver: { type: types.INTEGER, allowNull: true },
        idCadet: { type: types.INTEGER, allowNull: true },
    });
};

module.exports = Shipment;