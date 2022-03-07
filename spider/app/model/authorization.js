/**

 * @author MikyMei

 * @date 2022-03-04 15:35

 */


module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    provider: {
      type: String,
      required: true,
    },
    uid: {
      type: Number,
      required: false,
    },
    user_id: {
      type: Number,
      required: false,
    },
  }, { versionKey: false });
  return mongoose.model('authorization', PostSchema);
};
