const Review = (schema, types) =>  { 
    return schema.define('review', {
        IdReviewer: { type: types.INTEGER, allowNull: false },
        IdShipment: { type: types.INTEGER, allowNull: false },
        Description: { type: types.TEXT, allowNull: true },
        State: { type: types.TEXT, allowNull: true },
        RatingShipment: { type: types.INTEGER, allowNull: false },
        RatingCadet: { type: types.INTEGER, allowNull: false },
    });
};

module.exports = Review;