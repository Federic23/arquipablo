const Router = require('koa-router');
const ReviewController = require('./reviewController');

const router = new Router();
const review = new ReviewController();

router.get('/reviews', (ctx, next) => review.list(ctx, next));

module.exports = router;