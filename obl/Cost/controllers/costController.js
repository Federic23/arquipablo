const CostService = require('../services/costService');

module.exports = class CostController {
    constructor() {
        this.costService = new CostService();
    }
    async cost (ctx, next) {
        let data = ctx.request.body;
        let plannedCost = await this.costService.cost(data);
        if (plannedCost) {
            ctx.body = { cost: plannedCost };
        } else {
            ctx.status = 400;
            ctx.body = { status: 400, message: 'Error' };
        }
        await next();
    }
}