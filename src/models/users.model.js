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
          required: true
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
      avatar: {
          type: String,
          default: ''
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

};
