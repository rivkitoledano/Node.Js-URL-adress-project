import mongoose from "mongoose";

const clickSchema = new mongoose.Schema({
  insertedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {
    type: String,
    required: true
  },
  targetParamValue: {
    type: String,
    default: ""
  }
});

const targetValueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const linkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  clicks: [clickSchema],
  targetParamName: {
    type: String,
    default: "t"
  },
  targetValues: [targetValueSchema]
});

export default mongoose.model('Link', linkSchema);
