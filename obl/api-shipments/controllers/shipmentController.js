const ShipmentService = require('../services/shipmentService');

module.exports = class ShipmentController {
    constructor() {
        this.shipmentService = new ShipmentService();
    }
    async list (ctx, next) {
        if (this.hasPermission(ctx, '/shipment/read')) {
            let limit = parseInt(ctx.query.limit) || 100;
            let offset = parseInt(ctx.query.offset) || 0;
            let list = (await this.shipmentService.findAll(limit, offset)) || [];
            ctx.body = { offset: offset, limit: limit, size: list.length, data: list };
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    async save (ctx, next) {
        if (this.hasPermission(ctx, '/shipment/write')) {
            let data = ctx.request.body;
            let user = await this.shipmentService.save(data);
            if (user) {
                ctx.body = user;
            } else {
                ctx.status = 400;
                ctx.body = { status: 400, message: `Invalid shipment data` };
            }
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    async fetch (ctx, next) {
        if (this.hasPermission(ctx, '/order/read')) {
            let id = ctx.params.id;
            let user = await this.shipmentService.findById(id);
            if (user) {
                ctx.body = user;
            } else {
                ctx.status = 404;
                ctx.body = { status: 404, message: `Shipment #${id} not found` };
            }
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    hasPermission(ctx, permission) {
        let data = ctx.state.user;
        let permissions = data.permissions.split(',');
        return permissions.includes(permission);
    }
}