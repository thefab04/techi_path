const { type } = require("@testing-library/user-event/dist/type");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    emailOrMobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // 👇 Add progress tracking fields
    enrolledCourses: [
      {
        courseId: { type: String }, // or ObjectId ref to a Course model
        title: { type: String },
        progress: { type: Number, default: 0 }, // percent (0–100)
        lastAccessed: { type: Date, default: Date.now },
        completed: { type: Boolean, default: false },
      },
    ],

    // for resume later or email trigger
    lastCourseViewed: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
