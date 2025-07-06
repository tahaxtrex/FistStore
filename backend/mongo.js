import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/skillSwap", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to local MongoDB"))
.catch(
    err =>{console.error("❌ MongoDB connection error:", err)
        process.exit(1);
    } 
);