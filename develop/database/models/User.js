
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Invalid email'] },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = model('User', UserSchema);
