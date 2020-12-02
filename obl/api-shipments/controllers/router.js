const Router = require('koa-router');
const ShipmnetController = require('./shipmentController');

const router = new Router();
const shipment = new ShipmnetController();

router.get('/shipments', (ctx, next) => shipment.list(ctx, next));
router.post('/shipments', (ctx, next) => shipment.save(ctx, next));
router.get('/shipments/:id', (ctx, next) => shipment.fetch(ctx, next));

module.exports = router;