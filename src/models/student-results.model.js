// student-results-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const modelName = 'studentResults';
    const mongooseClient = app.get('mongooseClient');
    const {Schema} = mongooseClient;
    const schema = new Schema({
        exam: {
            type: Schema.Types.ObjectId,
            ref: 'exams',
            required: true,
        },
        studentAnswer: {
            type: [
                {
                    question: {
                        type: Schema.Types.ObjectId,
                        ref: 'questions',
                    },
                    choice: {
                        type: [String],
                    }
                }
            ]
        }
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
