module.exports.initServer = async function () {
    const Koa = require('koa');
    const json = require('koa-json');
    const bodyParser = require('koa-bodyparser');
    const router = require('./controllers/router');
    
    const app = new Koa();
    
    app.use(bodyParser());
    app.use(json({ pretty: true }));
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(8082);
    
    console.log(`Server started, see http://localhost:8082
        Endpoints:
            * GET /cost`
    );
}