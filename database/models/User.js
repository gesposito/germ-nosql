module.exports = (mongoose) => {
  const { Schema } = mongoose;

  const userSchema = new Schema({
    'name': String,
    'username': String,
  });

  return mongoose.model('User', userSchema);;
};
