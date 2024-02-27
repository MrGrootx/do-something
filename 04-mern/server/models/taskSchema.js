const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("taskSchema", taskSchema);
