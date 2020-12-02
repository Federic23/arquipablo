const fs = require('fs');

module.exports = class CostService {
    cost (data) {
        var plannedCost =  (Math.floor(Math.random() * 500 + 1)) + 200;
        return plannedCost
    }
}