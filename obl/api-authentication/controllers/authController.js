const AuthService = require('../services/authService');
const AuditService = require('../services/auditService');

module.exports = class AuthController {
    constructor() {
        this.authService = new AuthService();
        this.auditService = new AuditService();
    }
    async login (ctx, next) {
        let data = ctx.request.body;
        let token = await this.authService.login(data);
        if (token) {
            ctx.body = { token: token };
            console.log ("login ok");
           await this.auditService.save(data.clientId, 'OK');
        } else {
            ctx.status = 401;
            ctx.body = { status: 401, message: 'Unauthorized' };
            console.log ("login error");
            await this.auditService.save(data.clientId, 'ERROR');
        }
        await next();
    }
}