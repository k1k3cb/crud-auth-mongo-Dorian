const { mongoose } = require('mongoose');

const UserScheme = mongoose.Schema(
  {
    image: {
      type: String
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

module.exports = UserScheme;
