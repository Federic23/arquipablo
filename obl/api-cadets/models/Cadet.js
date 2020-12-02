const Cadet = (schema, types) =>  { 
    return schema.define('cadet', {
        ci: { type: types.STRING, allowNull: false },
        firstName: { type: types.STRING, allowNull: false },
        lastName: { type: types.STRING, allowNull: false },
        email: { type: types.STRING, allowNull: false }
    });
};

module.exports = Cadet;