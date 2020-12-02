const Repository = require('./repository');

module.exports = class ReviewRepository {
    constructor() {
        this.reviewRepository = Repository.Review;
        this.relations = [];
    }
    async findAll(limit, offset) {
        var query = { include: this.relations };
        if (limit) {
            query.limit = limit;
        }
        if (offset) {
            query.skip = offset;
        }
        let reviews = await this.reviewRepository.findAll(query);
        return reviews;
    }
    async save(data) {
        let review = await this.reviewRepository.create(data);
        return review;
    }
    async findById(id) {
        try {
            let review = await this.reviewRepository.findOne({ id: id, include: this.relations });
            return review;
        } catch (err) {
            return null;
        }
    }
}