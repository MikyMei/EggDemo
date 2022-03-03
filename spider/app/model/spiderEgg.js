/**

 * @author MikyMei

 * @date 2022-03-03 15:41

 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
  });
  return mongoose.model('spiderEgg', PostSchema);
};
