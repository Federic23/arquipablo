const ReviewService = require('../services/reviewService');

module.exports = class ReviewController {
    constructor() {
        this.reviewService = new ReviewService();
    }
    async list (ctx, next) {
        if (this.hasPermission(ctx, '/review/read')) {
            let list = (await this.reviewService.findAll()) || [];
            ctx.body = {data: list };
        } else {
            ctx.status = 403;
            ctx.body = { status: 403, message: 'Forbidden' };
        }
        await next();
    }
    // async save (ctx, next) {
    //     if (this.hasPermission(ctx, '/review/write')) {
    //         let data = ctx.request.body;
    //         let user = await this.reviewService.save(data);
    //         if (user) {
    //             ctx.body = user;
    //         } else {
    //             ctx.status = 400;
    //             ctx.body = { status: 400, message: `Invalid review data` };
    //         }
    //     } else {
    //         ctx.status = 403;
    //         ctx.body = { status: 403, message: 'Forbidden' };
    //     }
    //     await next();
    // }
    // async fetch (ctx, next) {
    //     if (this.hasPermission(ctx, '/order/read')) {
    //         let id = ctx.params.id;
    //         let user = await this.reviewService.findById(id);
    //         if (user) {
    //             ctx.body = user;
    //         } else {
    //             ctx.status = 404;
    //             ctx.body = { status: 404, message: `Review #${id} not found` };
    //         }
    //     } else {
    //         ctx.status = 403;
    //         ctx.body = { status: 403, message: 'Forbidden' };
    //     }
    //     await next();
    // }
    hasPermission(ctx, permission) {
        let data = ctx.state.user;
        let permissions = data.permissions.split(',');
        return permissions.includes(permission);
    }
}