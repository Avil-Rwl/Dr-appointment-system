import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  // Use full URI from env. Ensure your .env includes the DB name, e.g.
  // MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/prescripto
  await mongoose.connect(process.env.MONGODB_URI)
}

export default connectDB