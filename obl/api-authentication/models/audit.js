const Audit = {
    clientId: { type: String, required: false },
    status: { type: String,  required: true},
    date: { type: String, default: Date.now(), required: true }
};

module.exports = Audit;