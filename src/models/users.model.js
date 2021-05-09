// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
export default function (app) {
    const modelName = 'users';
    const mongooseClient = app.get('mongooseClient');
    const schema = new mongooseClient.Schema({

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
        },
        role: {
            /**
         * 11. User
         * 22. Organization
         * 33. Admin
         */
            type: Number,
            enum: [1,2,3,4],
        },

        gender: {
            /**
           * 1. male
           * 2. female
           * 3. binary
           * 4. rather not to say
           */
            type: Number,
            default: 0
        },
        userName: {
            type: String,
            unique: true,
            lowercase: true,
        },
        avatar: {
            type: String,
            default: ''
        },
        address:{
            type: {
                lane: {
                    type: String,
                },
                city: {
                    type: String,
                },
                state: {
                    type: String,
                },
                pinCode: {
                    type: String,
                },
            }
        },
        active: {
            type: Boolean,
            default: true
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

}
