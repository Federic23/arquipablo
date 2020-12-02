const ReviewRepository = require('../repositories/reviewRepository');
var Pipeline = require('../pipes-and-filters/pipeline/pipeline');
const { filterValidateClient } = require('../pipes-and-Filters/filters/validateClient');
const { filterVerifyDuplicate } = require('../pipes-and-Filters/filters/verifyDuplicate');
const { filterValidateComment } = require('../pipes-and-Filters/filters/validateComment');
const { filterRateSemantic } = require('../pipes-and-Filters/filters/rateSemantic');
const { filterNotifyNewReview } = require('../pipes-and-Filters/filters/notifyNewReview');
const { filterDetectBadWord } = require('../pipes-and-Filters/filters/detectBadWords');

module.exports = class ReviewService {
    constructor() {
        this.reviewRepository = new ReviewRepository();
    }
    async findAll(limit, offset) {
        return await this.reviewRepository.findAll(limit, offset);
    }
    async save(data) {
        var pipeline = new Pipeline();
        pipeline.use(filterValidateClient);
        pipeline.use(filterVerifyDuplicate);
        pipeline.use(filterValidateComment);
        pipeline.use(filterDetectBadWord);
        pipeline.use(filterRateSemantic);
        pipeline.use(filterNotifyNewReview);

        pipeline.run(data);
        return await this.reviewRepository.save(data);
    }
    async findById(id) {
        return await this.reviewRepository.findById(id);
    }
}