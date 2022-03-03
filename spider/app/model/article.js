/**

 * @author MikyMei

 * @date 2022-03-03 15:41

 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    tag_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Tag',
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: '',
    },
    weather: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: [],
    },
    pv: {
      type: Number,
      default: 0,
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
  return mongoose.model('Article', PostSchema);
};
