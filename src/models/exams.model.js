// exams-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const modelName = 'exams';
    const mongooseClient = app.get('mongooseClient');
    const {Schema} = mongooseClient;
    const schema = new Schema({
        type: {
            /**
             * 1. Drafts
             * 2. Scheduled Exams
             * 3. Practice Tests
             */
            type: Number,
            enum: [1, 2, 3],
            required: true,
            default: 1,
        },
        status: {
            /**
             * 1. Scheduled or created
             * 2. Ongoing Exams
             * 3. Completed Tests
             */
            type: Number,
            enum: [1, 2, 3],
            default: 1,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        duration: {
            type: Number,
            required: true,
        },
        guidelines: {
            type: [String],
            default: [],
        },
        difficulty: {
            /**
             * 1. Easy
             * 2. Medium
             * 3. Hard
             */
            type: Number,
            enum: [1, 2, 3],
        },
        examTags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'examTag',
                default: []
            },
        ],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        },
        scheduledAt: {
            type: Date,
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
