const Router = require('koa-router');
const CostController = require('./costController');

const router = new Router();
const cost = new CostController();

router.get('/cost', (ctx, next) => cost.cost(ctx, next));

module.exports = router;