export default (mongoose) => {
  const gradeModel = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('grades', gradeModel, 'grades');
};
