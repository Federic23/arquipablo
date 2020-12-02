const ReviewRepository = require('../repositories/reviewRepository');

this.reviewRepository = new ReviewRepository();

module.exports = {
    filterVerifyDuplicate,
};

var findById = (input, next) => {
    return await this.reviewRepository.findById(id);
};

var filterVerifyDuplicate = (input, next) => {
    //valida que no exista un review para este envio de la misma persona

    //devuelve la review o error

    findById( )
};

