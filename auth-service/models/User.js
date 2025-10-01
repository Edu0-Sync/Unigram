const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  cin: {
    type: String,
    required: true,
    unique: true,   // CIN must be unique for each student
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    sparse: true,   // allow null at the beginning (not all students have email yet)
  },
  password: {
    type: String,
    required: true, 
  },
  role: {
    type: String,
    enum: ["admin", "student", "teacher","chef"],
    default: "student",
  },
  
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);


