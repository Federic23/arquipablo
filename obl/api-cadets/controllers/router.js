const Router = require('koa-router');
const CadetController = require('./cadetController');

const router = new Router();
const cadet = new CadetController();

router.get('/cadets', (ctx, next) => cadet.list(ctx, next));

module.exports = router;