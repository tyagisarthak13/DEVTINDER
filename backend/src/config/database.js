import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sarthaktyagi797:cmFSmu23wlr8Jugi@namastenode.7pi5i.mongodb.net/devTinder"
  );
};

export default connectDB;
