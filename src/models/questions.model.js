// questions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const modelName = 'questions';
    const mongooseClient = app.get('mongooseClient');
    const {Schema} = mongooseClient;
    const schema = new Schema({
        question: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            required: true,
        },
        answer: {
            type: [String],
            required: true,
        },
        exam: {
            type: Schema.Types.ObjectId,
            ref: 'exams',
            required: true,
        },
        mark: {
            type: Number,
            default: 4,
        },
    }, {
        timestamps: true
    });

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);

};
