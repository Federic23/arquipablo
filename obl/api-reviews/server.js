module.exports.initServer = async function () {
    const Config = require('config');
    const Koa = require('koa');
    const logger = require('koa-logger');
    const xmlParser = require('koa-xml-body');
    const bodyParser = require('koa-bodyparser');
    const respond = require('./middlewares/respond');
    const router = require('./controllers/router');
    const argv = require('minimist')(process.argv.slice(2));
    const jwt = require('koa-jwt');
    const fs = require('fs');
    const publicKey = fs.readFileSync('./config/public.key', 'utf8');
    
    const app = new Koa();
    const port = argv.port ? parseInt(argv.port) : 8083;
    
    app.use(jwt({ secret: publicKey, algorithms: ['RS256']}));
    app.use(logger());
    app.use(xmlParser(Config.get('middlewares.xmlParser')));
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(respond());
    app.listen(port);
    
    console.log(`Server started, see http://localhost:${port}
        Endpoints:
            * GET  /Reviews`);
}