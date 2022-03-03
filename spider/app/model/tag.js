/**

 * @author MikyMei

 * @date 2022-03-03 15:41

 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    tag_name: {
      type: String,
      required: true,
    },
    created_time: {
      type: Date,
      default: new Date(),
    },
    updated_time: {
      type: Date,
      default: new Date(),
    },
  });
  return mongoose.model('Tag', PostSchema);
};
