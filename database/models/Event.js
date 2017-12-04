module.exports = (mongoose) => {
  const { Schema } = mongoose;

  const eventSchema = new Schema({
    'name': String,
    'attendees': [
      {
        'type': Schema.Types.ObjectId,
        'ref': 'User'
      }
    ],
  });

  return mongoose.model('Event', eventSchema);;
};
