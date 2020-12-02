const Router = require('koa-router');
const { route } = require('../../api-cadets/controllers/router');
const ReviewController = require('./reviewController');

const router = new Router();
const review = new ReviewController();

router.get('/reviews', (ctx, next) => review.list(ctx, next));
router.get('/reviews:id', (ctx, next) => review.list(ctx, next));
router.post('/reviews', (ctx, next) => review.save(ctx, next))

module.exports = router;